import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  MessageSquare, 
  CheckCircle2, 
  Send, 
  AlertCircle
} from 'lucide-react';
import { repairCapabilities, repairProcessSteps } from '../data/services';
import { SectionHeading } from '../components/common/SectionHeading';
import { getRepairWhatsAppUrl } from '../utils/whatsapp';
import { isValidPhone, submitFormPayload } from '../services/formService';
import { usePageMeta } from '../hooks/usePageMeta';

export const RepairServicesPage: React.FC = () => {
  usePageMeta({
    title: 'Repair & Technical Services',
    description: 'Component diagnostics, circuit board testing, and machine servicing at Hindustan Marine workshop in Bhavnagar, Gujarat.'
  });

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    equipment: '',
    brand: '',
    model: '',
    problem: '',
    preferredContact: 'WhatsApp',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{ success: boolean; isConfigured: boolean; message: string } | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Customer name is required';
    if (!formData.phone.trim()) {
      errors.phone = 'Phone / WhatsApp number is required';
    } else if (!isValidPhone(formData.phone)) {
      errors.phone = 'Please enter a valid contact number (min. 7 digits)';
    }
    if (!formData.equipment.trim()) errors.equipment = 'Equipment name is required';
    if (!formData.problem.trim()) errors.problem = 'Problem description is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const result = await submitFormPayload('repair', formData);
    setIsSubmitting(false);
    setSubmissionResult({
      success: result.success,
      isConfigured: result.isBackendConfigured,
      message: result.message,
    });
    setFormSubmitted(true);
  };

  const directWhatsAppLink = getRepairWhatsAppUrl({
    customerName: formData.name,
    phone: formData.phone,
    equipment: formData.equipment,
    brand: formData.brand,
    model: formData.model,
    problem: formData.problem,
    preferredContact: formData.preferredContact,
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Header Banner */}
      <div className="bg-marine-950 text-white border-b border-marine-800 py-12 sm:py-16 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-accent-orange">Repair & Services</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-marine-900 border border-marine-700 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-accent-orange"></span>
              <span>BHAVNAGAR WORKSHOP SERVICES</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-white">
              Repair & Technical Services
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Component-level diagnostics, circuit board restoration, and machine component servicing at our Bhavnagar facility.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        
        {/* Section 1: Workshop Capabilities */}
        <section className="space-y-8">
          <SectionHeading
            badge="Workshop Scope // Technical Focus"
            title="What We Inspect & Repair"
            subtitle="Our workshop capability covers industrial and marine electronic modules, automation controllers, and specialized hardware."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repairCapabilities.map((cap) => (
              <div
                key={cap.id}
                className="bg-white rounded-xl border border-surface-border p-6 shadow-xs hover:border-surface-borderHover hover:shadow-elevated transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-marine-50 border border-marine-100 flex items-center justify-center text-marine-900">
                      <Wrench className="w-4 h-4 text-marine-700" />
                    </div>
                    <span className="text-xs font-mono font-semibold uppercase text-accent-orange">
                      {cap.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-charcoal-900 font-heading">
                  {cap.title}
                </h3>

                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {cap.description}
                </p>

                {cap.diagnosticChecklist && (
                  <div className="pt-3 border-t border-surface-border/60 space-y-2">
                    <span className="text-[11px] font-mono text-charcoal-400 block uppercase">
                      Diagnostic Procedure:
                    </span>
                    <ul className="space-y-1 text-xs text-charcoal-600">
                      {cap.diagnosticChecklist.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-marine-700 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: 6-Step Visual Process Timeline */}
        <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-8">
          <SectionHeading
            badge="Inspection Workflow // 06 Steps"
            title="The 6-Step Workshop Procedure"
            subtitle="Every component undergoes a systematic journey from intake logging to final bench simulation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairProcessSteps.map((step) => (
              <div
                key={step.step}
                className="bg-surface-warm rounded-xl border border-surface-border p-5 space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-accent-orange">
                    {step.step}
                  </span>
                  <span className="font-mono text-[10px] text-charcoal-500 uppercase bg-white px-2 py-0.5 rounded border border-surface-border">
                    STAGE {step.step}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-charcoal-900 font-heading">
                    {step.title}
                  </h4>
                  <div className="text-xs text-charcoal-500 font-mono">
                    {step.subtitle}
                  </div>
                </div>

                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Service & Repair Inquiry Form */}
        <section id="repair-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left info */}
          <div className="lg:col-span-5 space-y-5">
            <SectionHeading
              badge="Workshop Inquiry // Intake"
              title="Request a Repair Evaluation"
              subtitle="Provide your equipment details and observed fault symptoms for an initial repair feasibility assessment."
            />

            <div className="bg-white p-5 rounded-xl border border-surface-border space-y-3 text-xs text-charcoal-600">
              <div className="font-bold text-charcoal-900 font-heading text-sm">
                What information helps us diagnose faster?
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-mono text-accent-orange font-bold">01</span>
                  <span>Equipment manufacturer nameplate, brand and model</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-accent-orange font-bold">02</span>
                  <span>Photographs of the unit and any visible defect or burn mark</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-accent-orange font-bold">03</span>
                  <span>Exact symptoms (e.g. no power, error code, intermittent shutdown)</span>
                </li>
              </ul>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-accent-whatsapp fill-accent-whatsapp" />
                <span>Prefer Direct WhatsApp Chat?</span>
              </div>
              <p>
                You can send high-resolution photos and videos of your equipment directly to our technicians.
              </p>
              <a
                href={directWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-emerald-800 hover:text-emerald-950 underline pt-1"
              >
                Open WhatsApp with Repair Template &rarr;
              </a>
            </div>
          </div>

          {/* Right form card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-charcoal-900 font-heading mb-4">
                Service & Repair Inquiry Form
              </h3>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-surface-warm border border-surface-border space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-white text-marine-900 flex items-center justify-center mx-auto border border-surface-border shadow-xs">
                    <CheckCircle2 className="w-6 h-6 text-accent-orange" />
                  </div>
                  <h4 className="text-base font-bold text-charcoal-900 font-heading">
                    Inquiry Prepared for WhatsApp
                  </h4>
                  
                  {/* Honest backend status */}
                  {!submissionResult?.isConfigured ? (
                    <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 text-left space-y-2">
                      <div className="font-semibold flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                        <span>Submission Method Notice</span>
                      </div>
                      <p>
                        Direct WhatsApp is our primary submission method. Click below to transfer your details directly to our workshop team.
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-charcoal-600">
                      {submissionResult?.message}
                    </p>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={directWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-lg bg-accent-whatsapp text-white text-xs font-bold hover:bg-accent-whatsappHover flex items-center justify-center gap-2 shadow-xs transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Continue on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-3 rounded-lg border border-surface-border text-xs font-medium text-charcoal-700 hover:bg-surface-soft transition-colors"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-charcoal-700">Customer Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Shah"
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
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full p-2.5 rounded-lg border ${formErrors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-surface-border'} focus:outline-none focus:ring-2 focus:ring-marine-900`}
                      />
                      {formErrors.phone && <span className="text-[11px] text-rose-600 font-medium">{formErrors.phone}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-charcoal-700">Equipment Name *</label>
                      <input
                        type="text"
                        name="equipment"
                        required
                        value={formData.equipment}
                        onChange={handleChange}
                        placeholder="e.g. PCB / VFD / Controller"
                        className={`w-full p-2.5 rounded-lg border ${formErrors.equipment ? 'border-rose-400 bg-rose-50/30' : 'border-surface-border'} focus:outline-none focus:ring-2 focus:ring-marine-900`}
                      />
                      {formErrors.equipment && <span className="text-[11px] text-rose-600 font-medium">{formErrors.equipment}</span>}
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-charcoal-700">Brand (Optional)</label>
                      <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        placeholder="e.g. Siemens / ABB / Omron"
                        className="w-full p-2.5 rounded-lg border border-surface-border focus:outline-none focus:ring-2 focus:ring-marine-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-charcoal-700">Model Number (Optional)</label>
                      <input
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        placeholder="e.g. 6ES7-315 / FR-D700"
                        className="w-full p-2.5 rounded-lg border border-surface-border focus:outline-none focus:ring-2 focus:ring-marine-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-charcoal-700">Preferred Contact Method</label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-lg border border-surface-border focus:outline-none focus:ring-2 focus:ring-marine-900 bg-white text-charcoal-800"
                    >
                      <option value="WhatsApp">WhatsApp (Fastest Response)</option>
                      <option value="Phone Call">Direct Phone Call</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-charcoal-700">Problem Description *</label>
                    <textarea
                      name="problem"
                      required
                      rows={3}
                      value={formData.problem}
                      onChange={handleChange}
                      placeholder="Describe the issue (e.g. no power, error code, burning smell, tripping)..."
                      className={`w-full p-2.5 rounded-lg border ${formErrors.problem ? 'border-rose-400 bg-rose-50/30' : 'border-surface-border'} focus:outline-none focus:ring-2 focus:ring-marine-900`}
                    />
                    {formErrors.problem && <span className="text-[11px] text-rose-600 font-medium">{formErrors.problem}</span>}
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
                      href={directWhatsAppLink}
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
