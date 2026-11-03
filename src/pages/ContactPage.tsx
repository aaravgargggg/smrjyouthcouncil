import React, { useState } from 'react';
import { PageId } from '../components/Navigation';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Building 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Teacher In-Charge',
    message: '',
    captchaCode: '',
    botField: '' // Honeypot spam protection
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) err.name = 'Full name is required.';
    if (!formData.email.trim()) {
      err.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      err.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      err.phone = 'Phone contact number is required.';
    } else if (!/^[0-9+ -]{7,16}$/.test(formData.phone)) {
      err.phone = 'Please provide a valid phone format (e.g. +91 98765 43210).';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      err.message = 'Please provide a detailed inquiry (minimum 10 characters).';
    }
    return err;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.botField) {
      // Spam honeypot triggered silently
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 800);
  };

  return (
    <div className="w-full bg-cream min-h-screen pt-24">
      
      {/* SECTION 1: EDITORIAL HEADER */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-purple">
              01 — Secretariat Liaison
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-tight">
              We'd Love to <br />
              <span className="italic font-garamond text-purple">Hear From You.</span>
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl">
              For all registration queries, delegation accommodations, committee logistics, or institutional partnerships, get in touch with the SMRJ Youth Council team.
            </p>
          </div>
        </div>
      </section>


      {/* SECTION 2: 5 OFFICIAL CONTACT DETAILS */}
      <section className="py-12 bg-cream-dark/60 border-y border-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* 1. Email */}
            <a
              href="mailto:smrjyouthcouncil@gmail.com"
              className="p-6 bg-white rounded-2xl border border-purple/10 hover:border-gold transition-all shadow-sm flex flex-col justify-between group"
            >
              <div>
                <Mail className="w-6 h-6 text-purple mb-3 group-hover:text-gold-dark transition-colors" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-dark block">
                  Official Inquiries
                </span>
                <h4 className="font-display text-lg font-bold text-ink mt-1">
                  General Email
                </h4>
              </div>
              <div className="text-xs text-purple font-medium mt-3 break-all group-hover:underline">
                smrjyouthcouncil@gmail.com
              </div>
            </a>

            {/* 2. Faculty Advisor */}
            <a
              href="tel:+917318589995"
              className="p-6 bg-white rounded-2xl border border-purple/10 hover:border-gold transition-all shadow-sm flex flex-col justify-between group"
            >
              <div>
                <Phone className="w-6 h-6 text-purple mb-3 group-hover:text-gold-dark transition-colors" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-dark block">
                  Faculty Advisor
                </span>
                <h4 className="font-display text-lg font-bold text-ink mt-1">
                  Mrs. Bhavya Jain
                </h4>
              </div>
              <div className="text-xs text-purple font-medium mt-3 group-hover:underline">
                +91 73185 89995
              </div>
            </a>

            {/* 3. Director Tavisha */}
            <a
              href="tel:+917880430531"
              className="p-6 bg-white rounded-2xl border border-purple/10 hover:border-gold transition-all shadow-sm flex flex-col justify-between group"
            >
              <div>
                <Phone className="w-6 h-6 text-purple mb-3 group-hover:text-gold-dark transition-colors" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-dark block">
                  Director
                </span>
                <h4 className="font-display text-lg font-bold text-ink mt-1">
                  Tavisha Gattani
                </h4>
              </div>
              <div className="text-xs text-purple font-medium mt-3 group-hover:underline">
                +91 78804 30531
              </div>
            </a>

            {/* 4. Director Rudraa */}
            <a
              href="tel:+919648666630"
              className="p-6 bg-white rounded-2xl border border-purple/10 hover:border-gold transition-all shadow-sm flex flex-col justify-between group"
            >
              <div>
                <Phone className="w-6 h-6 text-purple mb-3 group-hover:text-gold-dark transition-colors" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-dark block">
                  Director
                </span>
                <h4 className="font-display text-lg font-bold text-ink mt-1">
                  Rudraa Singh
                </h4>
              </div>
              <div className="text-xs text-purple font-medium mt-3 group-hover:underline">
                +91 96486 66630
              </div>
            </a>

            {/* 5. Venue */}
            <a
              href="https://maps.google.com/?q=Seth+M.R.+Jaipuria+School+Gomti+Nagar+Lucknow"
              target="_blank"
              rel="noreferrer"
              className="p-6 bg-white rounded-2xl border border-purple/10 hover:border-gold transition-all shadow-sm flex flex-col justify-between group"
            >
              <div>
                <MapPin className="w-6 h-6 text-purple mb-3 group-hover:text-gold-dark transition-colors" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-dark block">
                  Summit Venue
                </span>
                <h4 className="font-display text-lg font-bold text-ink mt-1">
                  Jaipuria Campus
                </h4>
              </div>
              <div className="text-xs text-purple font-medium mt-3 flex items-center gap-1 group-hover:underline">
                <span>Gomti Nagar, LKO</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>

          </div>

        </div>
      </section>


      {/* SECTION 3: TWO-COLUMN CONTACT FORM */}
      <section className="py-24 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 5 Columns: Branding, Architecture & Copy */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-purple">
                03 — Send a Direct Transmission
              </span>

              <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight">
                Direct Dialogue with the Secretariat.
              </h2>

              <p className="text-base text-ink-muted leading-relaxed">
                Whether you need special committee accommodations, travel escorts from Lucknow Airport or Railway station, or want to invite our delegation directors for a preparatory briefing — we respond within 24 hours.
              </p>

              {/* Small Architectural Photograph */}
              <div className="rounded-2xl overflow-hidden border border-gold/40 shadow-md aspect-[16/10] relative">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
                  alt="Jaipuria School Administrative Quadrangle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent flex items-end p-4 text-cream">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gold">
                    Jaipuria Administration Block · Vineet Khand
                  </span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-purple/10 text-xs text-ink/80 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold shrink-0" />
                <span>Response turnaround: Guaranteed under 24 business hours.</span>
              </div>
            </div>

            {/* Right 7 Columns: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-gold/40 shadow-xl">
              
              {submittedSuccess ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-3xl text-ink font-bold">
                    Transmission Received
                  </h3>
                  <p className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your inquiry has been routed directly to the SMRJ Secretariat and Mrs. Bhavya Jain. A formal response will be dispatched to <strong>{formData.email}</strong> promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmittedSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        role: 'Teacher In-Charge',
                        message: '',
                        captchaCode: '',
                        botField: ''
                      });
                    }}
                    className="px-6 py-2.5 bg-purple text-cream text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot hidden input */}
                  <input
                    type="text"
                    name="botField"
                    value={formData.botField}
                    onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dr. Rajesh Sharma / Ananya Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-ink bg-cream-light focus:outline-none focus:ring-1 ${
                        errors.name ? 'border-red-500 focus:ring-red-500' : 'border-purple/20 focus:border-gold focus:ring-gold'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@school.edu.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-ink bg-cream-light focus:outline-none focus:ring-1 ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-purple/20 focus:border-gold focus:ring-gold'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-ink bg-cream-light focus:outline-none focus:ring-1 ${
                          errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-purple/20 focus:border-gold focus:ring-gold'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Role Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                      Your Affiliation / Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-purple/20 bg-cream-light text-sm text-ink focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    >
                      <option value="Teacher In-Charge">Teacher In-Charge / Faculty Escort</option>
                      <option value="School Principal / Administrator">School Principal / Administrator</option>
                      <option value="Student Delegate">Prospective Student Delegate</option>
                      <option value="Corporate Sponsor / Partner">Corporate Sponsor / Partner</option>
                      <option value="Press / Media Representative">Press / Media Representative</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                      Message / Inquiry Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please articulate your query regarding delegation allocations, itinerary, or accommodations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-ink bg-cream-light focus:outline-none focus:ring-1 ${
                        errors.message ? 'border-red-500 focus:ring-red-500' : 'border-purple/20 focus:border-gold focus:ring-gold'
                      }`}
                    ></textarea>
                    {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-purple text-gold font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-purple-700 shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Transmitting to Secretariat...</span>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
