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
  AlertCircle
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
    operationalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn modal-backdrop">
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                Request Security Deployment & Site Assessment
              </h2>
              <p className="text-xs text-slate-400">
                Direct operational inquiry to Bluestar Command Center · Ndola, Zambia
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Deployment Request Registered
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our Operations Directorate has received your inquiry for <span className="text-blue-400">{formData.organization || 'your organization'}</span> in {formData.location}.
              </p>
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 max-w-sm mx-auto text-xs text-slate-300 space-y-2 text-left">
                <div className="font-semibold text-white">Direct Command Follow-up:</div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>0979 728 718 / 0967 991 845</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>bluestar.solutions@hotmail.com</span>
                </div>
              </div>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-5 py-2 text-xs font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Kelvin Mwila"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Organization / Facility *</label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={e => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Copper Mining Corp / Industrial Estate"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Industry Sector</label>
                  <select
                    value={formData.sector}
                    onChange={e => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                  >
                    {SECTORS.map((s, idx) => (
                      <option key={idx} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Deployment Location in Zambia</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Ndola, Kitwe, Lusaka, Chingola"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0979 000 000"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. client@domain.zm"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2 pt-1">
                <label className="text-xs font-medium text-slate-300 block">Required Security Solutions (Select all that apply)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-36 overflow-y-auto p-2 rounded-lg border border-slate-800 bg-slate-950">
                  {SERVICES.map((srv, idx) => {
                    const isSelected = formData.selectedServices.includes(srv.title);
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => handleServiceToggle(srv.title)}
                        className={`px-2.5 py-1.5 text-left text-xs rounded transition-colors flex items-center justify-between ${
                          isSelected 
                            ? 'bg-blue-600/30 border border-blue-500 text-blue-200' 
                            : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <span className="truncate">{srv.title}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Operational Notes or Threat Concerns</label>
                <textarea
                  rows={2}
                  value={formData.operationalNotes}
                  onChange={e => setFormData({ ...formData, operationalNotes: e.target.value })}
                  placeholder="Describe your site perimeter, shift requirements, or urgency level..."
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-blue-400" />
                  <span>Prompt response by Ndola Command Directorate.</span>
                </div>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-md shadow-blue-600/30"
                >
                  <Send className="w-3.5 h-3.5" /> Submit Inquiry
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
