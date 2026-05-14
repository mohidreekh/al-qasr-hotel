import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_rexjxhg';
const PUBLIC_KEY = '3bjDk8iI2SzgcLGun';

export const EMAIL_TEMPLATES = {
  BOOKING: 'template_fsmbkdc',
  CONTACT: 'template_bynsbf1',
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
