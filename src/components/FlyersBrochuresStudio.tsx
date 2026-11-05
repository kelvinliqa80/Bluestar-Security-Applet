import React, { useState } from 'react';
import { 
  Shield, 
  Download, 
  FileText, 
  Printer, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  Car, 
  Radio, 
  Dog, 
  Lock, 
  Layers,
  ChevronRight,
  Eye,
  BookOpen
} from 'lucide-react';
import { COMPANY_DETAILS, IMAGES } from '../data/bookletData';
import { downloadSinglePage } from '../utils/pdfGenerator';

interface FlyersBrochuresStudioProps {
  onRequestQuote: () => void;
}

export const FlyersBrochuresStudio: React.FC<FlyersBrochuresStudioProps> = ({ onRequestQuote }) => {
  const [docType, setDocType] = useState<'flyer' | 'brochure'>('flyer');
  const [selectedTemplate, setSelectedTemplate] = useState<'mining' | 'electronic' | 'patrol' | 'estate'>('mining');
  const [selectedTheme, setSelectedTheme] = useState<'obsidian' | 'navy' | 'platinum'>('obsidian');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (elementId: string, fileName: string) => {
    setIsDownloading(true);
    try {
      await downloadSinglePage(elementId, fileName);
    } catch (e) {
      console.error(e);
    } finally {
      setIsDownloading(false);
    }
  };

  // Theme styling tokens
  const getThemeClasses = () => {
    switch (selectedTheme) {
      case 'obsidian':
        return {
          bg: 'bg-slate-950 text-slate-100',
          card: 'bg-slate-900/90 border-slate-800 shadow-xl',
          header: 'text-white font-black',
          brand: 'text-blue-400',
          badge: 'bg-blue-950/80 text-blue-300 border-blue-800',
          accent: 'from-blue-600 to-indigo-600'
        };
      case 'navy':
        return {
          bg: 'bg-[#0a1128] text-blue-50',
          card: 'bg-[#101b3d]/90 border-blue-900/60 shadow-xl',
          header: 'text-white font-black',
          brand: 'text-amber-400',
          badge: 'bg-amber-950/80 text-amber-300 border-amber-800',
          accent: 'from-blue-600 to-amber-500'
        };
      case 'platinum':
        return {
          bg: 'bg-slate-100 text-slate-950',
          card: 'bg-white border-slate-300 shadow-md',
          header: 'text-slate-950 font-black',
          brand: 'text-blue-900',
          badge: 'bg-blue-100 text-blue-950 border-blue-300',
          accent: 'from-blue-700 to-sky-600'
        };
    }
  };

  const currentThemeTokens = getThemeClasses();

  return (
    <div className="flex flex-col items-center w-full min-h-[calc(100vh-5rem)] py-6 px-3 sm:px-6">
      
      {/* Studio Header & Control Bar */}
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-4 p-4 mb-6 rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-md shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-black text-white tracking-tight">
              Flyers & Brochures Publishing Studio
            </h1>
            <p className="text-xs text-slate-400">
              Select between single-page high-impact <strong>Flyers</strong> and detailed multi-section <strong>Brochures</strong>.
            </p>
          </div>
        </div>

        {/* Doc Type Switcher (Flyers vs Brochures) */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => {
              setDocType('flyer');
              setSelectedTemplate('mining');
            }}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
              docType === 'flyer' 
                ? 'bg-blue-600 text-white shadow' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Flyers (Service Sheets)</span>
          </button>
          <button
            onClick={() => {
              setDocType('brochure');
              setSelectedTemplate('electronic');
            }}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
              docType === 'brochure' 
                ? 'bg-blue-600 text-white shadow' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Brochures (Technical Guides)</span>
          </button>
        </div>

        {/* Theme & Download Actions */}
        <div className="flex items-center gap-2">
          <select
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value as any)}
            className="px-3 py-1.5 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-300 focus:outline-none focus:border-blue-500 cursor-pointer font-medium"
          >
            <option value="obsidian">Obsidian Tactical</option>
            <option value="navy">Executive Navy & Gold</option>
            <option value="platinum">Platinum Corporate</option>
          </select>
        </div>
      </div>

      {/* Sub-template Selector Tabs based on Doc Type */}
      <div className="w-full max-w-[794px] mb-4 flex items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase text-slate-400 font-bold">
            {docType === 'flyer' ? 'Select Flyer Template:' : 'Select Brochure Template:'}
          </span>
          {docType === 'flyer' ? (
            <>
              <button
                onClick={() => setSelectedTemplate('mining')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg border ${selectedTemplate === 'mining' ? 'bg-blue-600 text-white border-blue-500' : 'bg-slate-900 text-slate-300 border-slate-800'}`}
              >
                01. Heavy Industrial & Mining Flyer
              </button>
              <button
                onClick={() => setSelectedTemplate('patrol')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg border ${selectedTemplate === 'patrol' ? 'bg-blue-600 text-white border-blue-500' : 'bg-slate-900 text-slate-300 border-slate-800'}`}
              >
                02. 24/7 Rapid Response Flyer
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setSelectedTemplate('electronic')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg border ${selectedTemplate === 'electronic' ? 'bg-blue-600 text-white border-blue-500' : 'bg-slate-900 text-slate-300 border-slate-800'}`}
              >
                01. Electronic CCTV & Surveillance Brochure
              </button>
              <button
                onClick={() => setSelectedTemplate('estate')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg border ${selectedTemplate === 'estate' ? 'bg-blue-600 text-white border-blue-500' : 'bg-slate-900 text-slate-300 border-slate-800'}`}
              >
                02. Gatehouse Access Control Brochure
              </button>
            </>
          )}
        </div>
      </div>

      {/* Prominent Action Download Banner */}
      <div className="w-full max-w-[794px] mb-4 p-4 rounded-2xl border border-blue-500/40 bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 backdrop-blur-md shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-blue-600 text-white shadow-md animate-pulse">
            <Download className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-tight">
              Ready to Download {docType === 'flyer' ? 'Flyer' : 'Brochure'}: {selectedTemplate.toUpperCase()}
            </h3>
            <p className="text-xs text-blue-300">
              High-resolution {docType} publication formatted for professional printing & client tenders in Zambia.
            </p>
          </div>
        </div>
        <button
          onClick={() => handleDownload(
            `flyer-render-${selectedTemplate}`, 
            `Bluestar_${docType.toUpperCase()}_${selectedTemplate.toUpperCase()}.png`
          )}
          disabled={isDownloading}
          className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg transition-all transform hover:scale-105 cursor-pointer disabled:opacity-50 whitespace-nowrap flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>{isDownloading ? 'Generating File...' : `Download ${docType === 'flyer' ? 'Flyer' : 'Brochure'} Now`}</span>
        </button>
      </div>

      {/* Printable Flyer / Brochure Render Container (A4 Proportional Layout) */}
      <div className="w-full max-w-[794px] min-h-[1123px] flex flex-col justify-between shadow-2xl rounded-2xl overflow-hidden border border-slate-800 transition-all duration-300 relative my-2">
        
        <div 
          id={`flyer-render-${selectedTemplate}`} 
          className={`flex-1 flex flex-col justify-between p-8 sm:p-12 relative overflow-hidden ${currentThemeTokens.bg}`}
          style={{ width: '794px', minHeight: '1123px', margin: '0 auto' }}
        >
          
          {/* Subtle background security line patterns */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>

          {/* WATERMARK */}
          <div className="absolute inset-0 pointer-events-none select-none z-0 flex items-center justify-center overflow-hidden">
            <img
              src={IMAGES.shieldLogo}
              alt=""
              className={`w-[32rem] h-[32rem] object-contain opacity-[0.08] ${selectedTheme === 'platinum' ? 'mix-blend-multiply opacity-[0.06]' : ''}`}
            />
          </div>

          {/* TEMPLATE 1: MINING & ARMED GUARDING FLYER */}
          {selectedTemplate === 'mining' && (
            <>
              {/* Header */}
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-blue-500/30">
                <div className="flex items-center gap-3">
                  <img src={IMAGES.shieldLogo} alt="Shield" className="w-12 h-12 object-contain" />
                  <div>
                    <div className="text-xs font-mono tracking-widest uppercase text-blue-400 font-bold">
                      BLUE STAR SECURITY SOLUTIONS LIMITED
                    </div>
                    <div className="text-sm font-semibold tracking-wide text-slate-300">
                      Ndola Headquarters · Republic of Zambia
                    </div>
                  </div>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg border border-blue-500/40 bg-blue-950/60 text-blue-300 text-xs font-mono font-bold tracking-wider">
                  OFFICIAL SERVICE FLYER · MINING DIVISION
                </div>
              </div>

              {/* Main Content Area */}
              <div className="relative z-10 my-auto py-6 space-y-6">
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 text-xs font-mono tracking-widest uppercase rounded bg-blue-600/20 text-blue-300 border border-blue-500/40">
                    High-Impact Service Flyer
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                    ARMED EXTRACTION & MINING SITE SECURITY
                  </h2>
                  <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                    Deploying disciplined armed guards and specialized canine security units engineered for open-cast copper mining pits, mineral transport, and high-value industrial assets across Zambia.
                  </p>
                </div>

                {/* Dual Visual Showcase */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl">
                    <img 
                      src={IMAGES.armedGuardMining} 
                      alt="Armed Guard at Mining Site" 
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 text-[10px] font-mono uppercase bg-blue-950/90 text-blue-300 border border-blue-800 rounded">
                      Armed Mining Patrol
                    </div>
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl">
                    <img 
                      src={IMAGES.dogHandler} 
                      alt="K9 Canine Unit" 
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 text-[10px] font-mono uppercase bg-rose-950/90 text-rose-300 border border-rose-800 rounded">
                      K9 Canine Containment
                    </div>
                  </div>
                </div>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { title: "Licensed Armed Security", desc: "Professionally licensed security personnel with authorized post protocols." },
                    { title: "Perimeter Protection", desc: "24/7 boundary sweeps and high-lumen night security lighting." },
                    { title: "K9 Security Units", desc: "Trained security dogs with certified handlers for welcoming compound containment." }
                  ].map((c, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/80">
                      <div className="text-blue-400 font-mono text-xs font-bold mb-1">0{idx + 1}.</div>
                      <div className="font-bold text-xs text-white mb-1">{c.title}</div>
                      <div className="text-[11px] text-slate-400 leading-tight">{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* TEMPLATE 2: ELECTRONIC SURVEILLANCE & CCTV BROCHURE */}
          {selectedTemplate === 'electronic' && (
            <>
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-blue-500/30">
                <div className="flex items-center gap-3">
                  <img src={IMAGES.shieldLogo} alt="Shield" className="w-12 h-12 object-contain" />
                  <div>
                    <div className="text-xs font-mono tracking-widest uppercase text-blue-400 font-bold">
                      BLUE STAR SECURITY SOLUTIONS LIMITED
                    </div>
                    <div className="text-sm font-semibold tracking-wide text-slate-300">
                      Electronic Protection Directorate
                    </div>
                  </div>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg border border-sky-500/40 bg-sky-950/60 text-sky-300 text-xs font-mono font-bold tracking-wider">
                  OFFICIAL TECHNICAL BROCHURE · CCTV & SYSTEMS
                </div>
              </div>

              <div className="relative z-10 my-auto py-6 space-y-6">
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 text-xs font-mono tracking-widest uppercase rounded bg-sky-600/20 text-sky-300 border border-sky-500/40">
                    Comprehensive Technical Brochure
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                    ADVANCED IP SURVEILLANCE & BIOMETRIC SYSTEMS
                  </h2>
                  <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                    Professional installation of high-resolution dome cameras, electric fencing energizers, automated turnstiles, and Baofeng tactical UHF communications for seamless base-to-guard command coordination.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl">
                    <img 
                      src={IMAGES.cctvInstaller} 
                      alt="CCTV Technician" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 text-[10px] font-mono uppercase bg-blue-950/90 text-blue-300 border border-blue-800 rounded">
                      CCTV Camera Installation
                    </div>
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl flex items-center justify-center p-2 bg-slate-950">
                    <img 
                      src={IMAGES.radioComms} 
                      alt="Tactical Radios" 
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 text-[10px] font-mono uppercase bg-emerald-950/90 text-emerald-300 border border-emerald-800 rounded">
                      Baofeng UHF/VHF Comms
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { title: "IP Dome & PTZ Cameras", desc: "Night vision, motion tracking, and remote mobile surveillance feeds." },
                    { title: "Electric Perimeter", desc: "High-voltage energizers with tamper-trip zone detection." },
                    { title: "Tactical Radio Nets", desc: "Encrypted UHF comms linking static guards to central dispatch." }
                  ].map((c, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/80">
                      <div className="text-sky-400 font-mono text-xs font-bold mb-1">0{idx + 1}.</div>
                      <div className="font-bold text-xs text-white mb-1">{c.title}</div>
                      <div className="text-[11px] text-slate-400 leading-tight">{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* TEMPLATE 3: RAPID RESPONSE & MOBILE PATROL FLEET */}
          {selectedTemplate === 'patrol' && (
            <>
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-blue-500/30">
                <div className="flex items-center gap-3">
                  <img src={IMAGES.shieldLogo} alt="Shield" className="w-12 h-12 object-contain" />
                  <div>
                    <div className="text-xs font-mono tracking-widest uppercase text-blue-400 font-bold">
                      BLUE STAR SECURITY SOLUTIONS LIMITED
                    </div>
                    <div className="text-sm font-semibold tracking-wide text-slate-300">
                      Mobile Operations & Rapid Intervention
                    </div>
                  </div>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg border border-amber-500/40 bg-amber-950/60 text-amber-300 text-xs font-mono font-bold tracking-wider">
                  OFFICIAL SERVICE FLYER · MOBILE FLEET
                </div>
              </div>

              <div className="relative z-10 my-auto py-6 space-y-6">
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 text-xs font-mono tracking-widest uppercase rounded bg-amber-600/20 text-amber-300 border border-amber-500/40">
                    High-Impact Service Flyer
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                    MOTORIZED PATROL FLEET & EMERGENCY BACKUP
                  </h2>
                  <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                    Branded response vehicles equipped with high-visibility graphics, emergency beacons, radio links, and high-lumen searchlights providing rapid alarm mobilization across the Copperbelt.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl">
                    <img 
                      src={IMAGES.patrolCarRear} 
                      alt="Patrol Fleet Vehicle" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 text-[10px] font-mono uppercase bg-blue-950/90 text-blue-300 border border-blue-800 rounded">
                      Patrol Vehicle at Commercial Park
                    </div>
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl">
                    <img 
                      src={IMAGES.patrolCarSide} 
                      alt="Escort & Patrol Fleet" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 text-[10px] font-mono uppercase bg-blue-950/90 text-blue-300 border border-blue-800 rounded">
                      Escort & Patrol Fleet (Side Profile)
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { title: "Scheduled & Night Sweeps", desc: "Randomized perimeter drive-bys providing high visual deterrence." },
                    { title: "Alarm & Panic Response", desc: "Immediate dispatch upon electric fence trips or silent panic triggers." },
                    { title: "Operational Site Backup", desc: "Reinforces static guard posts during shift changes and cargo deliveries." }
                  ].map((c, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/80">
                      <div className="text-amber-400 font-mono text-xs font-bold mb-1">0{idx + 1}.</div>
                      <div className="font-bold text-xs text-white mb-1">{c.title}</div>
                      <div className="text-[11px] text-slate-400 leading-tight">{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* TEMPLATE 4: ACCESS CONTROL & ESTATE PERIMETER BROCHURE */}
          {selectedTemplate === 'estate' && (
            <>
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-blue-500/30">
                <div className="flex items-center gap-3">
                  <img src={IMAGES.shieldLogo} alt="Shield" className="w-12 h-12 object-contain" />
                  <div>
                    <div className="text-xs font-mono tracking-widest uppercase text-blue-400 font-bold">
                      BLUE STAR SECURITY SOLUTIONS LIMITED
                    </div>
                    <div className="text-sm font-semibold tracking-wide text-slate-300">
                      Premises & Gatehouse Security
                    </div>
                  </div>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg border border-emerald-500/40 bg-emerald-950/60 text-emerald-300 text-xs font-mono font-bold tracking-wider">
                  OFFICIAL TECHNICAL BROCHURE · ACCESS CONTROL
                </div>
              </div>

              <div className="relative z-10 my-auto py-6 space-y-6">
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 text-xs font-mono tracking-widest uppercase rounded bg-emerald-600/20 text-emerald-300 border border-emerald-500/40">
                    Comprehensive Technical Brochure
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                    GATEHOUSE ACCESS CONTROL & ESTATE PERIMETER
                  </h2>
                  <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                    Perimeter control, barrier management, visitor logging procedures, patrol schedules, and customized security standing orders for residential estates and corporate campuses.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl">
                    <img 
                      src={IMAGES.accessControlGuards} 
                      alt="Access Control Guards" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 text-[10px] font-mono uppercase bg-blue-950/90 text-blue-300 border border-blue-800 rounded">
                      Gate 3 Access Control Station
                    </div>
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl">
                    <img 
                      src={IMAGES.patrolCarSide} 
                      alt="Patrol Vehicle Side" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 text-[10px] font-mono uppercase bg-emerald-950/90 text-emerald-300 border border-emerald-800 rounded">
                      Estate Convoy & Escort Patrol
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { title: "Gate 3 Barrier Operations", desc: "Rigorous verification of vehicles, drivers, and visitor credentials." },
                    { title: "Visitor Registry Logging", desc: "Digital and manual logs tracking all arrivals and departures." },
                    { title: "Estate Perimeter Patrols", desc: "Scheduled guard foot patrols securing boundary walls and gates." }
                  ].map((c, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/80">
                      <div className="text-emerald-400 font-mono text-xs font-bold mb-1">0{idx + 1}.</div>
                      <div className="font-bold text-xs text-white mb-1">{c.title}</div>
                      <div className="text-[11px] text-slate-400 leading-tight">{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Footer Contact Strip */}
          <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>Ndola Headquarters · Nationwide Deployment</span>
            </div>
            <div className="text-white font-bold">
              DISPATCH: 0979 728 918 · 0967 991 845
            </div>
            <div className="text-blue-400">
              bluestar.solutions@hotmail.com
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
