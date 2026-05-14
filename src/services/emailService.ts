import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const EMAIL_TEMPLATES = {
  BOOKING: import.meta.env.VITE_EMAILJS_TEMPLATE_BOOKING,
  CONTACT: import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT,
};

export const sendEmail = async (templateId: string, templateParams: Record<string, any>) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      templateId,
      templateParams,
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error('EmailJS Service Error:', error);
    throw error;
  }
};

export const sendBookingEmail = (params: {
  fullName: string;
  phoneNumber: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  adults: number;
  children: number;
}) => {
  return sendEmail(EMAIL_TEMPLATES.BOOKING, params);
};

export const sendContactEmail = (params: {
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}) => {
  return sendEmail(EMAIL_TEMPLATES.CONTACT, params);
};
