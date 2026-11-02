import React from 'react';
import { 
  ShieldCheck, 
  Building2, 
  Car, 
  Radio, 
  Search, 
  Truck, 
  FileCheck, 
  ShieldAlert, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  AlertTriangle,
  Award,
  Compass,
  Target,
  Sparkles,
  ChevronRight,
  EyeOff,
  Wrench,
  Dog,
  Users
} from 'lucide-react';
import { 
  COMPANY_DETAILS, 
  IMAGES, 
  CORE_PILLARS, 
  SERVICES, 
  LEADERSHIP_SQUAD, 
  SECTORS 
} from '../data/bookletData';
import { BookletTheme } from '../data/themes';
import { Download } from 'lucide-react';

interface ExecutiveDossierViewProps {
  theme: BookletTheme;
  onRequestQuote: () => void;
  onOpenPdfModal?: () => void;
}

export const ExecutiveDossierView: React.FC<ExecutiveDossierViewProps> = ({
  theme,
  onRequestQuote,
  onOpenPdfModal
}) => {
  return (
    <div className="max-w-6xl mx-auto space-y-16 px-4 py-8">
      
      {/* 1. HERO SECTION */}
      <section className="relative rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 p-6 sm:p-10 md:p-14 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/40 text-blue-300 text-xs font-mono tracking-wider">
            <span>OFFICIAL CORPORATE PROFILE</span>
            <span>·</span>
            <span>NDOLA, COPPERBELT PROVINCE</span>
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-blue-600/30 rounded-full blur-2xl group-hover:bg-blue-600/40 transition-all duration-500"></div>
              <img 
                src={IMAGES.shieldLogo} 
                alt="Bluestar Security Shield Logo" 
                className="relative w-36 h-36 sm:w-44 sm:h-44 object-contain rounded-2xl drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              BLUE STAR SECURITY
              <span className="block text-blue-400 font-normal text-2xl sm:text-4xl md:text-5xl mt-1">
                SOLUTIONS LIMITED
              </span>
            </h1>

            <p className="text-base sm:text-xl font-medium italic text-slate-300 tracking-wide">
              (Command experience. Civilian precision.)
            </p>

            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Tailored protection for mining, corporate campuses, infrastructure, residential estates, and valuable assets across Zambia.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onRequestQuote}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" /> Request Site Deployment
            </button>
          </div>

          {/* Quick Stats Strip */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80">
            <div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono-numbers">100%</div>
              <div className="text-xs text-slate-400">Zambian Owned & Operated</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono-numbers">24/7/365</div>
              <div className="text-xs text-slate-400">Active Command Dispatch</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono-numbers">NDOLA</div>
              <div className="text-xs text-slate-400">Copperbelt HQ Base</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono-numbers">ALL 10</div>
              <div className="text-xs text-slate-400">Provinces Deployment Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT, MISSION & VISION */}
      <section className="space-y-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-1">
            01 // STRATEGIC MANDATE
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Command Experience. Civilian Precision.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="p-4 rounded-2xl border border-slate-800 bg-slate-900/50">
              Bluestar Security Solutions Limited is a Zambian-based security solutions company headquartered in Ndola, Copperbelt Province, with the capability to deploy security personnel and solutions across Zambia.
            </p>
            <p className="p-4 rounded-2xl border border-slate-800 bg-slate-900/50">
              The company combines disciplined personnel, structured operational procedures, threat assessment and modern security technology to provide tailored protection for businesses, infrastructure, property, events and individuals.
            </p>
          </div>

          <div className="md:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 relative overflow-hidden shadow-sm">
              <div className="w-1.5 h-full bg-blue-600 absolute left-0 top-0"></div>
              <div className="pl-3 space-y-2">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                  <Compass className="w-4 h-4" /> OUR MISSION
                </div>
                <p className="text-sm text-slate-200 leading-snug">
                  {COMPANY_DETAILS.mission}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 relative overflow-hidden shadow-sm">
              <div className="w-1.5 h-full bg-sky-500 absolute left-0 top-0"></div>
              <div className="pl-3 space-y-2">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4" /> OUR VISION
                </div>
                <p className="text-sm text-slate-200 leading-snug">
                  {COMPANY_DETAILS.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIRECTORS & SQUAD (WITH OFFICIAL PORTRAITS & SENSITIVE AVATAR) */}
      <section className="space-y-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-1">
            02 // DIRECTORS & SQUAD
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Operational Leadership & Field Command
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Spearheaded by experienced commanders and seasoned civilian corporate directors.
          </p>
        </div>

        {/* Top 2 Primary Directors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Kelvin Akapelwa */}
          <div className="p-6 rounded-3xl border border-blue-600/40 bg-gradient-to-r from-blue-950/40 via-slate-900/80 to-slate-900/60 relative overflow-hidden flex flex-col sm:flex-row gap-5 items-center">
            <div className="relative w-32 h-40 sm:w-36 sm:h-44 shrink-0 rounded-2xl overflow-hidden border border-blue-500/50 bg-slate-950 shadow-md">
              <img 
                src={IMAGES.kelvinAkapelwa} 
                alt="Kelvin Akapelwa" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-2 text-left">
              <span className="px-2.5 py-0.5 text-xs font-mono uppercase rounded-full bg-blue-600 text-white font-bold">
                OPERATIONS & TRAINING
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                KELVIN AKAPELWA
              </h3>
              <div className="text-xs font-bold text-blue-300">
                Director - Operations & Training <span className="text-slate-300 block text-xs">(Former Army Officer)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                Bringing field-tested operational precision, stringent command-grade guard drills, access security mastery, and operational readiness to civilian client assignments across Zambia.
              </p>
            </div>
          </div>

          {/* Ronald Mwanza */}
          <div className="p-6 rounded-3xl border border-slate-700 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/60 relative overflow-hidden flex flex-col sm:flex-row gap-5 items-center">
            <div className="relative w-32 h-40 sm:w-36 sm:h-44 shrink-0 rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-md">
              <img 
                src={IMAGES.ronaldMwanza} 
                alt="Ronald Mwanza" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-2 text-left">
              <span className="px-2.5 py-0.5 text-xs font-mono uppercase rounded-full bg-slate-800 text-blue-300 font-bold border border-slate-700">
                FINANCE & STRATEGY
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                RONALD MWANZA
              </h3>
              <div className="text-xs font-bold text-blue-400">
                Director - Finance & Marketing
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                Steering corporate governance, capital stewardship, strategic marketing partnerships, and strategic deployment expansion across the Copperbelt and national territories.
              </p>
            </div>
          </div>

        </div>

        {/* 3 Department Officers: Chipo Mulenga, Martin Mulenga, Simon Mwiinga */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Chipo Mulenga */}
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-20 shrink-0 rounded-xl overflow-hidden border border-slate-700 bg-slate-950">
                <img 
                  src={IMAGES.chipoMulenga} 
                  alt="Chipo Mulenga" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">CHIPO MULENGA</h4>
                <div className="text-xs font-medium text-blue-400">HR and Liaison Officer</div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-900 inline-block mt-1">
                  Tag: CHIPO MULENGA HR Officer
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Directs stringent personnel background vetting, legal compliance, guard welfare, ongoing training curriculums, and community/regulatory liaison.
            </p>
          </div>

          {/* JOSEPH NGIMBU */}
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-20 shrink-0 rounded-xl overflow-hidden border border-slate-700 bg-slate-950">
                <img 
                  src={IMAGES.josephNgimbu} 
                  alt="JOSEPH NGIMBU" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">JOSEPH NGIMBU</h4>
                <div className="text-xs font-medium text-blue-400">Supervisor Operations Dept</div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-900 inline-block mt-1">
                  Tag: Field Supervisor
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Commands frontline field supervisor patrols, site inspections, post handovers, guard discipline, and strict adherence to client standing orders.
            </p>
          </div>

          {/* Simon Mwiinga (Sensitive Avatar Icon) */}
          <div className="p-5 rounded-2xl border border-amber-900/40 bg-slate-900/60 space-y-3 relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-20 shrink-0 rounded-xl overflow-hidden border border-amber-500/40 bg-neutral-950 flex flex-col items-center justify-center text-amber-400 shadow-inner">
                <EyeOff className="w-8 h-8 mb-1 opacity-90" />
                <span className="text-[8px] font-mono uppercase tracking-widest text-amber-300">CONFIDENTIAL</span>
              </div>
              <div>
                <h4 className="font-bold text-base text-white flex items-center gap-1.5">
                  Simon Mwiinga
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-amber-950 text-amber-300 border border-amber-800">
                    Operative
                  </span>
                </h4>
                <div className="text-xs font-medium text-amber-300">Investigations Officer</div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 inline-block mt-1">
                  Identity Classified (Sensitive Post)
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Leads internal corporate enquiries, asset recovery tracing, incident reconstruction, and lawful evidence preservation. Operative visual identity is tactically protected.
            </p>
          </div>

        </div>
      </section>

      {/* 4. SERVICES & SOLUTIONS GALLERY (MATCHING OFFICIAL PHOTOS) */}
      <section className="space-y-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-1">
            03 // SERVICES & SOLUTIONS
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Tailored Protection. Disciplined Execution.
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            8 integrated security divisions engineered for zero compromise.
          </p>
        </div>

        {/* 5 Main Visual Anchors Grid Matching Services Offered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Service 01: Armed Guarding (Copperbelt Mine Photo) */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
              <img 
                src={IMAGES.armedGuardMining} 
                alt="Armed Guard at Mining Site" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-600 font-bold uppercase">ARMED GUARDING</span>
                <div className="text-sm font-bold mt-1">Mining Pit & Heavy Plant Protection</div>
              </div>
            </div>
            <div className="p-4 space-y-2 text-xs">
              <div className="font-semibold text-white">01. Regular & Armed Guarding</div>
              <p className="text-slate-400 leading-relaxed">
                Static guarding, access control, gatehouses, visitor logs, and licensed armed personnel for mining extraction pits and industrial facilities.
              </p>
            </div>
          </div>

          {/* Service 02: Access Control (Gate 3 Access Control Photo) */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
              <img 
                src={IMAGES.accessControlGuards} 
                alt="Gate 3 Access Control Guards" 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-600 font-bold uppercase">ACCESS CONTROL</span>
                <div className="text-sm font-bold mt-1">Gate 3 Barrier & Visitor Registry</div>
              </div>
            </div>
            <div className="p-4 space-y-2 text-xs">
              <div className="font-semibold text-white">02. Residential & Commercial Security</div>
              <p className="text-slate-400 leading-relaxed">
                Perimeter control, entry barrier management, visitor procedures, guard deployment, and structured check-in logs for commercial parks.
              </p>
            </div>
          </div>

          {/* Service 03: Patrol Car (Zambia Commercial Park Photo) */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
              <img 
                src={IMAGES.patrolCarRear} 
                alt="Patrol Car at Zambia Commercial Park" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-600 font-bold uppercase">RAPID RESPONSE</span>
                <div className="text-sm font-bold mt-1">High-Visibility Patrol Fleet</div>
              </div>
            </div>
            <div className="p-4 space-y-2 text-xs">
              <div className="font-semibold text-white">03. Mobile Patrol & Rapid Response</div>
              <p className="text-slate-400 leading-relaxed">
                Scheduled night patrols, alarm panic mobilization, perimeter drive-bys, and operational backup stationed across commercial corridors.
              </p>
            </div>
          </div>

          {/* Service 04: CCTV Installer */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
              <img 
                src={IMAGES.cctvInstaller} 
                alt="CCTV Installation Technician" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-600 font-bold uppercase">CCTV & ALARMS</span>
                <div className="text-sm font-bold mt-1">Professional Camera Mounting</div>
              </div>
            </div>
            <div className="p-4 space-y-2 text-xs">
              <div className="font-semibold text-white">04. CCTV, Alarms & Access Control</div>
              <p className="text-slate-400 leading-relaxed">
                Outdoor dome CCTV cameras, electric fencing with anti-tamper sirens, biometric turnstiles, and multi-channel Baofeng radio intercoms.
              </p>
            </div>
          </div>

          {/* Service 08: Dog Handler (K9 Unit Photo) */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
              <img 
                src={IMAGES.dogHandler} 
                alt="Bluestar Dog Handler with German Shepherd" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-600 font-bold uppercase">K9 CANINE OPS</span>
                <div className="text-sm font-bold mt-1">Trained Patrol Dog & Handler</div>
              </div>
            </div>
            <div className="p-4 space-y-2 text-xs">
              <div className="font-semibold text-white">08. K9 & Special Operations</div>
              <p className="text-slate-400 leading-relaxed">
                Trained German Shepherd guard dogs in branded tactical harness, handler patrols, emergency reinforcement, and perimeter deterrence.
              </p>
            </div>
          </div>

          {/* Tactical Radio & Searchlight Kit */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-950 flex items-center justify-center p-3">
              <img 
                src={IMAGES.radioComms} 
                alt="Tactical Radio Set" 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-600 font-bold uppercase">TACTICAL COMMS</span>
                <div className="text-sm font-bold mt-1">Multi-Channel Radio Transceivers</div>
              </div>
            </div>
            <div className="p-4 space-y-2 text-xs">
              <div className="font-semibold text-white">05 & 06. Investigations & Escort</div>
              <p className="text-slate-400 leading-relaxed">
                Multi-unit tactical transceivers with surveillance earpieces, searchlights for night recon, and valuable cargo transit escorts.
              </p>
            </div>
          </div>

        </div>

        {/* Detailed 8-Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-blue-600/50 transition-colors space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-blue-400">{service.number}.</span>
                  <h3 className="font-bold text-sm sm:text-base text-white">{service.title}</h3>
                </div>
                <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                  {service.category}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {service.description}
              </p>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Core Capabilities:
                </span>
                <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-300">
                  {service.capabilities.slice(0, 6).map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-1.5 truncate">
                      <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 text-xs text-slate-400">
          {COMPANY_DETAILS.legalDisclaimer}
        </div>
      </section>

      {/* 5. SECTORS WE SERVE */}
      <section className="space-y-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-1">
            04 // SECTOR DEPLOYMENT
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Sectors We Serve
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            "Security posture should fit the environment. Our planning begins with the site, the people and the operational risk."
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {SECTORS.map((sector, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/50 transition-colors space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono text-blue-400 font-bold">0{idx + 1}</div>
                <h4 className="font-bold text-sm text-white">{sector.name}</h4>
                <p className="text-[11px] text-slate-400 leading-snug mt-1">
                  {sector.threatProfile}
                </p>
              </div>
              <div className="text-[10px] text-blue-300 font-mono pt-2 border-t border-slate-800/80">
                {sector.keyServices[0]}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHY CHOOSE US (6 PILLARS) */}
      <section className="space-y-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-1">
            05 // THE BLUESTAR STANDARD
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Why Choose Bluestar
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Built on discipline, integrity, and controlled swift intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {CORE_PILLARS.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 relative overflow-hidden space-y-2"
            >
              <div className="text-[10px] font-mono text-blue-400 font-bold">PILLAR 0{idx + 1}</div>
              <h3 className="text-lg font-black text-white">{pillar.title}</h3>
              <div className="text-xs font-medium text-blue-300">{pillar.subtitle}</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CONTACT & DISPATCH CTA */}
      <section className="p-8 sm:p-12 rounded-3xl border border-blue-600/50 bg-gradient-to-b from-blue-950/40 via-slate-900 to-slate-950 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <div className="space-y-2 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Secure Your Facility or Operation Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Contact our Ndola Command Center for immediate site risk reviews, guard deployments, or rapid response coverage across Zambia.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white">
          <a href="tel:+260979728718" className="flex items-center gap-2 hover:text-blue-400 transition-colors font-bold">
            <Phone className="w-4 h-4 text-emerald-400" /> 0979 728 718
          </a>
          <span className="text-slate-600">|</span>
          <a href="tel:+260967991845" className="flex items-center gap-2 hover:text-blue-400 transition-colors font-bold">
            <Phone className="w-4 h-4 text-emerald-400" /> 0967 991 845
          </a>
          <span className="text-slate-600">|</span>
          <a href="mailto:bluestar.solutions@hotmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail className="w-4 h-4 text-sky-400" /> bluestar.solutions@hotmail.com
          </a>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onRequestQuote}
            className="px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/40 inline-flex items-center gap-2"
          >
            Submit Site Deployment Request <ChevronRight className="w-4 h-4" />
          </button>
          {onOpenPdfModal && (
            <button
              onClick={onOpenPdfModal}
              className="px-6 py-3 text-sm font-bold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all shadow-lg inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download Booklet PDF</span>
            </button>
          )}
        </div>
      </section>

    </div>
  );
};
