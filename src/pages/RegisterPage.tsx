import React, { useState } from 'react';
import { PageId } from '../components/Navigation';
import { Check, Printer } from 'lucide-react';

interface RegisterPageProps {
  onNavigate: (page: PageId) => void;
}

interface Participant {
  name: string;
  grade: '' | 'IX' | 'X' | 'XI' | 'XII';
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Step 1: School Information
  const [schoolData, setSchoolData] = useState({
    schoolName: '',
    city: '',
    teacherName: '',
    teacherPhone: '',
    teacherEmail: ''
  });

  // Step 2: 3 Participants
  const [participants, setParticipants] = useState<Participant[]>([
    { name: '', grade: '' },
    { name: '', grade: '' },
    { name: '', grade: '' }
  ]);

  const [eligibilityConfirmed, setEligibilityConfirmed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [registrationId, setRegistrationId] = useState<string>('');

  const validateStep1 = () => {
    const err: Record<string, string> = {};
    if (!schoolData.schoolName.trim()) err.schoolName = 'School name is required.';
    if (!schoolData.city.trim()) err.city = 'City is required.';
    if (!schoolData.teacherName.trim()) err.teacherName = 'Teacher in-charge name is required.';
    if (!schoolData.teacherPhone.trim()) err.teacherPhone = 'Teacher phone number is required.';
    if (!schoolData.teacherEmail.trim() || !/\S+@\S+\.\S+/.test(schoolData.teacherEmail)) {
      err.teacherEmail = 'Valid teacher email address is required.';
    }
    return err;
  };

  const validateStep2 = () => {
    const err: Record<string, string> = {};
    participants.forEach((p, idx) => {
      if (!p.name.trim()) err[`p_${idx}_name`] = `Participant ${idx + 1} name is required.`;
      if (!p.grade) err[`p_${idx}_grade`] = `Participant ${idx + 1} class is required.`;
    });
    return err;
  };

  const handleNextToStep2 = () => {
    const err = validateStep1();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    setErrors({});
    setCurrentStep(2);
    window.scrollTo({ top: 120, behavior: 'instant' });
  };

  const handleNextToStep3 = () => {
    const err = validateStep2();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    setErrors({});
    setCurrentStep(3);
    window.scrollTo({ top: 120, behavior: 'instant' });
  };

  const handleFinalSubmit = () => {
    if (!eligibilityConfirmed) {
      setErrors({ eligibility: 'Please confirm that all three participants belong to grades IX–XII.' });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const regId = `SMRJ-YC27-${randomNum}`;
      setRegistrationId(regId);
      setIsSubmitting(false);
      setSubmissionComplete(true);
      window.scrollTo({ top: 100, behavior: 'instant' });
    }, 600);
  };

  const stepLabels = [
    'School details',
    'Participant details',
    'Review and submit'
  ];

