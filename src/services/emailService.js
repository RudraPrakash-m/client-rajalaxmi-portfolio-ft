import emailjs from "emailjs-com";

/**
 * Sends contact form email using EmailJS
 * @param {Object} formData
 */
export const sendContactEmail = async (formData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  return emailjs.send(serviceId, templateId, formData, publicKey);
};
