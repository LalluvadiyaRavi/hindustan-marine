import { businessConfig } from '../config/businessConfig';

/**
 * Normalizes the phone number and encodes message into a direct WhatsApp wa.me URL
 */
export const createWhatsAppUrl = (message: string): string => {
  const cleanNumber = businessConfig.whatsapp.replace(/\D/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
};

/**
 * 1. General business inquiry
 */
export const getGeneralWhatsAppUrl = (): string => {
  const message = `Hello Hindustan Marine,\nI would like to inquire about your components, machine parts, and technical services.\nPlease share more information.`;
  return createWhatsAppUrl(message);
};

/**
 * 2. Product-specific inquiry
 */
export const getProductWhatsAppUrl = (
  productName: string,
  modelOrPartNo?: string,
  category?: string
): string => {
  const modelPartText = modelOrPartNo || (category ? `${category} Reference` : 'Standard Specifications');
  
  const message = `Hello Hindustan Marine,\nI am interested in ${productName}.\nModel/Part No: ${modelPartText}\nPlease share availability and quotation.`;
  return createWhatsAppUrl(message);
};

/**
 * 3. Repair & workshop service inquiry
 */
export interface RepairInquiryParams {
  customerName?: string;
  phone?: string;
  equipment?: string;
  brand?: string;
  model?: string;
  problem?: string;
  preferredContact?: string;
  message?: string;
}

export const getRepairWhatsAppUrl = (params?: RepairInquiryParams | string): string => {
  if (!params) {
    const defaultMsg = `Hello Hindustan Marine,\nI need repair/service assistance.\nPlease contact me regarding workshop inspection.`;
    return createWhatsAppUrl(defaultMsg);
  }

  if (typeof params === 'string') {
    const simpleMsg = `Hello Hindustan Marine,\nI need repair/service assistance for: ${params}.\nPlease contact me regarding this service.`;
    return createWhatsAppUrl(simpleMsg);
  }

  const equipmentText = params.equipment || 'Industrial Equipment / Component';
  const modelText = [params.brand, params.model].filter(Boolean).join(' ') || 'Standard / Unspecified';
  const issueText = params.problem || params.message || 'Technical inspection and diagnostics required';

  let message = `Hello Hindustan Marine,\nI need repair/service assistance.\nEquipment: ${equipmentText}\nModel: ${modelText}\nIssue: ${issueText}\nPlease contact me regarding this service.`;

  if (params.customerName || params.phone || params.preferredContact) {
    message += `\n\nContact Details:`;
    if (params.customerName) message += `\nName: ${params.customerName}`;
    if (params.phone) message += `\nPhone: ${params.phone}`;
    if (params.preferredContact) message += `\nPreferred Contact: ${params.preferredContact}`;
  }

  return createWhatsAppUrl(message);
};

/**
 * 4. Machine parts & RFQ inquiry
 */
export interface MachinePartsInquiryParams {
  customerName?: string;
  company?: string;
  country?: string;
  phone?: string;
  email?: string;
  partRequired: string;
  partNumber?: string;
  quantity?: string;
  application?: string;
  requirements?: string;
  additionalNotes?: string;
}

export const getMachinePartsWhatsAppUrl = (params: MachinePartsInquiryParams): string => {
  const partText = params.partNumber 
    ? `${params.partRequired} (${params.partNumber})`
    : params.partRequired;
  const quantityText = params.quantity || '1 Unit';
  const applicationText = params.application || params.requirements || 'Industrial / Marine Application';

  let message = `Hello Hindustan Marine,\nI would like to inquire about a machine part.\nPart: ${partText}\nQuantity: ${quantityText}\nApplication: ${applicationText}\nPlease share availability and quotation.`;

  if (params.customerName || params.company || params.country || params.phone || params.email || params.additionalNotes) {
    message += `\n\nBuyer Details:`;
    if (params.customerName) message += `\nName: ${params.customerName}`;
    if (params.company) message += `\nCompany: ${params.company}`;
    if (params.country) message += `\nLocation: ${params.country}`;
    if (params.phone) message += `\nPhone: ${params.phone}`;
    if (params.email) message += `\nEmail: ${params.email}`;
    if (params.additionalNotes) message += `\nNotes: ${params.additionalNotes}`;
  }

  return createWhatsAppUrl(message);
};
