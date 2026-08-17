export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '+919876543210';
export const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER || '+919876543210';
export const CONTRACTOR_NAME = import.meta.env.VITE_CONTRACTOR_NAME || 'Nandlal Ahirwar';
export const CONTRACTOR_TAGLINE = import.meta.env.VITE_CONTRACTOR_TAGLINE || 'Building Better Villages, One Project at a Time.';
export const EMAIL_ADDRESS = import.meta.env.VITE_EMAIL_ADDRESS || 'contact@nandlalahirwar.in';
export const OFFICE_LOCATION = import.meta.env.VITE_OFFICE_LOCATION || 'Village Development Office, Rural Construction Works';

/**
 * Generates a clean WhatsApp direct link with an encoded message.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const cleanPhone = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  const message = customMessage || `Namaste, I would like to discuss a construction project with ${CONTRACTOR_NAME}.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a WhatsApp link for a specific service.
 */
export function getServiceWhatsAppUrl(serviceTitle: string): string {
  return getWhatsAppUrl(`Namaste, I am interested in discussing a ${serviceTitle} project with ${CONTRACTOR_NAME}.`);
}

/**
 * Generates a WhatsApp link for a specific project.
 */
export function getProjectWhatsAppUrl(projectTitle: string): string {
  return getWhatsAppUrl(`Namaste, I saw your "${projectTitle}" project and would like to discuss a similar construction requirement with ${CONTRACTOR_NAME}.`);
}

/**
 * Generates a WhatsApp link from a consultation form submission.
 */
export function getConsultationWhatsAppUrl(data: {
  name: string;
  phone: string;
  location?: string;
  projectType: string;
  projectSize?: string;
  message?: string;
}): string {
  const text = [
    `*New Project Consultation Request*`,
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
    data.location ? `*Village/Location:* ${data.location}` : '',
    `*Project Type:* ${data.projectType}`,
    data.projectSize ? `*Approx Size:* ${data.projectSize}` : '',
    data.message ? `*Details:* ${data.message}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  return getWhatsAppUrl(text);
}