  return (
    <div className="w-full bg-[#f7f4ee] min-h-screen pt-24 pb-24">
      
      {/* 1. HEADER */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 py-12">
        <div className="border-t border-[rgba(31,27,22,0.08)] pt-6 mb-8">
          <span className="font-mono text-xs text-[#6f665a]">
            01 · Registration
          </span>
        </div>

        <div className="max-w-2xl space-y-3">
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1f1b16] font-normal leading-[1.1]">
            Register your school
          </h1>
          <p className="text-base text-[#5e554a] leading-relaxed">
            Each school must register with a team of three participants from Grades IX–XII.
          </p>
        </div>
      </section>

      {/* 2. FORM CARD */}
      <section className="max-w-[760px] mx-auto px-6 sm:px-8">
        {submissionComplete ? (
          /* Confirmation Screen */
          <div className="bg-[#fdfbf7] rounded-[16px] p-8 sm:p-10 border border-[rgba(31,27,22,0.08)] shadow-float space-y-6 text-center animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h2 className="font-serif text-3xl text-[#1f1b16] font-normal">
                Registration submitted
              </h2>
              <p className="text-sm text-[#5e554a]">
                Your school registration for SMRJ Youth Council 2027 has been recorded.
              </p>
            </div>

            <div className="p-6 bg-[#f7f4ee] rounded-[12px] border border-[rgba(31,27,22,0.08)] text-left space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(31,27,22,0.08)]">
                <span className="text-xs font-mono text-[#6f665a] uppercase">Registration ID</span>
                <span className="font-mono text-sm font-semibold text-[#1f1b16]">
                  {registrationId}
                </span>
              </div>

              <div className="text-xs space-y-1.5 text-[#5e554a]">
                <div><span className="font-medium text-[#1f1b16]">School:</span> {schoolData.schoolName}</div>
                <div><span className="font-medium text-[#1f1b16]">City:</span> {schoolData.city}</div>
                <div><span className="font-medium text-[#1f1b16]">Teacher in-charge:</span> {schoolData.teacherName} ({schoolData.teacherPhone})</div>
                <div><span className="font-medium text-[#1f1b16]">Teacher email:</span> {schoolData.teacherEmail}</div>
              </div>

              <div className="pt-3 border-t border-[rgba(31,27,22,0.08)] text-xs text-[#5e554a] space-y-1">
                <div className="font-medium text-[#1f1b16]">Participants:</div>
                {participants.map((p, i) => (
                  <div key={i}>
                    {i + 1}. {p.name} — Grade {p.grade}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => window.print()}
                className="h-10 px-4 rounded-[8px] border border-[rgba(31,27,22,0.32)] text-[#1f1b16] text-xs font-medium hover:bg-[#efe9df] flex items-center gap-2"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print summary</span>
              </button>

              <button
                onClick={() => onNavigate('home')}
                className="h-10 px-5 rounded-[8px] bg-[#edc868] text-[#1f1b16] text-xs font-medium hover:bg-[#e2bc5c]"
              >
                Return to home
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Form */
          <div className="bg-[#fdfbf7] rounded-[16px] p-6 sm:p-10 border border-[rgba(31,27,22,0.08)] shadow-float space-y-8">
            
            {/* Stepper: Single Line + 3-Segment Progress Bar */}
            <div className="space-y-3 pb-6 border-b border-[rgba(31,27,22,0.08)]">
              <div className="flex items-center justify-between text-sm text-[#6f665a]">
                <span>Step {currentStep} of 3: {stepLabels[currentStep - 1]}</span>
                <span className="font-mono text-xs">{currentStep}/3</span>
              </div>
              <div className="grid grid-cols-3 gap-2 h-1">
                <div className={`h-full rounded-full ${currentStep >= 1 ? 'bg-[#edc868]' : 'bg-[#efe9df]'}`} />
                <div className={`h-full rounded-full ${currentStep >= 2 ? 'bg-[#edc868]' : 'bg-[#efe9df]'}`} />
                <div className={`h-full rounded-full ${currentStep >= 3 ? 'bg-[#edc868]' : 'bg-[#efe9df]'}`} />
              </div>
            </div>

            {/* STEP 1: SCHOOL DETAILS */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-normal">
                    School details
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* School Name */}
                  <div>
                    <label className="block text-[13px] font-medium text-[#5e554a] mb-1.5">
                      School name <span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Seth M.R. Jaipuria School"
                      value={schoolData.schoolName}
                      onChange={(e) => setSchoolData({ ...schoolData, schoolName: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-[8px] border border-[rgba(31,27,22,0.32)] text-sm text-[#1f1b16] bg-[#fdfbf7] placeholder:text-[#6f665a] focus:outline-none focus:border-[#2a1b36]"
                    />
                    {errors.schoolName && <p className="text-xs text-[#dc2626] mt-1">{errors.schoolName}</p>}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-[13px] font-medium text-[#5e554a] mb-1.5">
                      City <span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lucknow"
                      value={schoolData.city}
                      onChange={(e) => setSchoolData({ ...schoolData, city: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-[8px] border border-[rgba(31,27,22,0.32)] text-sm text-[#1f1b16] bg-[#fdfbf7] placeholder:text-[#6f665a] focus:outline-none focus:border-[#2a1b36]"
                    />
                    {errors.city && <p className="text-xs text-[#dc2626] mt-1">{errors.city}</p>}
                  </div>

                  {/* Teacher In-Charge */}
                  <div>
                    <label className="block text-[13px] font-medium text-[#5e554a] mb-1.5">
                      Teacher in-charge name <span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Full name of faculty coordinator"
                      value={schoolData.teacherName}
                      onChange={(e) => setSchoolData({ ...schoolData, teacherName: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-[8px] border border-[rgba(31,27,22,0.32)] text-sm text-[#1f1b16] bg-[#fdfbf7] placeholder:text-[#6f665a] focus:outline-none focus:border-[#2a1b36]"
                    />
                    {errors.teacherName && <p className="text-xs text-[#dc2626] mt-1">{errors.teacherName}</p>}
                  </div>

                  {/* Teacher Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-[#5e554a] mb-1.5">
                        Teacher phone <span className="text-[#dc2626]">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={schoolData.teacherPhone}
                        onChange={(e) => setSchoolData({ ...schoolData, teacherPhone: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-[8px] border border-[rgba(31,27,22,0.32)] text-sm text-[#1f1b16] bg-[#fdfbf7] placeholder:text-[#6f665a] focus:outline-none focus:border-[#2a1b36]"
                      />
                      {errors.teacherPhone && <p className="text-xs text-[#dc2626] mt-1">{errors.teacherPhone}</p>}
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-[#5e554a] mb-1.5">
                        Teacher email <span className="text-[#dc2626]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="teacher@school.edu"
                        value={schoolData.teacherEmail}
                        onChange={(e) => setSchoolData({ ...schoolData, teacherEmail: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-[8px] border border-[rgba(31,27,22,0.32)] text-sm text-[#1f1b16] bg-[#fdfbf7] placeholder:text-[#6f665a] focus:outline-none focus:border-[#2a1b36]"
                      />
                      {errors.teacherEmail && <p className="text-xs text-[#dc2626] mt-1">{errors.teacherEmail}</p>}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[rgba(31,27,22,0.08)] flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextToStep2}
                    className="h-10 px-6 rounded-[8px] bg-[#edc868] text-[#1f1b16] font-medium text-sm hover:bg-[#e2bc5c] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2a1b36]"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: PARTICIPANT DETAILS */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-normal">
                    Participant details
                  </h2>
                </div>

                <div className="space-y-6 divide-y divide-[rgba(31,27,22,0.08)]">
                  {participants.map((p, idx) => (
                    <div key={idx} className={idx > 0 ? 'pt-6' : ''}>
                      <span className="block text-[13px] font-medium text-[#5e554a] mb-3">
                        Participant {idx + 1}
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                        <div className="sm:col-span-8">
                          <label className="block text-xs text-[#6f665a] mb-1">
                            Full name <span className="text-[#dc2626]">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Student full name"
                            value={p.name}
                            onChange={(e) => {
                              const updated = [...participants];
                              updated[idx].name = e.target.value;
                              setParticipants(updated);
                            }}
                            className="w-full h-11 px-3.5 rounded-[8px] border border-[rgba(31,27,22,0.32)] text-sm text-[#1f1b16] bg-[#fdfbf7] placeholder:text-[#6f665a] focus:outline-none focus:border-[#2a1b36]"
                          />
                          {errors[`p_${idx}_name`] && (
                            <p className="text-xs text-[#dc2626] mt-1">{errors[`p_${idx}_name`]}</p>
                          )}
                        </div>

                        <div className="sm:col-span-4">
                          <label className="block text-xs text-[#6f665a] mb-1">
                            Class <span className="text-[#dc2626]">*</span>
                          </label>
                          <select
                            value={p.grade}
                            onChange={(e) => {
                              const updated = [...participants];
                              updated[idx].grade = e.target.value as any;
                              setParticipants(updated);
                            }}
                            className="w-full h-11 px-3.5 rounded-[8px] border border-[rgba(31,27,22,0.32)] text-sm text-[#1f1b16] bg-[#fdfbf7] focus:outline-none focus:border-[#2a1b36]"
                          >
                            <option value="">Select class</option>
                            <option value="IX">Class IX</option>
                            <option value="X">Class X</option>
                            <option value="XI">Class XI</option>
                            <option value="XII">Class XII</option>
                          </select>
                          {errors[`p_${idx}_grade`] && (
                            <p className="text-xs text-[#dc2626] mt-1">{errors[`p_${idx}_grade`]}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-[rgba(31,27,22,0.08)] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="h-10 px-5 rounded-[8px] border border-[rgba(31,27,22,0.32)] text-[#1f1b16] text-xs font-medium hover:bg-[#efe9df]"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNextToStep3}
                    className="h-10 px-6 rounded-[8px] bg-[#edc868] text-[#1f1b16] font-medium text-sm hover:bg-[#e2bc5c]"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: REVIEW & SUBMIT */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-normal">
                    Review and submit
                  </h2>
                </div>

                {/* School Summary */}
                <div className="p-6 bg-[#f7f4ee] rounded-[12px] border border-[rgba(31,27,22,0.08)] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#6f665a] uppercase">School details</span>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-xs text-[#1f1b16] underline hover:text-[#5e554a] focus-visible:outline focus-visible:outline-1"
                    >
                      Edit
                    </button>
                  </div>
                  <dl className="text-sm space-y-1 text-[#5e554a]">
                    <div><span className="font-medium text-[#1f1b16]">School:</span> {schoolData.schoolName}</div>
                    <div><span className="font-medium text-[#1f1b16]">City:</span> {schoolData.city}</div>
                    <div><span className="font-medium text-[#1f1b16]">Teacher in-charge:</span> {schoolData.teacherName} ({schoolData.teacherPhone}, {schoolData.teacherEmail})</div>
                  </dl>
                </div>

                {/* Participants Summary */}
                <div className="p-6 bg-[#f7f4ee] rounded-[12px] border border-[rgba(31,27,22,0.08)] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#6f665a] uppercase">Participant details</span>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="text-xs text-[#1f1b16] underline hover:text-[#5e554a] focus-visible:outline focus-visible:outline-1"
                    >
                      Edit
                    </button>
                  </div>
                  <ul className="text-sm space-y-1 text-[#5e554a]">
                    {participants.map((p, idx) => (
                      <li key={idx}>
                        {idx + 1}. <span className="font-medium text-[#1f1b16]">{p.name}</span> — Class {p.grade}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Eligibility Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={eligibilityConfirmed}
                      onChange={(e) => setEligibilityConfirmed(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-[rgba(31,27,22,0.32)]"
                      style={{ accentColor: '#2a1b36' }}
                    />
                    <span className="text-sm text-[#5e554a] leading-relaxed">
                      I confirm that all three participants are in Grades IX–XII and from the same school.
                    </span>
                  </label>
                  {errors.eligibility && (
                    <p className="text-xs text-[#dc2626] mt-1.5">{errors.eligibility}</p>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-[rgba(31,27,22,0.08)] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="h-10 px-5 rounded-[8px] border border-[rgba(31,27,22,0.32)] text-[#1f1b16] text-xs font-medium hover:bg-[#efe9df]"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleFinalSubmit}
                    className="h-10 px-6 rounded-[8px] bg-[#edc868] text-[#1f1b16] font-medium text-sm hover:bg-[#e2bc5c] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2a1b36]"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit registration'}
                  </button>
                </div>
              </div>
            )}

          </div>
        )}
      </section>

    </div>
  );
};
