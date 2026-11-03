import React, { useState, useEffect } from 'react';
import { PageId } from '../components/Navigation';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Download, 
  Printer, 
  School, 
  Users, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';

interface RegisterPageProps {
  onNavigate: (page: PageId) => void;
}

interface Participant {
  name: string;
  grade: 'IX' | 'X' | 'XI' | 'XII';
  email: string;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // School Information Form State
  const [schoolData, setSchoolData] = useState({
    schoolName: '',
    city: '',
    state: '',
    teacherName: '',
    teacherPhone: '',
    teacherEmail: ''
  });

  // 3 Participants
  const [participants, setParticipants] = useState<Participant[]>([
    { name: '', grade: 'XI', email: '' },
    { name: '', grade: 'XI', email: '' },
    { name: '', grade: 'X', email: '' }
  ]);

  const [eligibilityConfirmed, setEligibilityConfirmed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [registrationId, setRegistrationId] = useState<string>('');

  // Restore draft from localStorage if available
  useEffect(() => {
    try {
      const savedSchool = localStorage.getItem('smrj_draft_school');
      const savedParticipants = localStorage.getItem('smrj_draft_participants');
      if (savedSchool) setSchoolData(JSON.parse(savedSchool));
      if (savedParticipants) setParticipants(JSON.parse(savedParticipants));
    } catch {
      // ignore
    }
  }, []);

  const saveDraft = () => {
    localStorage.setItem('smrj_draft_school', JSON.stringify(schoolData));
    localStorage.setItem('smrj_draft_participants', JSON.stringify(participants));
  };

  // Step 1 Validation
  const validateStep1 = () => {
    const err: Record<string, string> = {};
    if (!schoolData.schoolName.trim()) err.schoolName = 'Official school name is required.';
    if (!schoolData.city.trim()) err.city = 'City is required.';
    if (!schoolData.teacherName.trim()) err.teacherName = 'Teacher In-Charge name is required.';
    if (!schoolData.teacherPhone.trim() || !/^[0-9+ -]{7,16}$/.test(schoolData.teacherPhone)) {
      err.teacherPhone = 'Valid teacher contact number is required.';
    }
    if (!schoolData.teacherEmail.trim() || !/\S+@\S+\.\S+/.test(schoolData.teacherEmail)) {
      err.teacherEmail = 'Valid teacher email address is required.';
    }
    return err;
  };

  // Step 2 Validation
  const validateStep2 = () => {
    const err: Record<string, string> = {};
    participants.forEach((p, idx) => {
      if (!p.name.trim()) err[`p_${idx}_name`] = `Participant ${idx + 1} full name is required.`;
      if (!p.email.trim() || !/\S+@\S+\.\S+/.test(p.email)) {
        err[`p_${idx}_email`] = `Valid email for Participant ${idx + 1} is required.`;
      }
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
    saveDraft();
    setCurrentStep(2);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleNextToStep3 = () => {
    const err = validateStep2();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    setErrors({});
    saveDraft();
    setCurrentStep(3);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleFinalSubmit = () => {
    if (!eligibilityConfirmed) {
      setErrors({ eligibility: 'Please confirm the institutional eligibility declaration.' });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    setTimeout(() => {
      // Generate clean registration reference ID
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const regId = `SMRJ-YC27-${randomNum}`;
      setRegistrationId(regId);
      setIsSubmitting(false);
      setSubmissionComplete(true);

      // Clear draft
      localStorage.removeItem('smrj_draft_school');
      localStorage.removeItem('smrj_draft_participants');

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#563F6A', '#EDC868', '#FAF8F5']
      });
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 1000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-cream min-h-screen pt-24 pb-24">
      
      {/* SECTION 1: REGISTRATION INTRODUCTION */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-gold/40 text-purple text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
                <span>Official Delegation Dossier</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl text-ink leading-tight">
                Register Your <br />
                <span className="italic font-garamond text-purple">School Delegation.</span>
              </h1>

              <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                Join premier educational institutions at Seth M.R. Jaipuria School, Lucknow on <strong>16—17 April 2027</strong>. Complete this three-step formal accreditation to secure your delegation slot.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-purple pt-1">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-gold-dark" />
                  Exactly 3 Delegates / Delegation
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gold-dark" />
                  Enrolled in Grades IX—XII
                </span>
              </div>
            </div>

            {/* Right 5 Columns: Students Photograph */}
            <div className="lg:col-span-5 h-72 sm:h-80 rounded-3xl overflow-hidden border border-gold/40 shadow-xl relative">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-cream">
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
                  Accreditation Open
                </span>
                <span className="font-display text-lg text-cream">
                  Maiden Edition · 2027
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 2: 3-STEP REGISTRATION APPLICATION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {submissionComplete ? (
          /* SUCCESS CONFIRMATION SLIP */
          <div className="bg-white rounded-3xl p-8 sm:p-14 border-2 border-gold shadow-2xl space-y-8 animate-fadeIn">
            <div className="text-center space-y-3">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs uppercase font-mono tracking-widest text-gold-dark font-bold">
                Registration Confirmed
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-ink font-bold">
                Welcome to SMRJ Youth Council 2027
              </h2>
              <p className="text-sm text-ink-muted max-w-lg mx-auto">
                Your delegation application has been formally recorded in the council register. An official confirmation email with committee allocations and invoice has been transmitted to <strong>{schoolData.teacherEmail}</strong>.
              </p>
            </div>

            {/* Credential Slip */}
            <div className="p-6 bg-cream rounded-2xl border border-purple/15 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-purple/10">
                <span className="text-xs uppercase font-bold text-ink-muted">Registration Reference ID</span>
                <span className="font-mono text-lg font-bold text-purple bg-purple/10 px-3 py-1 rounded-md">
                  {registrationId}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-ink/80">
                <div>
                  <span className="text-ink-muted block text-[10px] uppercase font-semibold">Registered School</span>
                  <strong className="text-sm text-ink font-display">{schoolData.schoolName}</strong>
                  <div className="text-ink-muted">{schoolData.city}, {schoolData.state}</div>
                </div>
                <div>
                  <span className="text-ink-muted block text-[10px] uppercase font-semibold">Teacher In-Charge</span>
                  <strong className="text-sm text-ink font-display">{schoolData.teacherName}</strong>
                  <div className="text-ink-muted">{schoolData.teacherPhone}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-purple/10">
                <span className="text-ink-muted block text-[10px] uppercase font-semibold mb-2">Delegation Members (3)</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {participants.map((p, idx) => (
                    <div key={idx} className="p-2.5 bg-white rounded-lg border border-purple/10 text-xs">
                      <div className="font-bold text-purple">{p.name}</div>
                      <div className="text-[11px] text-ink-muted">Grade {p.grade}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={handlePrint}
                className="px-6 py-3 bg-purple text-gold font-bold text-xs uppercase tracking-wider rounded-full hover:bg-purple-700 shadow flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Registration Summary</span>
              </button>

              <button
                onClick={() => onNavigate('home')}
                className="px-6 py-3 border border-purple text-purple font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-purple/5 transition-colors"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        ) : (
          /* STEPPER FORM */
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-gold/40 shadow-xl">
            
            {/* Step Progress Tracker */}
            <div className="flex items-center justify-between pb-8 mb-8 border-b border-purple/10">
              {[
                { step: 1, label: '01 School Details' },
                { step: 2, label: '02 Three Delegates' },
                { step: 3, label: '03 Review & Submit' }
              ].map((item) => {
                const isActive = currentStep === item.step;
                const isPassed = currentStep > item.step;
                return (
                  <div key={item.step} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                        isActive
                          ? 'bg-purple text-gold ring-4 ring-gold/30'
                          : isPassed
                          ? 'bg-emerald-600 text-white'
                          : 'bg-cream text-ink-muted border border-purple/20'
                      }`}
                    >
                      {isPassed ? <CheckCircle2 className="w-4 h-4" /> : item.step}
                    </div>
                    <span
                      className={`hidden sm:inline text-xs uppercase tracking-wider font-semibold ${
                        isActive ? 'text-purple' : 'text-ink-muted'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* STEP 1: SCHOOL DETAILS */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-1">
                  <h3 className="font-display text-2xl sm:text-3xl text-ink font-bold">
                    Step 1: School Information
                  </h3>
                  <p className="text-xs text-ink-muted">
                    Provide the official name and registered escort contact for your institution.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                      School / Institutional Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Seth M.R. Jaipuria School / The Doon School"
                      value={schoolData.schoolName}
                      onChange={(e) => setSchoolData({ ...schoolData, schoolName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-ink bg-cream-light focus:outline-none focus:ring-1 ${
                        errors.schoolName ? 'border-red-500' : 'border-purple/20 focus:border-gold focus:ring-gold'
                      }`}
                    />
                    {errors.schoolName && <p className="text-[11px] text-red-600 mt-1">{errors.schoolName}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Lucknow / New Delhi"
                        value={schoolData.city}
                        onChange={(e) => setSchoolData({ ...schoolData, city: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-ink bg-cream-light focus:outline-none focus:ring-1 ${
                          errors.city ? 'border-red-500' : 'border-purple/20 focus:border-gold focus:ring-gold'
                        }`}
                      />
                      {errors.city && <p className="text-[11px] text-red-600 mt-1">{errors.city}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                        State / Territory
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Uttar Pradesh"
                        value={schoolData.state}
                        onChange={(e) => setSchoolData({ ...schoolData, state: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-purple/20 text-sm text-ink bg-cream-light focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                      />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-purple/10">
                    <span className="text-xs uppercase font-bold text-gold-dark block mb-3">
                      Teacher In-Charge / Faculty Escort
                    </span>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                          Teacher In-Charge Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Mrs. Sunita Saxena"
                          value={schoolData.teacherName}
                          onChange={(e) => setSchoolData({ ...schoolData, teacherName: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-ink bg-cream-light focus:outline-none focus:ring-1 ${
                            errors.teacherName ? 'border-red-500' : 'border-purple/20 focus:border-gold focus:ring-gold'
                          }`}
                        />
                        {errors.teacherName && <p className="text-[11px] text-red-600 mt-1">{errors.teacherName}</p>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                            Teacher Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={schoolData.teacherPhone}
                            onChange={(e) => setSchoolData({ ...schoolData, teacherPhone: e.target.value })}
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-ink bg-cream-light focus:outline-none focus:ring-1 ${
                              errors.teacherPhone ? 'border-red-500' : 'border-purple/20 focus:border-gold focus:ring-gold'
                            }`}
                          />
                          {errors.teacherPhone && <p className="text-[11px] text-red-600 mt-1">{errors.teacherPhone}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                            Teacher Official Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="teacher@school.edu.in"
                            value={schoolData.teacherEmail}
                            onChange={(e) => setSchoolData({ ...schoolData, teacherEmail: e.target.value })}
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-ink bg-cream-light focus:outline-none focus:ring-1 ${
                              errors.teacherEmail ? 'border-red-500' : 'border-purple/20 focus:border-gold focus:ring-gold'
                            }`}
                          />
                          {errors.teacherEmail && <p className="text-[11px] text-red-600 mt-1">{errors.teacherEmail}</p>}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="pt-6 border-t border-purple/10 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextToStep2}
                    className="px-6 py-3 bg-purple text-gold font-bold text-xs uppercase tracking-wider rounded-full hover:bg-purple-700 shadow transition-all flex items-center gap-2"
                  >
                    <span>Proceed to Participant Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}


            {/* STEP 2: PARTICIPANT DETAILS (3 DELEGATES) */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-1">
                  <h3 className="font-display text-2xl sm:text-3xl text-ink font-bold">
                    Step 2: Three Delegation Members
                  </h3>
                  <p className="text-xs text-ink-muted">
                    In compliance with summit rules, exactly three delegates from Grades IX—XII must be nominated.
                  </p>
                </div>

                <div className="space-y-6">
                  {participants.map((p, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-cream rounded-2xl border border-purple/15 space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase font-bold text-gold-dark font-mono">
                          Delegate {idx + 1} of 3
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-purple px-2 py-0.5 bg-purple/10 rounded">
                          {idx === 0 ? 'Lead Delegate' : idx === 1 ? 'Whip Delegate' : 'Rapporteur'}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                        <div className="sm:col-span-6">
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-ink mb-1">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder={`Delegate ${idx + 1} Name`}
                            value={p.name}
                            onChange={(e) => {
                              const updated = [...participants];
                              updated[idx].name = e.target.value;
                              setParticipants(updated);
                            }}
                            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-ink bg-white focus:outline-none focus:ring-1 ${
                              errors[`p_${idx}_name`] ? 'border-red-500' : 'border-purple/20 focus:border-gold'
                            }`}
                          />
                          {errors[`p_${idx}_name`] && (
                            <p className="text-[10px] text-red-600 mt-1">{errors[`p_${idx}_name`]}</p>
                          )}
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-ink mb-1">
                            Grade
                          </label>
                          <select
                            value={p.grade}
                            onChange={(e) => {
                              const updated = [...participants];
                              updated[idx].grade = e.target.value as any;
                              setParticipants(updated);
                            }}
                            className="w-full px-3 py-2.5 rounded-lg border border-purple/20 text-sm text-ink bg-white focus:outline-none focus:border-gold"
                          >
                            <option value="IX">IX</option>
                            <option value="X">X</option>
                            <option value="XI">XI</option>
                            <option value="XII">XII</option>
                          </select>
                        </div>

                        <div className="sm:col-span-4">
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-ink mb-1">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="delegate@school.edu"
                            value={p.email}
                            onChange={(e) => {
                              const updated = [...participants];
                              updated[idx].email = e.target.value;
                              setParticipants(updated);
                            }}
                            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-ink bg-white focus:outline-none focus:ring-1 ${
                              errors[`p_${idx}_email`] ? 'border-red-500' : 'border-purple/20 focus:border-gold'
                            }`}
                          />
                          {errors[`p_${idx}_email`] && (
                            <p className="text-[10px] text-red-600 mt-1">{errors[`p_${idx}_email`]}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-purple/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="px-5 py-2.5 border border-purple/20 text-ink text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-cream transition-colors flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to School Details</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextToStep3}
                    className="px-6 py-3 bg-purple text-gold font-bold text-xs uppercase tracking-wider rounded-full hover:bg-purple-700 shadow transition-all flex items-center gap-2"
                  >
                    <span>Proceed to Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}


            {/* STEP 3: REVIEW & SUBMIT */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-1">
                  <h3 className="font-display text-2xl sm:text-3xl text-ink font-bold">
                    Step 3: Review & Final Submission
                  </h3>
                  <p className="text-xs text-ink-muted">
                    Verify all institutional details and confirm eligibility prior to final secretarial dispatch.
                  </p>
                </div>

                {/* Review School Summary */}
                <div className="p-6 bg-cream rounded-2xl border border-purple/15 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold text-purple">
                      Institutional Record
                    </span>
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-xs text-purple font-semibold underline hover:text-gold-dark"
                    >
                      Edit School Details
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-ink-muted text-[10px] uppercase font-semibold">School Name</div>
                      <div className="font-bold text-ink">{schoolData.schoolName}</div>
                      <div className="text-ink-muted">{schoolData.city}, {schoolData.state}</div>
                    </div>
                    <div>
                      <div className="text-ink-muted text-[10px] uppercase font-semibold">Teacher Escort</div>
                      <div className="font-bold text-ink">{schoolData.teacherName}</div>
                      <div className="text-ink-muted">{schoolData.teacherPhone} · {schoolData.teacherEmail}</div>
                    </div>
                  </div>
                </div>

                {/* Review Participants Summary */}
                <div className="p-6 bg-cream rounded-2xl border border-purple/15 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold text-purple">
                      Delegation Composition (3 Members)
                    </span>
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="text-xs text-purple font-semibold underline hover:text-gold-dark"
                    >
                      Edit Participants
                    </button>
                  </div>

                  <div className="space-y-2">
                    {participants.map((p, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white rounded-xl border border-purple/10 flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-gold-dark font-bold">{idx + 1}.</span>
                          <span className="font-bold text-ink">{p.name}</span>
                          <span className="text-ink-muted">({p.email})</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-purple/10 text-purple font-mono font-bold">
                          Grade {p.grade}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Confirmation Checkbox */}
                <div className="p-4 bg-purple-50/70 rounded-xl border border-purple/20 space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={eligibilityConfirmed}
                      onChange={(e) => setEligibilityConfirmed(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded text-purple border-purple/30 focus:ring-gold"
                    />
                    <span className="text-xs text-ink leading-relaxed">
                      <strong>Institutional Eligibility Declaration:</strong> I hereby certify on behalf of {schoolData.schoolName || 'our school'} that all three nominated student delegates are currently enrolled in Grades IX through XII at our institution and will be accompanied by our appointed teacher-in-charge throughout 16—17 April 2027.
                    </span>
                  </label>
                  {errors.eligibility && (
                    <p className="text-[11px] text-red-600 font-semibold">{errors.eligibility}</p>
                  )}
                </div>

                {/* Navigation Buttons */}
                <div className="pt-6 border-t border-purple/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-5 py-2.5 border border-purple/20 text-ink text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-cream transition-colors flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Participants</span>
                  </button>

                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleFinalSubmit}
                    className="px-8 py-3.5 bg-purple text-gold font-bold text-xs uppercase tracking-widest rounded-full hover:bg-purple-700 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Validating & Recording...</span>
                    ) : (
                      <>
                        <span>Submit Official Registration</span>
                        <CheckCircle2 className="w-4 h-4 text-gold" />
                      </>
                    )}
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
