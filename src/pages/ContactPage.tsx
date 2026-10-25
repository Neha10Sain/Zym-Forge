import React, { useState } from 'react';
import { PageId } from '../types';
import { useGymTheme } from '../context/ThemeContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Car,
  Navigation,
  ShieldCheck,
  Compass
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const { theme } = useGymTheme();
  const isSanctuary = theme === 'sanctuary';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Membership Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    referenceId: string;
    timestamp: string;
  } | null>(null);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!fullName.trim() || fullName.trim().length < 3) {
      errors.fullName = 'Please enter your full name (minimum 3 characters).';
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      errors.phone = 'Please provide a valid contact number (at least 8 digits).';
    }
    if (!message.trim() || message.trim().length < 10) {
      errors.message = 'Please share a brief message or question (at least 10 characters).';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess({
        referenceId: `FRG-MSG-${Math.floor(100000 + Math.random() * 900000)}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setFormErrors({});
    }, 600);
  };

  return (
    <div className="space-y-20 md:space-y-28 pb-24">
      {/* Header */}
      <section className="relative pt-12 pb-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase">
            <span className={isSanctuary ? 'text-[#A3C9A8] font-bold' : 'text-[#C7FF3D] font-bold'}>
              Direct Communication
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-400">RESPONSE TIME &lt; 2 HOURS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-heading uppercase tracking-tight text-white">
            Connect With FORGE
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Schedule an on-site walkthrough, inquire about enterprise corporate wellness, or request your complimentary 1-Day athlete trial.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Contact Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-10 rounded-2xl border transition-colors ${
              isSanctuary ? 'bg-[#122018] border-[#A3C9A8]/20' : 'bg-[#15181C] border-white/10'
            }`}>
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block mb-1">
                  Athlete Dispatch
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  Send Us a Direct Message
                </h2>
              </div>

              {submissionSuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                    isSanctuary ? 'bg-[#A3C9A8]/20 text-[#A3C9A8]' : 'bg-[#C7FF3D]/20 text-[#C7FF3D]'
                  }`}>
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      Message Dispatched
                    </h3>
                    <p className="text-xs text-neutral-400 font-mono mt-1">
                      Reference #{submissionSuccess.referenceId} at {submissionSuccess.timestamp}
                    </p>
                  </div>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Our Membership & Coaching desk has received your inquiry and will reach out via WhatsApp / phone shortly.
                  </p>
                  <button
                    onClick={() => setSubmissionSuccess(null)}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded border border-white/20 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1.5">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Singhania"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full px-4 py-3 text-xs sm:text-sm rounded-lg border bg-neutral-900 focus:outline-none transition-colors ${
                        formErrors.fullName
                          ? 'border-rose-500'
                          : isSanctuary ? 'border-[#A3C9A8]/30 focus:border-[#A3C9A8]' : 'border-white/15 focus:border-[#C7FF3D]'
                      }`}
                    />
                    {formErrors.fullName && (
                      <span className="text-[11px] text-rose-400 font-mono flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.fullName}</span>
                      </span>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="athlete@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-4 py-3 text-xs sm:text-sm rounded-lg border bg-neutral-900 focus:outline-none transition-colors ${
                          formErrors.email
                            ? 'border-rose-500'
                            : isSanctuary ? 'border-[#A3C9A8]/30 focus:border-[#A3C9A8]' : 'border-white/15 focus:border-[#C7FF3D]'
                        }`}
                      />
                      {formErrors.email && (
                        <span className="text-[11px] text-rose-400 font-mono flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.email}</span>
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1.5">
                        Phone Number (+91) *
                      </label>
                      <input
                        type="tel"
                        placeholder="98200 12345"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full px-4 py-3 text-xs sm:text-sm rounded-lg border bg-neutral-900 focus:outline-none transition-colors ${
                          formErrors.phone
                            ? 'border-rose-500'
                            : isSanctuary ? 'border-[#A3C9A8]/30 focus:border-[#A3C9A8]' : 'border-white/15 focus:border-[#C7FF3D]'
                        }`}
                      />
                      {formErrors.phone && (
                        <span className="text-[11px] text-rose-400 font-mono flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.phone}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1.5">
                      Inquiry Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={`w-full px-4 py-3 text-xs sm:text-sm rounded-lg border bg-neutral-900 focus:outline-none ${
                        isSanctuary ? 'border-[#A3C9A8]/30 focus:border-[#A3C9A8]' : 'border-white/15 focus:border-[#C7FF3D]'
                      }`}
                    >
                      <option value="Membership Inquiry">Membership Inquiry (Starter / Pro / Elite)</option>
                      <option value="Free Day Pass Request">Request 1-Day Athlete Trial Pass</option>
                      <option value="Personal Training Consultation">1-on-1 Personal Training Consultation</option>
                      <option value="Facility Tour Booking">On-Site Facility Tour & Screening</option>
                      <option value="Corporate Wellness Package">Corporate Wellness & Athlete Partnership</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1.5">
                      Message / Training History *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share your current training experience, target goals, or questions regarding our racks, trainers, or sauna..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`w-full px-4 py-3 text-xs sm:text-sm rounded-lg border bg-neutral-900 focus:outline-none resize-none transition-colors ${
                        formErrors.message
                          ? 'border-rose-500'
                          : isSanctuary ? 'border-[#A3C9A8]/30 focus:border-[#A3C9A8]' : 'border-white/15 focus:border-[#C7FF3D]'
                      }`}
                    />
                    {formErrors.message && (
                      <span className="text-[11px] text-rose-400 font-mono flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.message}</span>
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg font-heading flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                        isSanctuary
                          ? 'bg-[#A3C9A8] text-[#0E1A13] hover:brightness-105'
                          : 'bg-[#C7FF3D] text-[#111315] hover:brightness-105'
                      }`}
                    >
                      {isSubmitting ? (
                        <span>Validating and Transmitting...</span>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 mt-2 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Zero spam policy. Your details are strictly confidential.</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Campus Details & Operating Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div className={`p-6 sm:p-8 rounded-2xl border space-y-6 ${
              isSanctuary ? 'bg-[#122018] border-[#A3C9A8]/20' : 'bg-[#15181C] border-white/10'
            }`}>
              <div>
                <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block mb-1">
                  Headquarters & Campus
                </span>
                <h3 className="text-xl font-bold font-heading text-white">
                  FORGE Flagship Campus
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Address:</span>
                    <p className="leading-relaxed text-neutral-300">
                      Plot 42, Senapati Bapat Marg, Lower Parel,<br />
                      Opposite Phoenix Mills, Mumbai 400013
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Phone Lines:</span>
                    <p className="font-mono text-neutral-200">
                      +91 (022) 8492-3000 (Front Desk)<br />
                      +91 98200 45678 (Coach Inquiries)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Email:</span>
                    <p className="font-mono text-neutral-200">
                      memberships@forgefitness.in
                    </p>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Floor Schedule</span>
                </span>
                <div className="space-y-2 text-xs font-mono text-neutral-300">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Monday – Saturday</span>
                    <span className="text-white font-semibold">05:30 AM – 11:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Sunday</span>
                    <span className="text-white font-semibold">07:00 AM – 08:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Recovery Sanctuary</span>
                    <span className={isSanctuary ? 'text-[#A3C9A8] font-semibold' : 'text-[#C7FF3D] font-semibold'}>
                      06:00 AM – 10:00 PM Daily
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transit & Parking Card */}
            <div className={`p-6 rounded-2xl border ${
              isSanctuary ? 'bg-[#122018] border-[#A3C9A8]/20' : 'bg-[#15181C] border-white/10'
            }`}>
              <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block mb-2 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5" />
                <span>Transit & Valet</span>
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Dedicated multi-level complimentary valet parking available for all FORGE athletes. Located 250 meters from Lower Parel Monorail and Western Railway stations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 block">
              Geographic Coordinates
            </span>
            <h3 className="text-2xl font-bold font-heading text-white">
              Campus Location & Satellite Map
            </h3>
          </div>
          <a
            href="https://maps.google.com/?q=Lower+Parel+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase ${
              isSanctuary ? 'text-[#A3C9A8]' : 'text-[#C7FF3D]'
            }`}
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open in Google Maps</span>
          </a>
        </div>

        {/* Embedded Map Canvas Placeholder */}
        <div className={`relative h-96 w-full rounded-2xl border overflow-hidden flex items-center justify-center ${
          isSanctuary ? 'bg-[#0A140F] border-[#A3C9A8]/20' : 'bg-[#111315] border-white/10'
        }`}>
          {/* Simulated Dark Mode Map Grid with Pin */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <div className="relative z-10 text-center p-6 space-y-3 max-w-md bg-black/75 backdrop-blur-md rounded-xl border border-white/15">
            <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center animate-bounce ${
              isSanctuary ? 'bg-[#A3C9A8] text-[#0E1A13]' : 'bg-[#C7FF3D] text-[#111315]'
            }`}>
              <MapPin className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h4 className="text-lg font-bold font-heading text-white">
              FORGE Flagship Campus · Lower Parel
            </h4>
            <p className="text-xs text-neutral-300">
              18.9953° N, 72.8285° E · Senapati Bapat Marg, Mumbai
            </p>
            <div className="pt-2 flex items-center justify-center gap-4 text-xs font-mono text-neutral-400">
              <span>Valet Active</span>
              <span>·</span>
              <span>250m to Transit</span>
              <span>·</span>
              <span>Secure Entry</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
