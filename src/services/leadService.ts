import { LeadFormData } from '../types';

// Client Google Sheet Webhook URL placeholder.
// The user can replace this URL with their Google Apps Script / Webhook URL.
const GOOGLE_SHEET_WEBHOOK_URL = ''; 

export const submitLead = async (data: LeadFormData): Promise<{ success: boolean; message: string }> => {
  const payload = {
    ...data,
    timestamp: new Date().toISOString(),
    status: 'New'
  };

  // 1. Always store locally in localStorage backup queue
  try {
    const existingLeadsRaw = localStorage.getItem('onyx_captured_leads');
    const existingLeads = existingLeadsRaw ? JSON.parse(existingLeadsRaw) : [];
    existingLeads.push(payload);
    localStorage.setItem('onyx_captured_leads', JSON.stringify(existingLeads));
  } catch (err) {
    console.warn('Unable to write to local lead storage fallback:', err);
  }

  // 2. If Webhook URL is configured, post payload
  if (GOOGLE_SHEET_WEBHOOK_URL) {
    try {
      const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      return {
        success: true,
        message: 'Thank you! Your enquiry has been received. The ONYX team will get in touch with you shortly.'
      };
    } catch (error) {
      console.error('Error submitting lead to Google Sheets webhook:', error);
      // Fallback message indicating lead is captured locally
      return {
        success: true,
        message: 'Thank you! Your enquiry has been recorded. The ONYX team will get in touch with you shortly.'
      };
    }
  }

  // If no webhook configured yet, simulate successful receipt (saved locally)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Thank you. Your enquiry has been received. The ONYX team will get in touch with you shortly.'
      });
    }, 600);
  });
};
