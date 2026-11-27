import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { SectionHeading } from '../components/common/SectionHeading';
import { getGeneralWhatsAppUrl, createWhatsAppUrl } from '../utils/whatsapp';
import { isValidPhone, isValidEmail, submitFormPayload } from '../services/formService';
import { usePageMeta } from '../hooks/usePageMeta';

export const ContactPage: React.FC = () => {
  usePageMeta({
    title: 'Contact Us',
    description: 'Contact Hindustan Marine in Bhavnagar, Gujarat for component inquiries, workshop repair, and machine parts quotation.'
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Electronic Components Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{ success: boolean; isConfigured: boolean; message: string } | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!contactForm.name.trim()) errors.name = 'Full name is required';
    if (!contactForm.phone.trim()) {
      errors.phone = 'Phone / WhatsApp number is required';
    } else if (!isValidPhone(contactForm.phone)) {
      errors.phone = 'Please enter a valid phone number (minimum 7 digits)';
    }

    if (contactForm.email.trim() && !isValidEmail(contactForm.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!contactForm.message.trim()) errors.message = 'Message details are required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const result = await submitFormPayload('contact', contactForm);
    setIsSubmitting(false);
    setSubmissionResult({
      success: result.success,
      isConfigured: result.isBackendConfigured,
      message: result.message,
    });
    setSubmitted(true);
  };

  const whatsappMessage = `Hello Hindustan Marine,\nI would like to make an inquiry regarding: ${contactForm.subject}\n\nName: ${contactForm.name}\nPhone: ${contactForm.phone}\nEmail: ${contactForm.email || 'N/A'}\n\nRequirement Details:\n${contactForm.message}\n\nPlease share availability and quotation.`;
  const directWhatsAppUrl = createWhatsAppUrl(whatsappMessage);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Header Banner */}
      <div className="bg-marine-950 text-white border-b border-marine-800 py-12 sm:py-16 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-accent-orange">Contact</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-marine-900 border border-marine-700 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-accent-orange"></span>
              <span>GET IN TOUCH</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-white">
              Contact Hindustan Marine
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Connect with our Bhavnagar office for product inquiries, workshop repair assistance, machine parts RFQs, and export communication.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        
        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Office Location */}
          <div className="bg-white rounded-xl border border-surface-border p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-marine-50 border border-marine-100 flex items-center justify-center text-marine-900">
              <MapPin className="w-5 h-5 text-accent-orange" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-charcoal-400 uppercase font-bold">Office & Location</span>
              <h3 className="text-sm font-bold text-charcoal-900 font-heading mt-0.5">
                {businessConfig.city}, {businessConfig.state}
              </h3>
            </div>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              {businessConfig.address}
            </p>
          </div>

          {/* Card 2: Phone & Call */}
          <div className="bg-white rounded-xl border border-surface-border p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-marine-50 border border-marine-100 flex items-center justify-center text-marine-900">
              <Phone className="w-5 h-5 text-marine-700" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-charcoal-400 uppercase font-bold">Phone Support</span>
              <h3 className="text-sm font-bold text-charcoal-900 font-heading mt-0.5">
                Direct Telephone
              </h3>
            </div>
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="text-xs font-mono text-marine-900 font-medium hover:underline block"
            >
              {businessConfig.phone}
            </a>
            <div className="text-[11px] text-charcoal-500">
              {businessConfig.businessHours}
            </div>
          </div>

          {/* Card 3: WhatsApp Primary */}
          <div className="bg-white rounded-xl border border-surface-border p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <MessageSquare className="w-5 h-5 text-accent-whatsapp fill-accent-whatsapp" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-emerald-600 uppercase font-bold">Primary B2B Chat</span>
              <h3 className="text-sm font-bold text-charcoal-900 font-heading mt-0.5">
                Instant WhatsApp
              </h3>
            </div>
            <p className="text-xs font-mono text-charcoal-700">
              {businessConfig.whatsappDisplay}
            </p>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 underline pt-1"
            >
              <span>Open WhatsApp Chat</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Card 4: Email Inquiries */}
          <div className="bg-white rounded-xl border border-surface-border p-6 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-marine-50 border border-marine-100 flex items-center justify-center text-marine-900">
              <Mail className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-charcoal-400 uppercase font-bold">Written Inquiries</span>
              <h3 className="text-sm font-bold text-charcoal-900 font-heading mt-0.5">
                Official Email
              </h3>
            </div>
            <div className="space-y-1 text-xs font-mono text-charcoal-700 truncate">
              <a href={`mailto:${businessConfig.email.split(' ')[0]}`} className="hover:underline block truncate">
                {businessConfig.email}
              </a>
              <a href={`mailto:${businessConfig.exportEmail.split(' ')[0]}`} className="text-[11px] text-charcoal-500 hover:underline block truncate">
                {businessConfig.exportEmail}
              </a>
            </div>
          </div>

        </div>

        {/* Contact Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: General Contact Form (Spans 7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <SectionHeading
                badge="Direct Form // Inquiries"
                title="Send a Message"
                subtitle="Fill out the form below or message our team directly on WhatsApp for an immediate response."
              />
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-surface-warm border border-surface-border space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-white text-marine-900 flex items-center justify-center mx-auto border border-surface-border shadow-xs">
                  <CheckCircle2 className="w-6 h-6 text-accent-orange" />
                </div>
                <h4 className="text-base font-bold text-charcoal-900 font-heading">
                  Message Prepared for WhatsApp
                </h4>
                
                {/* Honest backend configuration notice */}
                {!submissionResult?.isConfigured ? (
                  <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 text-left space-y-2">
                    <div className="font-semibold flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>Submission Method Notice</span>
                    </div>
                    <p>
                      Direct WhatsApp is our active inquiry channel. Click below to continue your conversation on WhatsApp with the details pre-filled.
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-charcoal-600">
                    {submissionResult?.message}
                  </p>
                )}

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-lg bg-accent-whatsapp text-white text-xs font-bold hover:bg-accent-whatsappHover flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Continue on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-3 rounded-lg border border-surface-border text-xs font-medium text-charcoal-700 hover:bg-surface-soft transition-colors"
                  >
                    Edit Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-charcoal-700">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={contactForm.name}
                      onChange={handleChange}
                      placeholder="e.g. Sanjay Mehta"
                      className={`w-full p-2.5 rounded-lg border ${formErrors.name ? 'border-rose-400 bg-rose-50/30' : 'border-surface-border'} focus:outline-none focus:ring-2 focus:ring-marine-900`}
                    />
                    {formErrors.name && <span className="text-[11px] text-rose-600 font-medium">{formErrors.name}</span>}
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-charcoal-700">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={contactForm.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full p-2.5 rounded-lg border ${formErrors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-surface-border'} focus:outline-none focus:ring-2 focus:ring-marine-900`}
                    />
                    {formErrors.phone && <span className="text-[11px] text-rose-600 font-medium">{formErrors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-charcoal-700">Email Address (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className={`w-full p-2.5 rounded-lg border ${formErrors.email ? 'border-rose-400 bg-rose-50/30' : 'border-surface-border'} focus:outline-none focus:ring-2 focus:ring-marine-900`}
                    />
                    {formErrors.email && <span className="text-[11px] text-rose-600 font-medium">{formErrors.email}</span>}
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-charcoal-700">Inquiry Subject / Category</label>
                    <select
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-lg border border-surface-border focus:outline-none focus:ring-2 focus:ring-marine-900 bg-white text-charcoal-800"
                    >
                      <option value="Electronic Components Inquiry">Electronic Components Inquiry</option>
                      <option value="Workshop Repair & Services">Workshop Repair & Services</option>
                      <option value="Machine Parts & Export RFQ">Machine Parts & Export RFQ</option>
                      <option value="General Business Inquiry">General Business Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-charcoal-700">Message / Requirement Details *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={handleChange}
                    placeholder="Provide details about your required part, equipment symptoms, or general inquiry..."
                    className={`w-full p-2.5 rounded-lg border ${formErrors.message ? 'border-rose-400 bg-rose-50/30' : 'border-surface-border'} focus:outline-none focus:ring-2 focus:ring-marine-900`}
                  />
                  {formErrors.message && <span className="text-[11px] text-rose-600 font-medium">{formErrors.message}</span>}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-4 rounded-lg bg-marine-900 text-white font-bold hover:bg-marine-800 transition-colors shadow-xs flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Preparing...' : 'Submit & Open WhatsApp'}</span>
                  </button>

                  <a
                    href={getGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-lg bg-accent-whatsapp text-white font-bold hover:bg-accent-whatsappHover transition-colors shadow-xs flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Direct WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right: Location & Google Map */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl border border-surface-border p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-surface-border pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent-orange" />
                  <h3 className="font-bold text-charcoal-900 font-heading text-sm">
                    Location & Map
                  </h3>
                </div>
                <span className="text-[11px] text-charcoal-500 font-medium bg-surface-soft px-2 py-0.5 rounded">
                  {businessConfig.city.toUpperCase()}
                </span>
              </div>

              {/* Interactive Google Map Embed Frame */}
              <div className="relative h-64 bg-surface-soft rounded-xl border border-surface-border overflow-hidden">
                {businessConfig.googleMapsEmbedUrl ? (
                  <iframe
                    title="Hindustan Marine Location"
                    src={businessConfig.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center space-y-2">
                    <MapPin className="w-8 h-8 text-accent-orange" />
                    <span className="text-xs font-semibold text-charcoal-800">
                      {businessConfig.businessName}
                    </span>
                    <span className="text-[11px] text-charcoal-500">
                      {businessConfig.city}, {businessConfig.state}
                    </span>
                  </div>
                )}

                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2.5 right-2.5 z-10 px-2.5 py-1.5 rounded-lg bg-white/95 text-marine-900 text-[11px] font-semibold hover:bg-white flex items-center gap-1 shadow-sm border border-surface-border"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="space-y-2 text-xs text-charcoal-600 pt-1">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-charcoal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-charcoal-800 block">Working Hours:</strong>
                    <span>{businessConfig.businessHours}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
