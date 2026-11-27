/**
 * Central Business Configuration for Hindustan Marine
 * 
 * Location: Bhavnagar, Gujarat, India
 * Single source of truth for all business contact details, maps, and integration settings.
 * Replace placeholders with verified client data when received.
 */

export interface SocialLinks {
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  indiamart?: string;
}

export interface BusinessConfig {
  businessName: string;
  tagline: string;
  shortDescription: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  address: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string; // international format without + or spaces for wa.me URL
  whatsappDisplay: string;
  email: string;
  exportEmail: string;
  businessHours: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl?: string;
  socialLinks: SocialLinks;
  baseUrl: string;
  isFormBackendConfigured: boolean;
  formEndpoint?: string;
}

export const businessConfig: BusinessConfig = {
  businessName: "Hindustan Marine",
  tagline: "Components, Machine Parts & Technical Solutions",
  shortDescription: "Bhavnagar-based industrial enterprise supplying electronic components, machine spares, diagnostic repair services, and export supply.",
  city: "Bhavnagar",
  state: "Gujarat",
  country: "India",
  pincode: "364001",
  address: "Bhavnagar Industrial Corridor, Bhavnagar, Gujarat - 364001, India [CLIENT_ADDRESS_REQUIRED]",
  phone: "+91 98765 43210 [CLIENT_PHONE_REQUIRED]",
  phoneRaw: "+919876543210",
  whatsapp: "919876543210", // Target number for wa.me links
  whatsappDisplay: "+91 98765 43210 [CLIENT_WHATSAPP_REQUIRED]",
  email: "contact@hindustanmarine.example.com [CLIENT_EMAIL_REQUIRED]",
  exportEmail: "export@hindustanmarine.example.com [CLIENT_EXPORT_EMAIL_REQUIRED]",
  businessHours: "Monday – Saturday: 09:30 AM – 07:00 PM IST (Sunday Closed)",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bhavnagar+Gujarat+India",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118556.78652434522!2d72.08053074999999!3d21.7644725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5081abb98cf7%3A0xbcc00508cb439563!2sBhavnagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/hindustan-marine",
  },
  baseUrl: "https://hindustanmarinetrading.com",
  isFormBackendConfigured: false, // Set to true when email/form endpoint is configured
  formEndpoint: "", // e.g. "https://formspree.io/f/..." or custom backend API
};
