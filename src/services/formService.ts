import { businessConfig } from '../config/businessConfig';

export interface FormSubmissionResult {
  success: boolean;
  isBackendConfigured: boolean;
  message: string;
}

/**
 * Validates an email string format
 */
export const isValidEmail = (email: string): boolean => {
  if (!email || email.trim() === '') return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
};

/**
 * Validates phone / WhatsApp numbers (minimum 7 digits, allows +, spaces, dashes, parentheses)
 */
export const isValidPhone = (phone: string): boolean => {
  if (!phone || phone.trim() === '') return false;
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 7 && digitsOnly.length <= 15;
};

/**
 * Handles form submission logic with honest configuration checking.
 * Never pretends a message was sent over email if backend is unconfigured.
 */
export const submitFormPayload = async (
  formType: 'contact' | 'repair' | 'rfq',
  payload: Record<string, any>
): Promise<FormSubmissionResult> => {
  // If backend is not configured, return honest fallback state
  if (!businessConfig.isFormBackendConfigured || !businessConfig.formEndpoint) {
    return {
      success: false,
      isBackendConfigured: false,
      message: 'External email service is awaiting client configuration. Please click the button below to transfer your details directly to WhatsApp.',
    };
  }

  try {
    const response = await fetch(businessConfig.formEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        formType,
        timestamp: new Date().toISOString(),
        ...payload,
      }),
    });

    if (response.ok) {
      return {
        success: true,
        isBackendConfigured: true,
        message: 'Your inquiry has been successfully delivered. Our team will review your specifications and contact you promptly.',
      };
    } else {
      return {
        success: false,
        isBackendConfigured: true,
        message: 'Unable to deliver inquiry via email endpoint. Please send your details directly via WhatsApp.',
      };
    }
  } catch (error) {
    return {
      success: false,
      isBackendConfigured: true,
      message: 'Network error communicating with the inquiry endpoint. Please use WhatsApp for immediate assistance.',
    };
  }
};
