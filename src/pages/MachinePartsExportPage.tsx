import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  CheckCircle2, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { machinePartCategories } from '../data/machineParts';
import { SectionHeading } from '../components/common/SectionHeading';
import { getMachinePartsWhatsAppUrl } from '../utils/whatsapp';
import { isValidPhone, isValidEmail, submitFormPayload } from '../services/formService';
import { usePageMeta } from '../hooks/usePageMeta';

export const MachinePartsExportPage: React.FC = () => {
  usePageMeta({
    title: 'Machine Parts Supply & Export Inquiries',
    description: 'Sourcing and supply of industrial machine parts, hydraulic valves, cylinders, and spares from Bhavnagar, Gujarat, India.'
  });

  const [rfqData, setRfqData] = useState({
    name: '',
    company: '',
    country: 'India',
    phone: '',
    email: '',
    partRequired: '',
    partNumber: '',
    quantity: '1 Unit',
    requirements: '',
    additionalNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{ success: boolean; isConfigured: boolean; message: string } | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setRfqData({ ...rfqData, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!rfqData.name.trim()) errors.name = 'Contact name is required';
    if (!rfqData.phone.trim()) {
      errors.phone = 'Phone / WhatsApp number is required';
    } else if (!isValidPhone(rfqData.phone)) {
      errors.phone = 'Please enter a valid phone number (minimum 7 digits)';
    }

    if (rfqData.email.trim() && !isValidEmail(rfqData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!rfqData.partRequired.trim()) errors.partRequired = 'Part name is required';
    if (!rfqData.quantity.trim()) errors.quantity = 'Quantity is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const result = await submitFormPayload('rfq', rfqData);
    setIsSubmitting(false);
    setSubmissionResult({
      success: result.success,
      isConfigured: result.isBackendConfigured,
      message: result.message,
    });
    setRfqSubmitted(true);
  };

  const directWhatsAppRfq = getMachinePartsWhatsAppUrl({
    customerName: rfqData.name,
    company: rfqData.company,
    country: rfqData.country,
    phone: rfqData.phone,
    email: rfqData.email,
    partRequired: rfqData.partRequired,
    partNumber: rfqData.partNumber,
    quantity: rfqData.quantity,
    application: rfqData.requirements,
    additionalNotes: rfqData.additionalNotes,
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Header Banner */}
      <div className="bg-marine-950 text-white border-b border-marine-800 py-12 sm:py-16 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-emerald-400">Machine Parts & Export</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-marine-900 border border-marine-700 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>DOMESTIC & EXPORT SUPPLY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-white">
              Machine Parts Supply & Export Inquiries
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Supplying industrial machinery components, hydraulic assemblies, and mechanical spares. Contact us with your requirement for availability and quotation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        
        {/* Section 1: Machinery Part Categories */}
        <section className="space-y-8">
          <SectionHeading
            badge="Machine Parts Scope // Categories"
            title="Machinery & Operational Spares"
            subtitle="Explore component groups handled for industrial installations, workshops, and maritime equipment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {machinePartCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-xl border border-surface-border p-6 shadow-xs hover:border-surface-borderHover hover:shadow-elevated transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {cat.inquiryTag}
                  </span>
                  <span className="font-mono text-xs text-charcoal-400">
                    B2B RFQ
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-charcoal-900 font-heading">
                    {cat.title}
                  </h3>
                  <div className="text-xs text-charcoal-500 font-mono">
                    {cat.subtitle}
                  </div>
                </div>

                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {cat.description}
                </p>

                <div className="pt-3 border-t border-surface-border/60 space-y-2">
                  <span className="text-[11px] font-mono text-charcoal-400 block uppercase">
                    Representative Items:
                  </span>
                  <ul className="space-y-1 text-xs text-charcoal-600">
                    {cat.representativeItems.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Quality Inspection & Export Packaging */}
        <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-8">
          <SectionHeading
            badge="Inspection & Packaging // Standards"
            title="Inspection & Transit Protection"
            subtitle="Protocols followed to ensure components arrive safely without damage or corrosion."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-surface-warm border border-surface-border space-y-2">
              <div className="font-mono text-xs text-accent-orange font-bold">01 PHYSICAL CHECK</div>
              <h4 className="text-sm font-bold text-charcoal-900 font-heading">Dimension & Thread Check</h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Verification against part drawings, thread pitch standards, and photographic confirmation before packing.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-warm border border-surface-border space-y-2">
              <div className="font-mono text-xs text-marine-700 font-bold">02 ANTI-CORROSION</div>
              <h4 className="text-sm font-bold text-charcoal-900 font-heading">VCI & Moisture Barrier</h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Application of protective oil films and VCI (Volatile Corrosion Inhibitor) wrapping for sea and air freight.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-warm border border-surface-border space-y-2">
              <div className="font-mono text-xs text-emerald-600 font-bold">03 CRATING</div>
              <h4 className="text-sm font-bold text-charcoal-900 font-heading">Heavy-Duty Crating</h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Shock-absorbent internal packaging with sturdy crating for heavy machine assemblies.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-warm border border-surface-border space-y-2">
              <div className="font-mono text-xs text-purple-600 font-bold">04 DOCUMENTATION</div>
              <h4 className="text-sm font-bold text-charcoal-900 font-heading">Export Commercial Invoice</h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Complete packing list, HS Code classification, and commercial invoices prepared per international transit requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: RFQ / Request a Quote Form */}
        <section id="rfq" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left info */}
          <div className="lg:col-span-5 space-y-5">
            <SectionHeading
              badge="Request a Quote // RFQ"
              title="Submit a Part Sourcing RFQ"
              subtitle="Send your required machinery parts, part numbers, or drawing specs for quotation and lead time calculation."
            />

            <div className="bg-white p-5 rounded-xl border border-surface-border space-y-3 text-xs text-charcoal-600">
              <div className="font-bold text-charcoal-900 font-heading text-sm">
                Buyer Guidelines:
              </div>
              <p>
                We accept inquiries from domestic industrial companies as well as international maritime & machinery buyers.
              </p>
              <ul className="space-y-1.5 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Provide exact part numbers or sample photos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Specify required quantity and delivery location</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Direct technical discussion over WhatsApp available</span>
                </li>
              </ul>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-4 rounded-xl bg-marine-950 text-white border border-marine-800 text-xs space-y-2">
              <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp RFQ</span>
              </div>
              <p className="text-slate-300">
                Need an immediate quotation for a machine part? Open WhatsApp to chat directly with our commercial team.
              </p>
              <a
                href={directWhatsAppRfq}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-accent-orange hover:text-white underline pt-1"
              >
                Launch Pre-filled WhatsApp RFQ &rarr;
              </a>
            </div>
          </div>

          {/* Right form card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-charcoal-900 font-heading mb-4">
                Industrial RFQ Form
              </h3>

              {rfqSubmitted ? (
                <div className="p-6 rounded-xl bg-surface-warm border border-surface-border space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-white text-marine-900 flex items-center justify-center mx-auto border border-surface-border shadow-xs">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="text-base font-bold text-charcoal-900 font-heading">
                    RFQ Prepared for WhatsApp
                  </h4>
                  
                  {/* Honest backend status */}
                  {!submissionResult?.isConfigured ? (
                    <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 text-left space-y-2">
                      <div className="font-semibold flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                        <span>Submission Method Notice</span>
                      </div>
                      <p>
                        Direct WhatsApp is our primary submission method. Click below to transfer your RFQ directly to our team.
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-charcoal-600">
                      {submissionResult?.message}
                    </p>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={directWhatsAppRfq}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-lg bg-accent-whatsapp text-white text-xs font-bold hover:bg-accent-whatsappHover flex items-center justify-center gap-2 shadow-xs transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Continue on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setRfqSubmitted(false)}
                      className="px-4 py-3 rounded-lg border border-surface-border text-xs font-medium text-charcoal-700 hover:bg-surface-soft transition-colors"
                    >
                      Edit RFQ
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-charcoal-700">Contact Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={rfqData.name}
                        onChange={handleChange}
                        placeholder="e.g. Amit Patel"
                        className={`w-full p-2.5 rounded-lg border ${formErrors.name ? 'border-rose-400 bg-rose-50/30' : 'border-surface-border'} focus:outline-none focus:ring-2 focus:ring-marine-900`}
                      />
                      {formErrors.name && <span className="text-[11px] text-rose-600 font-medium">{formErrors.name}</span>}
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-charcoal-700">Company Name (Optional)</label>
                      <input
                        type="text"
                        name="company"
                        value={rfqData.company}
                        onChange={handleChange}
                        placeholder="e.g. Maritime Tech Ltd"
                        className="w-full p-2.5 rounded-lg border border-surface-border focus:outline-none focus:ring-2 focus:ring-marine-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-charcoal-700">Country / Location</label>
                      <input
                        type="text"
                        name="country"
                        value={rfqData.country}
                        onChange={handleChange}
                        placeholder="e.g. India / UAE / Singapore"
                        className="w-full p-2.5 rounded-lg border border-surface-border focus:outline-none focus:ring-2 focus:ring-marine-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-charcoal-700">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={rfqData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full p-2.5 rounded-lg border ${formErrors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-surface-border'} focus:outline-none focus:ring-2 focus:ring-marine-900`}
                      />
                      {formErrors.phone && <span className="text-[11px] text-rose-600 font-medium">{formErrors.phone}</span>}
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-charcoal-700">Email Address (Optional)</label>
                      <input
                        type="email"
                        name="email"
                        value={rfqData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={`w-full p-2.5 rounded-lg border ${formErrors.email ? 'border-rose-400 bg-rose-50/30' : 'border-surface-border'} focus:outline-none focus:ring-2 focus:ring-marine-900`}
                      />
                      {formErrors.email && <span className="text-[11px] text-rose-600 font-medium">{formErrors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2 space-y-1">
                      <label className="font-semibold text-charcoal-700">Part Name *</label>
                      <input
                        type="text"
                        name="partRequired"
                        required
                        value={rfqData.partRequired}
                        onChange={handleChange}
                        placeholder="e.g. Hydraulic Control Valve / Cylinder"
                        className={`w-full p-2.5 rounded-lg border ${formErrors.partRequired ? 'border-rose-400 bg-rose-50/30' : 'border-surface-border'} focus:outline-none focus:ring-2 focus:ring-marine-900`}
                      />
                      {formErrors.partRequired && <span className="text-[11px] text-rose-600 font-medium">{formErrors.partRequired}</span>}
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-charcoal-700">Quantity *</label>
                      <input
                        type="text"
                        name="quantity"
                        required
                        value={rfqData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 2 Units"
                        className={`w-full p-2.5 rounded-lg border ${formErrors.quantity ? 'border-rose-400 bg-rose-50/30' : 'border-surface-border'} focus:outline-none focus:ring-2 focus:ring-marine-900`}
                      />
                      {formErrors.quantity && <span className="text-[11px] text-rose-600 font-medium">{formErrors.quantity}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-charcoal-700">Part / Model Number (Optional)</label>
                      <input
                        type="text"
                        name="partNumber"
                        value={rfqData.partNumber}
                        onChange={handleChange}
                        placeholder="e.g. OEM Part # / Reference"
                        className="w-full p-2.5 rounded-lg border border-surface-border focus:outline-none focus:ring-2 focus:ring-marine-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-charcoal-700">Application / Equipment</label>
                      <input
                        type="text"
                        name="requirements"
                        value={rfqData.requirements}
                        onChange={handleChange}
                        placeholder="e.g. Marine winch / Plant hydraulics"
                        className="w-full p-2.5 rounded-lg border border-surface-border focus:outline-none focus:ring-2 focus:ring-marine-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-charcoal-700">Additional Notes / Delivery Destination</label>
                    <textarea
                      name="additionalNotes"
                      rows={2}
                      value={rfqData.additionalNotes}
                      onChange={handleChange}
                      placeholder="Specify material grades, port of delivery, or urgency requirements..."
                      className="w-full p-2.5 rounded-lg border border-surface-border focus:outline-none focus:ring-2 focus:ring-marine-900"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 px-4 rounded-lg bg-marine-900 text-white font-bold hover:bg-marine-800 transition-colors shadow-xs flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Preparing...' : 'Submit & Open WhatsApp RFQ'}</span>
                    </button>

                    <a
                      href={directWhatsAppRfq}
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
          </div>

        </section>

      </div>

    </div>
  );
};
