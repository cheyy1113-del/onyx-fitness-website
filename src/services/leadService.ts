/// <reference types="vite/client" />

const GOOGLE_APPS_SCRIPT_WEBAPP_URL =
  import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycbwRaPFArYAmgJ62EFBfkwsvf32C0es_xeE_ioLNMJrEu80duxbPiyASS1dkpbOwYMa3Gw/exec';

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
  // Extract required exact fields: name, phone, email, trainingInterest, message
  const extraDetails = [
    data.preferredDate ? `Date: ${data.preferredDate}` : '',
    data.preferredTime ? `Time: ${data.preferredTime}` : '',
    data.trainingGoal ? `Goal: ${data.trainingGoal}` : '',
    data.message ? `Notes: ${data.message}` : ''
  ].filter(Boolean).join(' | ');

  const name = data.fullName ? data.fullName.trim() : '';
  const phone = data.phone ? data.phone.trim() : '';
  const email = data.email ? data.email.trim() : '';
  const trainingInterest = data.interestedIn || 'General Enquiry';
  const message = extraDetails || (data.message ? data.message.trim() : 'No additional notes');

  if (!name || !phone || !email) {
    return {
      success: false,
      message: 'Please provide your Full Name, Phone Number, and Email Address.'
    };
  }

  // Backup locally to localStorage queue
  try {
    const existing = JSON.parse(localStorage.getItem('onyx_captured_leads') || '[]');
    existing.push({
      name,
      phone,
      email,
      trainingInterest,
      message,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('onyx_captured_leads', JSON.stringify(existing));
  } catch (e) {
    console.warn('Local storage lead queue write error:', e);
  }

  try {
    // Send exact required fields via URLSearchParams HTTP POST
    const body = new URLSearchParams();
    body.append('name', name);
    body.append('phone', phone);
    body.append('email', email);
    body.append('trainingInterest', trainingInterest);
    body.append('message', message);

    await fetch(GOOGLE_APPS_SCRIPT_WEBAPP_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString()
    });

    return {
      success: true,
      message: 'Thank you! Your enquiry has been submitted. Our team will contact you shortly.'
    };
  } catch (error) {
    console.error('Google Sheets POST submission failed:', error);
    return {
      success: false,
      message: 'Unable to submit enquiry right now. Please check your connection or contact us on WhatsApp.'
    };
  }
};
