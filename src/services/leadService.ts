/// <reference types="vite/client" />
import { LeadFormData } from '../types';

// Webhook URL configuration (reads from .env VITE_GOOGLE_SHEETS_WEBHOOK_URL or localStorage override)
const getWebhookUrl = (): string => {
  return (
    import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL ||
    (typeof window !== 'undefined' ? localStorage.getItem('onyx_sheets_webhook_url') || '' : '')
  );
};

export interface LeadSubmissionPayload {
  fullName: string;
  phone: string;
  email: string;
  interestedIn?: string;
  preferredDate?: string;
  preferredTime?: string;
  trainingGoal?: string;
  message?: string;
  source?: string;
}

export const submitLead = async (data: LeadSubmissionPayload): Promise<{ success: boolean; message: string }> => {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const payload = {
    timestamp,
    name: data.fullName,
    phone: data.phone,
    email: data.email,
    trainingInterest: data.interestedIn || 'General Enquiry',
    message: [
      data.preferredDate ? `Date: ${data.preferredDate}` : '',
      data.preferredTime ? `Time: ${data.preferredTime}` : '',
      data.trainingGoal ? `Goal: ${data.trainingGoal}` : '',
      data.message ? `Notes: ${data.message}` : ''
    ].filter(Boolean).join(' | ') || 'No additional notes',
    source: data.source || 'Website Form'
  };

  // 1. Save locally to localStorage backup queue
  try {
    const existing = JSON.parse(localStorage.getItem('onyx_captured_leads') || '[]');
    existing.push(payload);
    localStorage.setItem('onyx_captured_leads', JSON.stringify(existing));
  } catch (err) {
    console.warn('Local storage lead queue write error:', err);
  }

  const endpoint = getWebhookUrl();

  // 2. Submit to Google Apps Script Web App Endpoint if endpoint URL is configured
  if (endpoint) {
    try {
      // Send as URLSearchParams form payload so Google Apps Script handles e.parameter natively
      const formData = new URLSearchParams();
      formData.append('timestamp', payload.timestamp);
      formData.append('name', payload.name);
      formData.append('phone', payload.phone);
      formData.append('email', payload.email);
      formData.append('trainingInterest', payload.trainingInterest);
      formData.append('message', payload.message);
      formData.append('source', payload.source);

      // Submit via fetch with mode: 'no-cors' to bypass Google Apps Script CORS redirect headers
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });

      return {
        success: true,
        message: 'Thank you! Your enquiry has been received. The ONYX team will get in touch with you shortly.'
      };
    } catch (error) {
      console.error('Google Sheets submission error:', error);
      return {
        success: false,
        message: 'Unable to submit enquiry directly right now. Please try again or message us on WhatsApp.'
      };
    }
  }

  console.info(
    'ONYX Lead Captured locally. To log directly to your Google Sheet (https://docs.google.com/spreadsheets/d/1-ssMCfgTwmEgIh44U-OHKsn7gNOQg-8Crl524nC1bBY/edit), add your Google Apps Script Web App URL to .env as VITE_GOOGLE_SHEETS_WEBHOOK_URL.'
  );

  return {
    success: true,
    message: 'Thank you! Your enquiry has been received. The ONYX team will get in touch with you shortly.'
  };
};
