import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck,
  Building,
  AlertCircle,
  MessageCircle,
  ExternalLink,
  Clock,
  ArrowRight
} from 'lucide-react';
import { SECTORS, SERVICES, COMPANY_DETAILS } from '../data/bookletData';

interface DeploymentRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentRequestModal: React.FC<DeploymentRequestModalProps> = ({ 
  isOpen, 
  onClose 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    sector: 'Mining',
    location: 'Ndola, Copperbelt',
    phone: '',
    email: '',
    selectedServices: ['01. Regular & Armed Guarding', '03. Mobile Patrol & Rapid Response'],
    operationalNotes: '',
    preferredChannel: 'whatsapp' as 'whatsapp' | 'email' | 'both'
  });

  const [submitted, setSubmitted] = useState(false);
  const [dispatchMethod, setDispatchMethod] = useState<'whatsapp' | 'email' | 'both'>('whatsapp');

  if (!isOpen) return null;

  const targetWhatsApp = "0975665700";
  const targetWhatsAppUrlNumber = "260975665700";
  const targetEmail = "bluestar.solutions@hotmail.com";

  const constructMessage = () => {
    return [
      `*BLUESTAR SECURITY SOLUTIONS - DEPLOYMENT INQUIRY*`,
      `----------------------------------------`,
      `*Contact Person:* ${formData.name || 'Not specified'}`,
      `*Organization / Facility:* ${formData.organization || 'Not specified'}`,
      `*Industry Sector:* ${formData.sector}`,
      `*Location in Zambia:* ${formData.location || 'Not specified'}`,
      `*Client Phone:* ${formData.phone || 'Not specified'}`,
      `*Client Email:* ${formData.email || 'Not specified'}`,
      ``,
      `*Required Security Solutions:*`,
      formData.selectedServices.length > 0 
        ? formData.selectedServices.map(s => ` • ${s}`).join('\n')
        : ` • General Site Assessment`,
      ``,
      `*Operational Notes / Requirements:*`,
      formData.operationalNotes ? `${formData.operationalNotes}` : `Site inspection & quotation requested.`,
      `----------------------------------------`,
      `_Submitted via Bluestar Security Executive Dossier (Ndola, Zambia)_`
    ].join('\n');
  };

  const getWhatsAppUrl = () => {
    const text = constructMessage();
    return `https://wa.me/${targetWhatsAppUrlNumber}?text=${encodeURIComponent(text)}`;
  };

  const getEmailUrl = () => {
    const subject = `Security Deployment Inquiry: ${formData.organization || formData.name || 'Site Assessment'}`;
    const body = constructMessage().replace(/\*/g, ''); // strip markdown asterisks for plain email
    return `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent, channelOverride?: 'whatsapp' | 'email') => {
    e.preventDefault();
    const activeChannel = channelOverride || formData.preferredChannel;
    setDispatchMethod(activeChannel);
    setSubmitted(true);

    // Open preferred destination immediately in a new tab or email client
    if (activeChannel === 'whatsapp') {
      window.open(getWhatsAppUrl(), '_blank');
    } else if (activeChannel === 'email') {
      window.location.href = getEmailUrl();
    } else {
      window.open(getWhatsAppUrl(), '_blank');
    }
  };

  const handleServiceToggle = (serviceTitle: string) => {
    if (formData.selectedServices.includes(serviceTitle)) {
      setFormData({
        ...formData,
        selectedServices: formData.selectedServices.filter(s => s !== serviceTitle)
      });
    } else {
      setFormData({
        ...formData,
        selectedServices: [...formData.selectedServices, serviceTitle]
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-fadeIn modal-backdrop overflow-y-auto">
      {/* Slate Cream White Theme Container */}
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-2xl border-2 border-slate-300 bg-[#fbfbf9] shadow-2xl overflow-hidden my-auto text-slate-900">
        
        {/* Header - Slate Cream White with Navy Accents */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b-2 border-slate-200 bg-white shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-900 text-amber-300 shadow-sm border border-blue-950">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-black tracking-widest uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200">
                  OFFICIAL INQUIRY CARD
                </span>
                <span className="text-[11px] font-mono font-bold text-emerald-700 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  DIRECT DISPATCH ROUTED
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight uppercase underline underline-offset-4 decoration-blue-600">
                REQUEST SECURITY DEPLOYMENT
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                Direct transmission to <span className="text-emerald-700 font-bold">WhatsApp: {targetWhatsApp}</span> & <span className="text-blue-700 font-bold">Email: {targetEmail}</span>
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-950 hover:bg-slate-200/80 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-5 bg-[#fbfbf9]">
          {submitted ? (
            /* Confirmation / Dispatch Receipt Screen */
            <div className="py-6 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
                  INQUIRY PREPARED FOR DISPATCH
                </h3>
                <p className="text-sm sm:text-base font-medium text-slate-700 max-w-lg mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-slate-950">{formData.name}</span>. Your deployment request for <span className="font-bold text-blue-900">{formData.organization || 'your organization'}</span> in <span className="font-bold text-slate-950">{formData.location}</span> is formatted and ready.
                </p>
              </div>

              {/* Direct Routing Action Buttons */}
              <div className="p-5 rounded-2xl border-2 border-slate-300 bg-white max-w-lg mx-auto shadow-sm space-y-4 text-left">
                <div className="font-bold text-xs uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-2 flex items-center justify-between">
                  <span>SEND DIRECTLY TO BLUESTAR COMMAND:</span>
                  <span className="text-emerald-700 font-mono text-[11px] font-bold">24/7 STANDBY</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* WhatsApp Action */}
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span>Send via WhatsApp ({targetWhatsApp})</span>
                  </a>

                  {/* Email Action */}
                  <a
                    href={getEmailUrl()}
                    className="p-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    <Mail className="w-5 h-5 shrink-0" />
                    <span>Send via Email ({targetEmail})</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 space-y-1.5 font-medium">
                  <div className="font-bold text-slate-900">Direct Command Dispatch Lines:</div>
                  <div className="flex flex-wrap items-center gap-4 text-slate-800 font-mono">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Phone className="w-3.5 h-3.5 text-blue-700" />
                      0979 728 918 (Operations)
                    </span>
                    <span className="flex items-center gap-1.5 font-bold">
                      <Phone className="w-3.5 h-3.5 text-emerald-700" />
                      0975 665 700 (WhatsApp Line)
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                    <span>Plot 1621 Ndola Township, Copperbelt, Zambia</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Summary Preview Card */}
              <div className="max-w-lg mx-auto p-4 rounded-xl border border-slate-300 bg-[#f8f9fa] text-left text-xs font-mono text-slate-800 space-y-1">
                <div className="font-bold uppercase tracking-wider text-slate-900 mb-1 border-b border-slate-200 pb-1">
                  Preview of Transmitted Payload:
                </div>
                <div className="whitespace-pre-line leading-relaxed max-h-36 overflow-y-auto pr-2">
                  {constructMessage()}
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => { setSubmitted(false); }}
                  className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  Edit Inquiry Details
                </button>
                <button
                  onClick={() => { setSubmitted(false); onClose(); }}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Inquiry Form in Slate Cream White Theme */
            <form onSubmit={e => handleSubmit(e)} className="space-y-4 sm:space-y-5">
              
              {/* Row 1: Contact Person & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center justify-between">
                    <span>Contact Person Name *</span>
                    <span className="text-[11px] font-normal text-slate-500 lowercase">(required)</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Kelvin Mwila / Ronald Tembo"
                    className="w-full px-4 py-3 text-sm sm:text-base font-semibold rounded-xl bg-white border-2 border-slate-300 text-slate-950 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 transition-all shadow-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center justify-between">
                    <span>Organization / Facility *</span>
                    <span className="text-[11px] font-normal text-slate-500 lowercase">(required)</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={e => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Copper Mining Plant / Commercial Park"
                    className="w-full px-4 py-3 text-sm sm:text-base font-semibold rounded-xl bg-white border-2 border-slate-300 text-slate-950 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 transition-all shadow-xs"
                  />
                </div>
              </div>

              {/* Row 2: Sector & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Industry Sector
                  </label>
                  <select
                    value={formData.sector}
                    onChange={e => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-4 py-3 text-sm sm:text-base font-semibold rounded-xl bg-white border-2 border-slate-300 text-slate-950 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 transition-all shadow-xs"
                  >
                    {SECTORS.map((s, idx) => (
                      <option key={idx} value={s.name}>{s.name} Sector</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center justify-between">
                    <span>Deployment Location *</span>
                    <span className="text-[11px] font-normal text-slate-500 lowercase">(Zambia town)</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Ndola, Kitwe, Lusaka, Chingola"
                    className="w-full px-4 py-3 text-sm sm:text-base font-semibold rounded-xl bg-white border-2 border-slate-300 text-slate-950 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 transition-all shadow-xs"
                  />
                </div>
              </div>

              {/* Row 3: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center justify-between">
                    <span>Phone / WhatsApp Number *</span>
                    <span className="text-[11px] font-normal text-slate-500 lowercase">(active line)</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0979 000 000"
                    className="w-full px-4 py-3 text-sm sm:text-base font-semibold rounded-xl bg-white border-2 border-slate-300 text-slate-950 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 transition-all shadow-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center justify-between">
                    <span>Email Address *</span>
                    <span className="text-[11px] font-normal text-slate-500 lowercase">(for formal quote)</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. client@domain.zm"
                    className="w-full px-4 py-3 text-sm sm:text-base font-semibold rounded-xl bg-white border-2 border-slate-300 text-slate-950 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 transition-all shadow-xs"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2 pt-1">
                <label className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider block">
                  Select Required Solutions (Click to toggle)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-44 overflow-y-auto p-2.5 rounded-xl border-2 border-slate-300 bg-white">
                  {SERVICES.map((srv, idx) => {
                    const isSelected = formData.selectedServices.includes(srv.title);
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => handleServiceToggle(srv.title)}
                        className={`p-2.5 text-left text-xs sm:text-sm rounded-lg transition-all flex items-center justify-between font-semibold border ${
                          isSelected 
                            ? 'bg-blue-50 border-blue-600 text-blue-950 font-bold shadow-xs' 
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                        }`}
                      >
                        <span className="truncate pr-1">{srv.title}</span>
                        {isSelected ? (
                          <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 ml-1" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0 ml-1" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Operational Scope, Shift Hours or Threat Concerns
                </label>
                <textarea
                  rows={2}
                  value={formData.operationalNotes}
                  onChange={e => setFormData({ ...formData, operationalNotes: e.target.value })}
                  placeholder="Describe your perimeter fence, number of guard posts needed, 24/7 or night shift only..."
                  className="w-full px-4 py-2.5 text-sm font-semibold rounded-xl bg-white border-2 border-slate-300 text-slate-950 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100 resize-none shadow-xs"
                />
              </div>

              {/* Routing Destination Selection & Submit Actions */}
              <div className="pt-3 border-t-2 border-slate-200 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="text-xs text-slate-700 font-semibold flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Inquiry will be routed immediately to Bluestar Command:</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-slate-800">
                    <span className="text-emerald-700">WA: {targetWhatsApp}</span> · <span className="text-blue-700">{targetEmail}</span>
                  </div>
                </div>

                {/* Primary Dual Dispatch Buttons for direct user choice */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, 'whatsapp')}
                    className="py-3 px-4 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Submit via WhatsApp ({targetWhatsApp})</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, 'email')}
                    className="py-3 px-4 text-xs sm:text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-700/20 active:scale-95 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Submit via Email ({targetEmail})</span>
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>

        {/* Footer Bar */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-100 text-[11px] font-mono text-slate-600 flex flex-wrap items-center justify-between gap-2">
          <span>BLUE STAR SECURITY SOLUTIONS LIMITED · PACRA Reg No. 120261057561</span>
          <span>Ndola, Copperbelt, Zambia</span>
        </div>

      </div>
    </div>
  );
};
