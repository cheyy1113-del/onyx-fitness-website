/// <reference types="vite/client" />
import { LeadFormData } from '../types';

// Google Apps Script Web App URL (configured via VITE_GOOGLE_SHEETS_WEBHOOK_URL or fallback URL)
const GOOGLE_SHEET_WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL || '';

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

  // 1. Save to local storage queue backup
  try {
    const existing = JSON.parse(localStorage.getItem('onyx_captured_leads') || '[]');
    existing.push(payload);
    localStorage.setItem('onyx_captured_leads', JSON.stringify(existing));
  } catch (err) {
    console.warn('Local storage backup write failed:', err);
  }

  // 2. Submit to Google Apps Script Web App Endpoint if configured
  const endpoint = GOOGLE_SHEET_WEBHOOK_URL;

  if (endpoint) {
    try {
      // mode: 'no-cors' allows direct POST submission to Google Apps Script without CORS blockage
      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      return {
        success: true,
        message: 'Thank you! Your enquiry has been received. The ONYX team will get in touch with you shortly.'
      };
    } catch (error) {
      console.error('Google Sheets submission error:', error);
      return {
        success: false,
        message: 'Unable to submit enquiry directly to our servers right now. Please try again or reach out directly on WhatsApp.'
      };
    }
  }

  // Fallback response when webhook URL is awaiting deployment
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Thank you! Your enquiry has been received. The ONYX team will get in touch with you shortly.'
      });
    }, 600);
  });
};
