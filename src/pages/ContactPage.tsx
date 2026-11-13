import React, { useState } from 'react';
import { PageId } from '../components/Navigation';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Check 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Teacher',
    message: '',
    botField: ''
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
      err.phone = 'Phone number is required.';
    } else if (!/^[0-9+ -]{7,16}$/.test(formData.phone)) {
      err.phone = 'Please provide a valid phone format.';
    }
    if (!formData.message.trim()) {
      err.message = 'Please provide your message or inquiry.';
    }
    return err;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.botField) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 400);
  };

  return (
    <div className="w-full bg-[#f7f4ee] min-h-screen pt-24 pb-24">
      
      {/* 1. HEADER */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 py-12">
        <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-8">
          <span className="font-mono text-xs text-[#6f665a]">
            01 · Contact
          </span>
        </div>

        <div className="max-w-2xl space-y-3">
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1f1b16] font-normal leading-[1.1]">
            Contact the organising team
          </h1>
          <p className="text-base text-[#5e554a] leading-relaxed">
            For registration queries, sponsorship, logistics and general enquiries.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS DEFINITION GRID (NO CARDS) */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 py-8">
        <div className="pt-8 border-t border-[rgba(31,27,22,0.08)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Email */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#5e554a]">
              <Mail className="w-4 h-4 text-[#6f665a]" />
              <span className="text-[13px] font-sans text-[#6f665a]">
                Email
              </span>
            </div>
            <div className="font-sans text-base text-[#1f1b16] break-all">
              smrjyouthcouncil@gmail.com
            </div>
            <div>
              <a
                href="mailto:smrjyouthcouncil@gmail.com"
                className="text-xs text-[#1f1b16] underline hover:text-[#5e554a]"
              >
                Send email
              </a>
            </div>
          </div>

          {/* Teacher Coordinator */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#5e554a]">
              <Phone className="w-4 h-4 text-[#6f665a]" />
              <span className="text-[13px] font-sans text-[#6f665a]">
                Teacher Coordinator
              </span>
            </div>
            <div className="font-sans text-base text-[#1f1b16]">
              Mrs. Bhavya Jain
            </div>
            <div className="font-mono text-xs text-[#5e554a] tabular-nums">
              +91 73185 89995
            </div>
          </div>

          {/* Director 1 */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#5e554a]">
              <Phone className="w-4 h-4 text-[#6f665a]" />
              <span className="text-[13px] font-sans text-[#6f665a]">
                Director
              </span>
            </div>
            <div className="font-sans text-base text-[#1f1b16]">
              Tavisha Gattani
            </div>
            <div className="font-mono text-xs text-[#5e554a] tabular-nums">
              +91 78804 30531
            </div>
          </div>

          {/* Director 2 */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#5e554a]">
              <Phone className="w-4 h-4 text-[#6f665a]" />
              <span className="text-[13px] font-sans text-[#6f665a]">
                Director
              </span>
            </div>
            <div className="font-sans text-base text-[#1f1b16]">
              Rudraa Singh
            </div>
            <div className="font-mono text-xs text-[#5e554a] tabular-nums">
              +91 96486 66630
            </div>
          </div>

          {/* Venue */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#5e554a]">
              <MapPin className="w-4 h-4 text-[#6f665a]" />
              <span className="text-[13px] font-sans text-[#6f665a]">
                Venue
              </span>
            </div>
            <div className="font-sans text-base text-[#1f1b16]">
              Seth M.R. Jaipuria School
            </div>
            <div>
              <a
                href="https://maps.google.com/?q=Seth+M.R.+Jaipuria+School+Gomti+Nagar+Lucknow"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#1f1b16] underline hover:text-[#5e554a] inline-flex items-center gap-0.5"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SEND AN ENQUIRY & MAP */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 py-16">
        <div className="pt-8 border-t border-[rgba(31,27,22,0.08)] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading and Google Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl text-[#1f1b16] font-normal">
                Send an enquiry
              </h2>
              <p className="text-sm text-[#5e554a] leading-relaxed">
                Reach out to the organising team regarding school registration, travel logistics, and event schedules.
              </p>
            </div>

            {/* Google Map with card radius, hairline border, and 0.6 saturation */}
            <div className="space-y-2">
              <div
                className="rounded-[12px] overflow-hidden border border-[rgba(31,27,22,0.08)] relative"
                style={{ height: '300px' }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.618835298833!2d81.00888777522229!3d26.852073176683234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2e87a8c13dd%3A0x8c7fded4d6f6b6ed!2sSeth%20M.%20R.%20Jaipuria%20School!5e0!3m2!1sen!2sin!4v1793793237817!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'saturate(0.6)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Seth M.R. Jaipuria School Location"
                />
              </div>
              <div className="text-right">
                <a
                  href="https://maps.google.com/?q=Seth+M.R.+Jaipuria+School+Gomti+Nagar+Lucknow"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#5e554a] hover:text-[#1f1b16] inline-flex items-center gap-0.5"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7 bg-[#fdfbf7] rounded-[16px] p-8 border border-[rgba(31,27,22,0.08)]">
            {submittedSuccess ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#1f1b16] font-normal">
                  Message sent
                </h3>
                <p className="text-sm text-[#5e554a] max-w-sm mx-auto">
                  Your enquiry has been received. The organising team will respond to your email.
                </p>
                <button
                  onClick={() => {
                    setSubmittedSuccess(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      role: 'Teacher',
                      message: '',
                      botField: ''
                    });
                  }}
                  className="h-9 px-4 rounded-[8px] border border-[rgba(31,27,22,0.32)] text-[#1f1b16] text-xs font-medium hover:bg-[#efe9df]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="botField"
                  value={formData.botField}
                  onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                />

                {/* Name */}
                <div>
                  <label className="block text-[13px] font-medium text-[#5e554a] mb-1.5">
                    Full name <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-[8px] border border-[rgba(31,27,22,0.32)] text-sm text-[#1f1b16] bg-[#fdfbf7] placeholder:text-[#6f665a] focus:outline-none focus:border-[#2a1b36]"
                  />
                  {errors.name && <p className="text-xs text-[#dc2626] mt-1">{errors.name}</p>}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-[#5e554a] mb-1.5">
                      Email address <span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="name@school.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-[8px] border border-[rgba(31,27,22,0.32)] text-sm text-[#1f1b16] bg-[#fdfbf7] placeholder:text-[#6f665a] focus:outline-none focus:border-[#2a1b36]"
                    />
                    {errors.email && <p className="text-xs text-[#dc2626] mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-[#5e554a] mb-1.5">
                      Phone number <span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-[8px] border border-[rgba(31,27,22,0.32)] text-sm text-[#1f1b16] bg-[#fdfbf7] placeholder:text-[#6f665a] focus:outline-none focus:border-[#2a1b36]"
                    />
                    {errors.phone && <p className="text-xs text-[#dc2626] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label className="block text-[13px] font-medium text-[#5e554a] mb-1.5">
                    Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-[8px] border border-[rgba(31,27,22,0.32)] bg-[#fdfbf7] text-sm text-[#1f1b16] focus:outline-none focus:border-[#2a1b36]"
                  >
                    <option value="Teacher">Teacher / Faculty advisor</option>
                    <option value="Student">Student delegate</option>
                    <option value="Principal">School administrator</option>
                    <option value="Sponsor">Partner / Sponsor</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[13px] font-medium text-[#5e554a] mb-1.5">
                    Message <span className="text-[#dc2626]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 rounded-[8px] border border-[rgba(31,27,22,0.32)] text-sm text-[#1f1b16] bg-[#fdfbf7] placeholder:text-[#6f665a] focus:outline-none focus:border-[#2a1b36]"
                  />
                  {errors.message && <p className="text-xs text-[#dc2626] mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-10 px-6 rounded-[8px] bg-[#edc868] text-[#1f1b16] font-medium text-sm hover:bg-[#e2bc5c] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2a1b36]"
                  >
                    {isSubmitting ? 'Sending...' : 'Send enquiry'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
