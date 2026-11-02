import React from 'react';
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Car, 
  Radio, 
  Search, 
  Building2, 
  Truck, 
  FileCheck, 
  ShieldAlert, 
  CheckCircle2, 
  Users, 
  Target, 
  Award, 
  Compass, 
  Clock, 
  AlertTriangle,
  UserCheck,
  EyeOff,
  Wrench,
  Dog,
  Crosshair,
  BadgeCheck,
  Lock,
  Layers,
  FileText,
  Scale,
  ChevronLeft
} from 'lucide-react';
import { 
  COMPANY_DETAILS, 
  IMAGES, 
  CORE_PILLARS, 
  SERVICES, 
  LEADERSHIP_SQUAD, 
  SECTORS,
  CORPORATE_POLICIES 
} from '../data/bookletData';
import { BookletTheme } from '../data/themes';

interface BookletPageProps {
  pageNumber: number;
  theme: BookletTheme;
  isPrintView?: boolean;
  onGoToFirstPage?: () => void;
  onOpenLegal?: (tab: 'privacy' | 'terms') => void;
}

export const BookletPageRenderer: React.FC<BookletPageProps> = ({ 
  pageNumber, 
  theme, 
  isPrintView = false,
  onGoToFirstPage,
  onOpenLegal
}) => {
  const isLight = !!theme.isLight;

  // High-contrast Theme Tokens to prevent invisible text in Executive Print White
  const textHead = isLight ? 'text-slate-950 font-black' : 'text-white font-bold';
  const textHeadMuted = isLight ? 'text-slate-900 font-bold' : 'text-slate-200 font-semibold';
  const textBody = isLight ? 'text-slate-950 font-semibold text-sm sm:text-base' : 'text-slate-300';
  const textMuted = isLight ? 'text-slate-900 font-bold text-xs sm:text-sm' : 'text-slate-400';
  const textBrand = isLight ? 'text-blue-950 font-black' : 'text-blue-400 font-bold';
  
  // Theme-aware cards & containers
  const cardBg = isLight ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-slate-900/80 border-slate-800 shadow-md';
  const cardBgPure = isLight ? 'bg-white border-slate-200/90 shadow-sm' : 'bg-slate-950/70 border-slate-800/80 shadow-inner';
  const cardHighlight = isLight ? 'bg-blue-50/80 border-blue-200 shadow-sm' : 'bg-blue-950/30 border-blue-900/60 shadow-md';
  const dividerColor = isLight ? 'border-slate-200' : 'border-slate-800';

  // Badges & pills
  const badgeBlue = isLight ? 'bg-blue-100 text-blue-950 border-blue-300 font-semibold' : 'bg-blue-950/70 text-blue-300 border-blue-800 font-semibold';
  const badgeAmber = isLight ? 'bg-amber-100 text-amber-950 border-amber-300 font-semibold' : 'bg-amber-950/70 text-amber-300 border-amber-800 font-semibold';
  const badgeSky = isLight ? 'bg-sky-100 text-sky-950 border-sky-300 font-semibold' : 'bg-sky-950/70 text-sky-300 border-sky-800 font-semibold';
  const badgeRose = isLight ? 'bg-rose-100 text-rose-950 border-rose-300 font-semibold' : 'bg-rose-950/70 text-rose-300 border-rose-800 font-semibold';

  // Running header
  const renderRunningHeader = (chapterTitle: string, sectionNumber: string) => (
    <div className={`flex items-center justify-between pb-3.5 mb-3 border-b ${theme.borderSubtle}`}>
      <div className="flex items-center gap-3">
        <img 
          src={IMAGES.shieldLogo} 
          alt="Bluestar Shield Crest" 
          className="w-8 h-8 object-contain drop-shadow"
        />
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold tracking-wider uppercase ${textBrand}`}>
            BLUESTAR SECURITY
          </span>
          <span className={`text-xs font-mono ${isLight ? 'text-slate-400' : 'text-slate-600'}`}>/</span>
          <span className={`text-xs font-semibold tracking-wide ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
            {chapterTitle}
          </span>
        </div>
      </div>
      <div className={`text-[11px] font-mono tracking-widest ${isLight ? 'text-slate-500 font-medium' : 'text-slate-400'}`}>
        SEC {sectionNumber} · DOC-BSS-2026
      </div>
    </div>
  );

  // Running footer - Updated to 12 pages
  const renderRunningFooter = (currPage: number) => (
    <div className={`mt-auto pt-3 border-t ${theme.borderSubtle} flex items-center justify-between text-[11px] font-mono ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
        <span className="font-semibold">NDOLA, COPPERBELT · REPUBLIC OF ZAMBIA</span>
      </div>
      <div className={`tracking-widest font-bold ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
        PAGE {String(currPage).padStart(2, '0')} OF 12
      </div>
    </div>
  );

  // Official Bluestar Shield Crest Watermark across all pages (visible enough, non-obstructive)
  const renderWatermark = () => (
    <div 
      className="absolute inset-0 pointer-events-none select-none z-0 flex items-center justify-center overflow-hidden" 
      aria-hidden="true"
    >
      <img
        src={IMAGES.shieldLogo}
        alt=""
        className={`w-72 h-72 sm:w-84 sm:h-84 md:w-[28rem] md:h-[28rem] object-contain transition-opacity duration-300 ${
          isLight ? 'opacity-[0.09] mix-blend-multiply' : 'opacity-[0.11]'
        }`}
      />
    </div>
  );

  const pageContainerClass = isPrintView 
    ? "booklet-page relative overflow-hidden flex flex-col justify-between" 
    : `relative overflow-hidden flex flex-col justify-between w-full h-full p-8 md:p-10 transition-colors duration-300 select-text`;

  switch (pageNumber) {
    // PAGE 1: CLASSIC COVER
    case 1:
      return (
        <div className={`${pageContainerClass} ${theme.bgPage} text-center justify-between`}>
          {renderWatermark()}
          {/* Subtle background security line patterns */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          {/* Top Docket Marking */}
          <div className={`w-full flex items-center justify-between text-[11px] font-mono tracking-widest ${isLight ? 'text-slate-600 border-slate-300' : 'text-slate-400 border-slate-800'} border-b pb-3`}>
            <span className="font-semibold">COPPERBELT HEADQUARTERS</span>
            <span className={`px-3 py-1 rounded border ${badgeBlue} font-bold`}>
              OFFICIAL COMPANY PROFILE DOSSIER
            </span>
            <span className="font-semibold">REPUBLIC OF ZAMBIA</span>
          </div>

          {/* Central Crest & Corporate Brand Seal */}
          <div className="my-auto flex flex-col items-center max-w-2xl mx-auto px-4 py-6">
            <div className="relative mb-6">
              <div className={`absolute -inset-6 rounded-full blur-2xl ${isLight ? 'bg-blue-600/15' : 'bg-blue-600/25'}`}></div>
              <div className={`relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl p-3 border ${cardBg} shadow-2xl flex items-center justify-center`}>
                <img 
                  src={IMAGES.shieldLogo} 
                  alt="Bluestar Shield Crest" 
                  className="w-full h-full object-contain filter drop-shadow-lg"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className={`inline-block px-3 py-0.5 text-[10px] font-mono tracking-widest uppercase rounded border ${badgeBlue}`}>
                Command & Operational Precision
              </div>
              
              <h1 className={`text-3xl sm:text-4xl font-black tracking-tight leading-tight ${textHead}`}>
                BLUE STAR SECURITY
                <span className={`block font-light text-xl sm:text-2xl mt-0.5 ${isLight ? 'text-blue-900 font-bold' : 'text-blue-400'}`}>
                  SOLUTIONS LIMITED
                </span>
              </h1>

              <p className={`text-sm sm:text-base italic font-semibold tracking-wide ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                (Command experience. Civilian precision.)
              </p>

              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto my-2"></div>

              <p className={`text-[13px] sm:text-sm ${textBody} max-w-lg mx-auto leading-relaxed`}>
                Disciplined security personnel, structured operational procedures, threat assessment, and modern security technology providing tailored protection across Zambia.
              </p>
            </div>
          </div>

          {/* Incorporation Legal Statement Banner */}
          <div className={`max-w-xl mx-auto px-5 py-3 mb-4 text-xs sm:text-sm font-bold leading-relaxed ${isLight ? 'text-slate-950 bg-white border-slate-300 shadow-md' : 'text-slate-100 bg-slate-900/90 border-slate-700 shadow-lg'} rounded-xl border font-sans`}>
            {COMPANY_DETAILS.incorporationStatement}
          </div>

          {/* Bottom Docket Footer */}
          <div className={`w-full pt-3 border-t ${isLight ? 'border-slate-300' : 'border-slate-800'} flex flex-col sm:flex-row items-center justify-between text-xs gap-3`}>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="font-semibold">Ndola, Copperbelt Province · Zambia</span>
            </div>
            <div className={`text-[11px] font-mono tracking-wider font-bold ${textBrand}`}>
              NATIONWIDE OPERATIONAL DEPLOYMENT
            </div>
            <div className={`flex items-center gap-2 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="font-semibold">0979 728 718 · 0967 991 845</span>
            </div>
          </div>
        </div>
      );

    // PAGE 2: ABOUT, MISSION & VISION
    case 2:
      return (
        <div className={`${pageContainerClass} ${theme.bgPage}`}>
          {renderWatermark()}
          {renderRunningHeader("EXECUTIVE MANDATE & COMPANY OVERVIEW", "01")}
          
          <div className="flex-1 flex flex-col justify-between py-2 space-y-4">
            
            {/* Header Block */}
            <div>
              <span className={`text-xs font-mono tracking-widest uppercase ${textBrand} block mb-1`}>
                ABOUT BLUESTAR
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${textHead}`}>
                Command Experience. Civilian Precision.
              </h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1">
              
              {/* Left Column: About & Operational Doctrine */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-3.5">
                <div className={`p-6 rounded-2xl border ${cardBg} space-y-3.5`}>
                  <p className={`text-sm sm:text-base ${textBody} leading-relaxed`}>
                    <strong className={textHead}>Bluestar Security Solutions Limited</strong> is a Zambian-based security solutions company headquartered in Ndola, Copperbelt Province, with the capability to deploy security personnel and solutions across Zambia.
                  </p>
                  <p className={`text-xs sm:text-sm ${textBody} leading-relaxed`}>
                    The company combines disciplined personnel, structured operational procedures, threat assessment and modern security technology to provide tailored protection for businesses, infrastructure, property, events and individuals.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${cardHighlight} space-y-1.5`}>
                  <span className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-blue-900' : 'text-blue-300'} flex items-center gap-2`}>
                    <Target className="w-4 h-4 text-blue-600" /> Operational Doctrine
                  </span>
                  <p className={`text-xs ${textBody} leading-relaxed`}>
                    Security posture should fit the environment. Our planning begins with the site, the people, and the operational risk — tailored for zero compromise.
                  </p>
                </div>
              </div>

              {/* Right Column: Mission & Vision Cards */}
              <div className="lg:col-span-4 flex flex-col justify-between gap-3.5">
                {/* Mission Card */}
                <div className={`flex-1 p-5 rounded-2xl border ${cardBg} relative overflow-hidden flex flex-col justify-center`}>
                  <div className="w-1.5 h-full bg-blue-600 absolute left-0 top-0"></div>
                  <div className="pl-3 space-y-2">
                    <div className={`flex items-center gap-2 font-bold text-xs uppercase tracking-wider ${isLight ? 'text-blue-900' : 'text-blue-400'}`}>
                      <Compass className="w-4 h-4" /> OUR MISSION
                    </div>
                    <p className={`text-xs sm:text-sm ${textBody} leading-relaxed`}>
                      {COMPANY_DETAILS.mission}
                    </p>
                  </div>
                </div>

                {/* Vision Card */}
                <div className={`flex-1 p-5 rounded-2xl border ${cardBg} relative overflow-hidden flex flex-col justify-center`}>
                  <div className="w-1.5 h-full bg-sky-500 absolute left-0 top-0"></div>
                  <div className="pl-3 space-y-2">
                    <div className={`flex items-center gap-2 font-bold text-xs uppercase tracking-wider ${isLight ? 'text-sky-800' : 'text-sky-300'}`}>
                      <Award className="w-4 h-4" /> OUR VISION
                    </div>
                    <p className={`text-xs sm:text-sm ${textBody} leading-relaxed`}>
                      {COMPANY_DETAILS.vision}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* 4 Pillars of Architecture (spread out generously at bottom) */}
            <div className={`p-4 rounded-2xl border ${cardBgPure}`}>
              <span className={`text-xs font-mono uppercase tracking-widest ${textBrand} block mb-3 font-bold`}>
                FOUR PILLARS OF OUR DEFENSIVE ARCHITECTURE
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Disciplined Personnel", detail: "Vetted guards with continuous tactical drill and readiness" },
                  { label: "Structured SOPs", detail: "Transparent post protocols and rigorous gate registers" },
                  { label: "Threat Assessment", detail: "Dynamic audits tailored to site-specific environmental risk" },
                  { label: "Modern Technology", detail: "IP CCTV, tactical UHF comms & motorized rapid response" },
                ].map((item, idx) => (
                  <div key={idx} className={`p-3 rounded-xl border ${dividerColor} ${isLight ? 'bg-white shadow-xs' : 'bg-slate-900/50'}`}>
                    <span className="text-blue-600 font-mono text-xs font-bold block mb-1">0{idx + 1}.</span>
                    <div className={`font-bold text-xs sm:text-sm ${textHead} mb-1`}>{item.label}</div>
                    <div className={`text-[11px] ${textMuted} leading-tight`}>{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          {renderRunningFooter(2)}
        </div>
      );

    // PAGE 3: DIRECTORS / COMMAND SQUAD
    case 3:
      return (
        <div className={`${pageContainerClass} ${theme.bgPage}`}>
          {renderWatermark()}
          {renderRunningHeader("GOVERNANCE & EXECUTIVE SQUAD", "02")}
          
          <div className="flex-1 flex flex-col justify-between py-2 space-y-4">
            
            {/* Header Block */}
            <div>
              <span className={`text-xs font-mono tracking-widest uppercase ${textBrand} block mb-1`}>
                DIRECTORS & COMMAND SQUAD
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${textHead}`}>
                Leadership with Field-Tested & Commercial Precision
              </h2>
            </div>

            {/* Top 2 Primary Directors Grid: Kelvin Akapelwa & Ronald Mwanza */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* 1. KELVIN AKAPELWA (CLEAN PHOTO, NO TAG OVERLAY) */}
              <div className={`p-4 sm:p-5 rounded-2xl border ${cardBg} flex gap-4 items-center`}>
                <div className={`relative w-28 h-36 sm:w-32 sm:h-40 shrink-0 rounded-xl overflow-hidden border ${isLight ? 'border-slate-300' : 'border-blue-500/40'} bg-slate-950 shadow-md`}>
                  <img 
                    src={IMAGES.kelvinAkapelwa} 
                    alt="Kelvin Akapelwa" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="space-y-1.5 flex-1">
                  <span className={`px-2 py-0.5 text-[10px] font-mono uppercase rounded ${badgeBlue}`}>
                    OPERATIONS & TRAINING
                  </span>
                  <h3 className={`text-base sm:text-lg font-black leading-tight ${textHead}`}>
                    KELVIN AKAPELWA
                  </h3>
                  <div className={`text-xs font-bold ${textBrand}`}>
                    Director - Operations & Training 
                    <span className={`block text-[11px] font-medium ${textMuted}`}>(Former Army Officer)</span>
                  </div>
                  <p className={`text-xs ${textBody} leading-relaxed`}>
                    Instills command-grade operational rigor, structured guard drills, strict post discipline, and swift field intervention across all assignments.
                  </p>
                </div>
              </div>

              {/* 2. RONALD MWANZA (CLEAN PHOTO, NO TAG OVERLAY) */}
              <div className={`p-4 sm:p-5 rounded-2xl border ${cardBg} flex gap-4 items-center`}>
                <div className={`relative w-28 h-36 sm:w-32 sm:h-40 shrink-0 rounded-xl overflow-hidden border ${isLight ? 'border-slate-300' : 'border-slate-700'} bg-slate-950 shadow-md`}>
                  <img 
                    src={IMAGES.ronaldMwanza} 
                    alt="Ronald Mwanza" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="space-y-1.5 flex-1">
                  <span className={`px-2 py-0.5 text-[10px] font-mono uppercase rounded ${badgeAmber}`}>
                    FINANCE & STRATEGY
                  </span>
                  <h3 className={`text-base sm:text-lg font-black leading-tight ${textHead}`}>
                    RONALD MWANZA
                  </h3>
                  <div className={`text-xs font-bold ${isLight ? 'text-amber-900' : 'text-amber-400'}`}>
                    Director - Finance & Marketing
                  </div>
                  <p className={`text-xs ${textBody} leading-relaxed`}>
                    Steers corporate governance, capital stewardship, strategic marketing partnerships, and nationwide deployment operations across Zambia.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom 3 Officers: Chipo Mulenga, Martin Mulenga, Simon Mwiinga */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              
              {/* 3. CHIPO MULENGA */}
              <div className={`p-4 rounded-xl border ${cardBg} flex flex-col justify-between space-y-2.5`}>
                <div className="flex gap-3 items-center">
                  <div className={`relative w-16 h-20 shrink-0 rounded-lg overflow-hidden border ${isLight ? 'border-slate-300' : 'border-slate-700'} bg-slate-950 shadow-sm`}>
                    <img 
                      src={IMAGES.chipoMulenga} 
                      alt="Chipo Mulenga" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm sm:text-base ${textHead}`}>CHIPO MULENGA</h4>
                    <div className={`text-xs font-semibold ${textBrand}`}>HR and Liaison Officer</div>
                    <div className={`text-[10px] font-mono ${textMuted} mt-0.5`}>Tag: CHIPO MULENGA HR Officer</div>
                  </div>
                </div>
                <p className={`text-xs ${textBody} leading-relaxed`}>
                  Oversees rigorous personnel background vetting, legal compliance, guard welfare, and institutional liaison with Zambian authorities.
                </p>
              </div>

              {/* 4. JOSEPH NGIMBU */}
              <div className={`p-4 rounded-xl border ${cardBg} flex flex-col justify-between space-y-2.5`}>
                <div className="flex gap-3 items-center">
                  <div className={`relative w-16 h-20 shrink-0 rounded-lg overflow-hidden border ${isLight ? 'border-slate-300' : 'border-slate-700'} bg-slate-950 shadow-sm`}>
                    <img 
                      src={IMAGES.josephNgimbu} 
                      alt="JOSEPH NGIMBU" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm sm:text-base ${textHead}`}>JOSEPH NGIMBU</h4>
                    <div className={`text-xs font-semibold ${textBrand}`}>Supervisor Operations Dept</div>
                    <div className={`text-[10px] font-mono ${isLight ? 'text-amber-800' : 'text-amber-300'} font-semibold mt-0.5`}>Tag: Field Supervisor</div>
                  </div>
                </div>
                <p className={`text-xs ${textBody} leading-relaxed`}>
                  Commands frontline post inspections, field supervisor patrols, shift handovers, and strict adherence to client standing orders.
                </p>
              </div>

              {/* 5. SIMON MWIINGA (AVATAR ICON FOR SENSITIVE POST) */}
              <div className={`p-4 rounded-xl border ${cardBg} flex flex-col justify-between space-y-2.5 relative overflow-hidden`}>
                <div className="flex gap-3 items-center">
                  <div className={`relative w-16 h-20 shrink-0 rounded-lg overflow-hidden border ${isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/40 bg-neutral-950'} flex flex-col items-center justify-center text-amber-500 shadow-sm`}>
                    <EyeOff className="w-7 h-7 mb-0.5 opacity-90" />
                    <span className="text-[7px] font-mono uppercase tracking-widest font-bold">CONFIDENTIAL</span>
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm sm:text-base ${textHead} flex items-center gap-1.5`}>
                      Simon Mwiinga
                      <span className={`px-1.5 py-0.2 rounded text-[9px] font-mono ${badgeAmber}`}>
                        Operative
                      </span>
                    </h4>
                    <div className={`text-xs font-semibold ${isLight ? 'text-amber-900' : 'text-amber-300'}`}>Investigations Officer</div>
                    <div className={`text-[10px] font-mono ${textMuted} mt-0.5`}>Identity Guarded · Sensitive Post</div>
                  </div>
                </div>
                <p className={`text-xs ${textBody} leading-relaxed`}>
                  Directs internal corporate enquiries, asset tracing, and lawful evidence preservation. Operative visual identity is tactically classified.
                </p>
              </div>

            </div>

            {/* Command Hierarchy Footer Strip */}
            <div className={`p-3.5 rounded-xl border ${cardBgPure} flex items-center justify-between text-xs`}>
              <span className={textBody}>
                <strong>Chain of Command:</strong> Executive Directors &gt; Operations Directorate &gt; Field Supervisors &gt; Site Guard Posts
              </span>
              <span className={`font-mono ${textBrand} font-bold`}>100% Zambian Leadership</span>
            </div>

          </div>
          {renderRunningFooter(3)}
        </div>
      );

    // PAGE 4: GUARDING & ACCESS CONTROL (FILLED OUT COMPLETELY WITH IMAGERY)
    case 4:
      return (
        <div className={`${pageContainerClass} ${theme.bgPage}`}>
          {renderWatermark()}
          {renderRunningHeader("CORE SERVICES: PHYSICAL SECURITY", "03")}
          
          <div className="flex-1 flex flex-col justify-between py-2 space-y-4">
            
            {/* Header Block */}
            <div>
              <span className={`text-xs font-mono tracking-widest uppercase ${textBrand} block mb-1`}>
                SERVICES 01 & 02 · HEAVY INDUSTRY & ACCESS CONTROL
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${textHead}`}>
                Guarding Precision & Gatehouse Access Control
              </h2>
            </div>

            {/* 2 Expansive Columns filling the page */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 items-stretch">
              
              {/* Service 01: Regular & Armed Guarding with Mining Pit Photo */}
              <div className={`p-5 rounded-2xl border ${cardBg} flex flex-col justify-between space-y-4`}>
                <div className="space-y-3">
                  {/* Photo Banner */}
                  <div className="relative h-56 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-md">
                    <img 
                      src={IMAGES.armedGuardMining} 
                      alt="Armed Guard at Mining Pit" 
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 text-[10px] font-mono uppercase rounded-full ${badgeBlue} shadow-md`}>
                        MINING & HEAVY ASSETS
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold ${textHead}`}>
                      01. Regular & Armed Guarding
                    </h3>
                    <p className={`text-xs sm:text-sm ${textBody} mt-1 leading-relaxed`}>
                      Static guarding, access control, gatehouses, visitor registers, key control, and licensed armed security for high-risk extraction sites and industrial premises.
                    </p>
                  </div>
                </div>

                {/* Capabilities Checklist */}
                <div className={`p-3.5 rounded-xl border ${cardBgPure} space-y-1.5`}>
                  <div className={`text-xs font-bold uppercase tracking-wider ${textBrand}`}>
                    Operational Capabilities:
                  </div>
                  <ul className={`text-xs ${textBody} space-y-1`}>
                    {[
                      "Static guarding & 24/7 perimeter perimeter watch",
                      "Mining site extraction pit & equipment protection",
                      "Gatehouse access control & visitor register logging",
                      "Key control & formal incident documentation",
                      "Armed security where legally authorized"
                    ].map((cap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service CTA */}
                <button 
                  onClick={() => window.location.href='tel:+260979728718'}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] ${isLight ? 'bg-slate-900 text-white shadow-md' : 'bg-blue-600 text-white shadow-lg'}`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  Contact Operations Desk
                </button>
              </div>

              {/* Service 02: Access Control with Gate 3 Photo */}
              <div className={`p-5 rounded-2xl border ${cardBg} flex flex-col justify-between space-y-4`}>
                <div className="space-y-3">
                  {/* Photo Banner */}
                  <div className="relative h-56 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-md">
                    <img 
                      src={IMAGES.accessControlGuards} 
                      alt="Gate 3 Access Control Guards" 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 text-[10px] font-mono uppercase rounded-full ${badgeSky} shadow-md`}>
                        GATEHOUSE & CORRIDORS
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold ${textHead}`}>
                      02. Residential & Commercial Security
                    </h3>
                    <p className={`text-xs sm:text-sm ${textBody} mt-1 leading-relaxed`}>
                      Perimeter control, entry barrier operation, visitor identification procedures, guard shift deployment, and customized security standing orders.
                    </p>
                  </div>
                </div>

                {/* Capabilities Checklist */}
                <div className={`p-3.5 rounded-xl border ${cardBgPure} space-y-1.5`}>
                  <div className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-sky-900' : 'text-sky-300'}`}>
                    Operational Capabilities:
                  </div>
                  <ul className={`text-xs ${textBody} space-y-1`}>
                    {[
                      "Perimeter control & barrier management",
                      "Gate 3 visitor logging & badge registration",
                      "Commercial campus & corporate office watch",
                      "Logistics warehouses & construction sites",
                      "Site-specific security protocol enforcement"
                    ].map((cap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service CTA */}
                <button 
                  onClick={() => window.location.href='tel:+260979728718'}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] ${isLight ? 'bg-slate-900 text-white shadow-md' : 'bg-blue-600 text-white shadow-lg'}`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  Request for a Quote
                </button>
              </div>

            </div>

            {/* Statutory Compliance Footer Strip */}
            <div className={`p-3 rounded-xl border ${cardBgPure} text-xs ${textMuted}`}>
              * All deployments are subject to operational requirements, applicable Zambian laws, and licensing conditions. Armed security where legally authorized.
            </div>

          </div>
          {renderRunningFooter(4)}
        </div>
      );

    // PAGE 5: MOBILE PATROL & RAPID RESPONSE (EXPANDED TO FILL FULL HEIGHT)
    case 5:
      return (
        <div className={`${pageContainerClass} ${theme.bgPage}`}>
          {renderWatermark()}
          {renderRunningHeader("TACTICAL RESPONSE & MOBILE FLEET", "04")}
          
          <div className="flex-1 flex flex-col justify-between py-2 space-y-4">
            
            {/* Header Block */}
            <div>
              <span className={`text-xs font-mono tracking-widest uppercase ${textBrand} block mb-1`}>
                SERVICE 03 · OPERATIONAL MOBILITY
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${textHead}`}>
                Visible Deterrence & Decisive Rapid Intervention
              </h2>
            </div>

            {/* Hero Patrol Showcase (Spans across page) */}
            <div className={`p-5 rounded-2xl border ${cardBg} flex flex-col md:flex-row gap-5 items-center`}>
              <div className="relative w-full md:w-3/5 h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-lg">
                <img 
                  src={IMAGES.patrolCarRear} 
                  alt="Patrol Car at Zambia Commercial Park" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 text-[10px] font-mono uppercase rounded-full ${badgeBlue} shadow-md`}>
                    RAPID RESPONSE FLEET
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 text-white bg-black/75 px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-xs">
                  Bluestar Patrol Vehicle at Zambia Commercial Park
                </div>
              </div>

              <div className="w-full md:w-2/5 flex flex-col justify-between space-y-3.5">
                <div className="space-y-2">
                  <span className={`text-xs font-mono font-bold uppercase ${textBrand}`}>
                    COPPERBELT PATROL SECTORS
                  </span>
                  <h3 className={`text-xl font-bold ${textHead}`}>
                    Dedicated Mobile Response Cruisers
                  </h3>
                  <p className={`text-xs sm:text-sm ${textBody} leading-relaxed`}>
                    Equipped with high-visibility corporate livery, amber emergency beacons, dual VHF comms, and trained rapid intervention crews stationed across commercial hubs.
                  </p>
                </div>

                <div className={`p-3.5 rounded-xl border ${cardBgPure} space-y-2 text-xs`}>
                  <div className={`font-bold ${textHead}`}>Fleet Response Specifications:</div>
                  <div className={`flex items-center justify-between ${textBody}`}>
                    <span>Coverage Range:</span>
                    <span className="font-mono font-bold text-blue-600">Ndola & Copperbelt</span>
                  </div>
                  <div className={`flex items-center justify-between ${textBody}`}>
                    <span>Operational Duty:</span>
                    <span className="font-mono font-bold text-blue-600">24/7/365 Non-Stop</span>
                  </div>
                  <div className={`flex items-center justify-between ${textBody}`}>
                    <span>Dispatch Mode:</span>
                    <span className="font-mono font-bold text-blue-600">Encrypted VHF Comms</span>
                  </div>
                </div>

                {/* Service CTA */}
                <button 
                  onClick={() => window.location.href='tel:+260979728718'}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] ${isLight ? 'bg-slate-900 text-white shadow-md' : 'bg-blue-600 text-white shadow-lg'}`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  Contact Operations Desk
                </button>
              </div>
            </div>

            {/* 3 Operational Capability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              
              <div className={`p-4 rounded-xl border ${cardBg} space-y-2`}>
                <div className={`flex items-center gap-2 font-bold text-sm ${textHead}`}>
                  <Clock className="w-4 h-4 text-blue-600" />
                  Scheduled Night Patrols
                </div>
                <p className={`text-xs ${textBody} leading-relaxed`}>
                  Randomized sweeps and perimeter drive-bys providing high visual deterrence against trespassers and thieves.
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${cardBg} space-y-2`}>
                <div className={`flex items-center gap-2 font-bold text-sm ${textHead}`}>
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Alarm & Panic Response
                </div>
                <p className={`text-xs ${textBody} leading-relaxed`}>
                  Prompt motorized dispatch upon electric fence trips, silent panic triggers, or security post distress calls.
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${cardBg} space-y-2`}>
                <div className={`flex items-center gap-2 font-bold text-sm ${textHead}`}>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Operational Site Backup
                </div>
                <p className={`text-xs ${textBody} leading-relaxed`}>
                  Reinforces static guard posts during shift changes, high-risk cargo deliveries, and emergent site incidents.
                </p>
              </div>

            </div>

            {/* Typical Applications Footer Strip */}
            <div className={`p-3.5 rounded-xl border ${cardBgPure} flex flex-wrap items-center justify-between text-xs`}>
              <span className={textBody}>
                <strong>Typical Applications:</strong> Distributed mining sites, estates, commercial corridors, industrial zones
              </span>
              <span className={`font-mono ${textBrand} font-bold`}>Ndola Command Base Dispatch</span>
            </div>

          </div>
          {renderRunningFooter(5)}
        </div>
      );

    // PAGE 6: CCTV, ALARMS & TACTICAL COMMS
    case 6:
      return (
        <div className={`${pageContainerClass} ${theme.bgPage}`}>
          {renderWatermark()}
          {renderRunningHeader("ELECTRONIC SECURITY & COMMUNICATIONS", "05")}
          
          <div className="flex-1 flex flex-col justify-between py-2 space-y-4">
            
            {/* Header Block */}
            <div>
              <span className={`text-xs font-mono tracking-widest uppercase ${textBrand} block mb-1`}>
                SERVICE 04 · ELECTRONIC PROTECTION & COMMS
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${textHead}`}>
                CCTV Surveillance, Access Control & Tactical Radios
              </h2>
            </div>

            {/* Dual Visual Showcase: CCTV Installer & Baofeng Radios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className={`p-4 rounded-2xl border ${cardBg} space-y-3`}>
                <div className="relative h-56 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-md">
                  <img 
                    src={IMAGES.cctvInstaller} 
                    alt="CCTV Installation Technician" 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 text-[10px] font-mono uppercase rounded-full ${badgeBlue} shadow-md`}>
                      CCTV INSTALLATION
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className={`font-bold text-sm sm:text-base ${textHead}`}>Certified Electronic Installation</h4>
                  <p className={`text-xs ${textBody} leading-relaxed mt-0.5`}>
                    Mounting, wiring, and commissioning outdoor dome cameras, beam sensors, and electrified perimeter fencing.
                  </p>
                </div>
                <button 
                  onClick={() => window.location.href='tel:+260979728718'}
                  className={`w-full py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${isLight ? 'bg-slate-900 text-white' : 'bg-blue-600 text-white'}`}
                >
                  <Phone className="w-3 h-3" />
                  Contact Operations
                </button>
              </div>

              <div className={`p-4 rounded-2xl border ${cardBg} space-y-3`}>
                <div className="relative h-56 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-md">
                  <img 
                    src={IMAGES.radioComms} 
                    alt="Baofeng Radios" 
                    className="w-full h-full object-contain p-2 bg-slate-950"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 text-[10px] font-mono uppercase rounded-full ${badgeAmber} shadow-md`}>
                      TACTICAL COMMS
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className={`font-bold text-sm sm:text-base ${textHead}`}>Encrypted Radio Intercom Fleet</h4>
                  <p className={`text-xs ${textBody} leading-relaxed mt-0.5`}>
                    Multi-channel Baofeng transceivers with acoustic-tube headsets ensuring instantaneous base-to-guard coordination.
                  </p>
                </div>
                <button 
                  onClick={() => window.location.href='tel:+260979728718'}
                  className={`w-full py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${isLight ? 'bg-slate-900 text-white' : 'bg-blue-600 text-white'}`}
                >
                  <Phone className="w-3 h-3" />
                  Request Quote
                </button>
              </div>

            </div>

            {/* 4 Electronic Capabilities Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { title: "IP CCTV Surveillance", desc: "High-definition day/night infrared cameras and recording servers" },
                { title: "Electric Fencing", desc: "Anti-climb electrified perimeter barriers with tamper alarms" },
                { title: "Biometric Access", desc: "Turnstiles, badge scanners, and biometric entry logging" },
                { title: "24/7 Monitoring", desc: "Round-the-clock alarm verification and dispatch coordination" },
              ].map((sys, idx) => (
                <div key={idx} className={`p-3.5 rounded-xl border ${cardBgPure}`}>
                  <div className={`font-bold text-xs sm:text-sm ${textHead} mb-1`}>{sys.title}</div>
                  <div className={`text-[11px] ${textMuted} leading-tight`}>{sys.desc}</div>
                </div>
              ))}
            </div>

            {/* Footer Strip */}
            <div className={`p-3.5 rounded-xl border ${cardBgPure} flex items-center justify-between text-xs`}>
              <span className={textBody}>
                <strong>Integration:</strong> All electronic systems integrate directly with physical guard posts and mobile response.
              </span>
              <span className={`font-mono ${textBrand} font-bold`}>Zero Blindspots</span>
            </div>

          </div>
          {renderRunningFooter(6)}
        </div>
      );

    // PAGE 7: K9 CANINE & SPECIALIST OPERATIONS
    case 7:
      return (
        <div className={`${pageContainerClass} ${theme.bgPage}`}>
          {renderWatermark()}
          {renderRunningHeader("SPECIALIST OPERATIONS & CANINE UNITS", "06")}
          
          <div className="flex-1 flex flex-col justify-between py-2 space-y-4">
            
            {/* Header Block */}
            <div>
              <span className={`text-xs font-mono tracking-widest uppercase ${textBrand} block mb-1`}>
                SERVICES 05, 06, 07 & 08 · SPECIALIST DIVISIONS
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${textHead}`}>
                Canine Units, Transit Escort, Investigations & Risk Advisory
              </h2>
            </div>

            {/* Dual Visual Showcase: Dog Handler + Searchlight / Escort */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className={`p-4 rounded-2xl border ${cardBg} flex flex-col justify-between space-y-3`}>
                <div className="space-y-3">
                  <div className="relative h-56 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-md">
                    <img 
                      src={IMAGES.dogHandler} 
                      alt="Dog Handler with German Shepherd" 
                      className="w-full h-full object-cover object-[center_20%]"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 text-[10px] font-mono uppercase rounded-full ${badgeRose} shadow-md`}>
                        K9 CANINE OPS
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm sm:text-base ${textHead}`}>08. K9 & Special Operations</h4>
                    <p className={`text-xs ${textBody} leading-relaxed mt-0.5`}>
                      Trained German Shepherd guard dogs in branded tactical harnesses with certified handlers for compound containment.
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => window.location.href='tel:+260979728718'}
                  className={`w-full py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${isLight ? 'bg-slate-900 text-white' : 'bg-blue-600 text-white'}`}
                >
                  <Phone className="w-3 h-3" />
                  Contact Operations Desk
                </button>
              </div>

              <div className={`p-4 rounded-2xl border ${cardBg} flex flex-col justify-between space-y-3`}>
                <div className="space-y-3">
                  <div className="relative h-56 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-md">
                    <img 
                      src={IMAGES.patrolCarSide} 
                      alt="Escort & Convoy Patrol Vehicle" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 text-[10px] font-mono uppercase rounded-full ${badgeBlue} shadow-md`}>
                        CONVOY & TRANSIT ESCORT
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm sm:text-base ${textHead}`}>06. Escort & Convoy Logistics</h4>
                    <p className={`text-xs ${textBody} leading-relaxed mt-0.5`}>
                      High-visibility marked response vehicles providing armed escort for copper, mineral cargo, and executive transit across Zambia.
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => window.location.href='tel:+260979728718'}
                  className={`w-full py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${isLight ? 'bg-slate-900 text-white' : 'bg-blue-600 text-white'}`}
                >
                  <Phone className="w-3 h-3" />
                  Request for a Quote
                </button>
              </div>

            </div>

            {/* 3 Additional Specialist Divisions Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              
              <div className={`p-4 rounded-xl border ${cardBg} flex flex-col justify-between space-y-2`}>
                <div>
                  <div className={`flex items-center gap-2 font-bold text-sm ${textHead}`}>
                    <Truck className="w-4 h-4 text-blue-600" />
                    06. Events & Transit
                  </div>
                  <p className={`text-[11px] ${textBody} leading-relaxed`}>
                    Valuable cargo & copper transit escort, VIP dignitary protection, and convoy security.
                  </p>
                </div>
                <button 
                  onClick={() => window.location.href='tel:+260979728718'}
                  className={`w-full py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all mt-2 ${isLight ? 'bg-slate-800 text-white' : 'bg-blue-600 text-white'}`}
                >
                  Contact
                </button>
              </div>

              <div className={`p-4 rounded-xl border ${cardBg} flex flex-col justify-between space-y-2`}>
                <div>
                  <div className={`flex items-center gap-2 font-bold text-sm ${textHead}`}>
                    <Search className="w-4 h-4 text-amber-600" />
                    05. Investigations
                  </div>
                  <p className={`text-[11px] ${textBody} leading-relaxed`}>
                    Information gathering, asset tracing, and lawful court-admissible evidence custody.
                  </p>
                </div>
                <button 
                  onClick={() => window.location.href='tel:+260979728718'}
                  className={`w-full py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all mt-2 ${isLight ? 'bg-slate-800 text-white' : 'bg-blue-600 text-white'}`}
                >
                  Inquire
                </button>
              </div>

              <div className={`p-4 rounded-xl border ${cardBg} flex flex-col justify-between space-y-2`}>
                <div>
                  <div className={`flex items-center gap-2 font-bold text-sm ${textHead}`}>
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    07. Risk Advisory
                  </div>
                  <p className={`text-[11px] ${textBody} leading-relaxed`}>
                    Site vulnerability audits, threat exposure profiling, and emergency SOP development.
                  </p>
                </div>
                <button 
                  onClick={() => window.location.href='tel:+260979728718'}
                  className={`w-full py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all mt-2 ${isLight ? 'bg-slate-800 text-white' : 'bg-blue-600 text-white'}`}
                >
                  Quote
                </button>
              </div>

            </div>

            {/* Footer Notice */}
            <div className={`p-3 rounded-xl border ${cardBgPure} text-xs ${textMuted}`}>
              * Note: Deployments subject to operational requirements, available resources, and applicable Zambian laws. Services do not imply armed services or statutory police powers.
            </div>

          </div>
          {renderRunningFooter(7)}
        </div>
      );

    // PAGE 8: SECTORS WE SERVE MATRIX
    case 8:
      return (
        <div className={`${pageContainerClass} ${theme.bgPage}`}>
          {renderWatermark()}
          {renderRunningHeader("INDUSTRY MATRICES & APPLICATIONS", "07")}
          
          <div className="flex-1 flex flex-col justify-between py-2 space-y-4">
            
            {/* Header Block */}
            <div>
              <span className={`text-xs font-mono tracking-widest uppercase ${textBrand} block mb-1`}>
                SECTOR-SPECIFIC SECURITY
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${textHead}`}>
                Tailored Protection for Zambia&apos;s Economic Sectors
              </h2>
            </div>

            {/* 8 Sector Cards Grid (2x4) filling height */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 flex-1">
              {SECTORS.map((sector, idx) => (
                <div key={idx} className={`p-4 rounded-xl border ${cardBg} flex flex-col justify-between space-y-2.5`}>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-blue-600 font-mono text-xs font-bold">0{idx + 1}.</span>
                      <span className={`text-[9px] font-mono uppercase px-1.5 py-0.2 rounded ${badgeBlue}`}>ZAMBIA</span>
                    </div>
                    <h4 className={`font-bold text-sm ${textHead}`}>{sector.name}</h4>
                    <p className={`text-[11px] ${textMuted} leading-tight mt-1`}>
                      {sector.threatProfile}
                    </p>
                  </div>

                  <div className={`pt-2 border-t ${dividerColor}`}>
                    <div className={`text-[10px] font-mono font-bold ${textBrand} mb-1`}>KEY SERVICES:</div>
                    <ul className={`text-[11px] ${textBody} space-y-0.5`}>
                      {sector.keyServices.slice(0, 3).map((svc, i) => (
                        <li key={i} className="truncate">• {svc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Nationwide Reach Footer Strip */}
            <div className={`p-3.5 rounded-xl border ${cardBgPure} flex items-center justify-between text-xs`}>
              <span className={textBody}>
                <strong>Zambian Reach:</strong> Deployed across Copperbelt, Lusaka, North-Western, Central, and all national provinces.
              </span>
              <span className={`font-mono ${textBrand} font-bold`}>All 10 Provinces</span>
            </div>

          </div>
          {renderRunningFooter(8)}
        </div>
      );

    // PAGE 9: THE BLUESTAR STANDARD & QA
    case 9:
      return (
        <div className={`${pageContainerClass} ${theme.bgPage}`}>
          {renderWatermark()}
          {renderRunningHeader("OPERATIONAL STANDARDS & QUALITY ASSURANCE", "08")}
          
          <div className="flex-1 flex flex-col justify-between py-2 space-y-4">
            
            {/* Header Block */}
            <div>
              <span className={`text-xs font-mono tracking-widest uppercase ${textBrand} block mb-1`}>
                THE BLUESTAR STANDARD
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${textHead}`}>
                6 Foundational Pillars & Uncompromising QA
              </h2>
            </div>

            {/* 6 Core Pillars Grid (2x3) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 flex-1">
              {CORE_PILLARS.map((pillar, idx) => (
                <div key={idx} className={`p-4 rounded-xl border ${cardBg} flex flex-col justify-between space-y-2`}>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-blue-600 font-mono text-xs font-bold">PILLAR 0{idx + 1}</span>
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                    </div>
                    <h4 className={`font-bold text-base ${textHead}`}>{pillar.title}</h4>
                    <div className={`text-xs font-semibold ${textBrand} mb-1.5`}>{pillar.subtitle}</div>
                    <p className={`text-xs ${textBody} leading-relaxed`}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 4-Tier Guard Vetting & QA Process Banner */}
            <div className={`p-4 rounded-2xl border ${cardHighlight}`}>
              <div className={`text-xs font-mono uppercase tracking-wider ${isLight ? 'text-blue-900' : 'text-blue-300'} font-bold mb-2.5 flex items-center gap-2`}>
                <BadgeCheck className="w-4 h-4 text-blue-600" />
                FOUR-TIER PERSONNEL VETTING & QUALITY ASSURANCE
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { step: "Tier 1: Police Clearance", desc: "Criminal record & fingerprint background check" },
                  { step: "Tier 2: Command Check", desc: "Vetting of tactical service and discipline records" },
                  { step: "Tier 3: Tactical Drill", desc: "Rigorous drills, access protocols, and SOP training" },
                  { step: "Tier 4: Random Audits", desc: "Drug, alcohol, and unannounced post inspections" },
                ].map((tier, i) => (
                  <div key={i} className={`p-2.5 rounded-lg border ${dividerColor} ${isLight ? 'bg-white shadow-xs' : 'bg-slate-900/60'}`}>
                    <div className={`font-bold text-xs ${textHead}`}>{tier.step}</div>
                    <div className={`text-[10px] ${textMuted} mt-0.5 leading-tight`}>{tier.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          {renderRunningFooter(9)}
        </div>
      );

    // PAGE 10: ANNEX - CERTIFICATE OF INCORPORATION
    case 10:
      return (
        <div className={`${pageContainerClass} ${theme.bgPage}`}>
          {renderWatermark()}
          {renderRunningHeader("STATUTORY ANNEX & LEGAL REGISTRATION", "09")}
          
          <div className="flex-1 flex flex-col justify-between py-2 space-y-3">
            <div>
              <span className={`text-xs font-mono tracking-widest uppercase ${textBrand} block mb-1`}>
                PACRA STATUTORY REGISTRATION · ANNEX A
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${textHead}`}>
                Certificate of Incorporation
              </h2>
            </div>

            {/* Certificate Display Container with Low Resolution/Clarity and Watermark */}
            <div className={`relative flex-1 rounded-2xl border ${cardBg} p-3.5 flex items-center justify-center overflow-hidden`}>
              {/* Diagonal Watermark across certificate */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none select-none rotate-[-22deg]">
                <span className={`text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-widest px-6 py-3 rounded-2xl border-4 border-red-600/60 bg-red-950/40 text-red-400 shadow-2xl backdrop-blur-xs`}>
                  True copy of the original
                </span>
              </div>

              {/* Certificate Image with low resolution/blur effect */}
              <div className="relative w-full h-full max-h-[400px] flex items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-slate-950 shadow-inner">
                <img 
                  src={IMAGES.certificateOfIncorporation} 
                  alt="Certificate of Incorporation PACRA" 
                  className="w-full h-full object-contain filter contrast-90 brightness-95 blur-[0.4px] opacity-85"
                />
              </div>
            </div>

            {/* Incorporation details text box */}
            <div className={`p-3 rounded-xl border ${cardBgPure} text-xs ${textBody} space-y-1`}>
              <div className={`font-mono font-bold uppercase tracking-wider ${textBrand}`}>
                PACRA Registration Summary:
              </div>
              <p className="leading-relaxed">
                {COMPANY_DETAILS.incorporationStatement}
              </p>
            </div>

          </div>
          {renderRunningFooter(10)}
        </div>
      );

    // PAGE 11: BACK COVER & COMMAND BASE CONTACTS
    case 11:
      return (
        <div className={`${pageContainerClass} ${theme.bgPage} text-center justify-between`}>
          {renderWatermark()}
          {renderRunningHeader("DISPATCH HEADQUARTERS & ENGAGEMENT", "10")}
          
          <div className="flex-1 flex flex-col items-center justify-between py-6 max-w-2xl mx-auto space-y-6">
            
            {/* Central Crest */}
            <div className="space-y-4">
              <div className="relative inline-block">
                <div className={`absolute -inset-6 rounded-full blur-2xl ${isLight ? 'bg-blue-600/15' : 'bg-blue-600/25'}`}></div>
                <img 
                  src={IMAGES.shieldLogo} 
                  alt="Bluestar Shield Crest" 
                  className={`relative w-36 h-36 sm:w-44 sm:h-44 object-contain rounded-2xl ${theme.shieldGlow} mx-auto`}
                />
              </div>

              <div className="space-y-2">
                <h2 className={`text-3xl sm:text-4xl font-black ${textHead}`}>
                  BLUE STAR SECURITY
                  <span className={`block text-xl sm:text-2xl mt-0.5 ${textBrand}`}>
                    SOLUTIONS LIMITED
                  </span>
                </h2>
                <p className={`text-sm italic font-semibold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  (Command experience. Civilian precision.)
                </p>
                <p className={`text-xs ${textMuted}`}>
                  Incorporated under the Laws of the Republic of Zambia
                </p>
              </div>
            </div>

            {/* Operational Contacts Box */}
            <div className={`w-full p-6 rounded-2xl border ${cardBg} space-y-4 text-left shadow-lg`}>
              <div className={`text-xs font-mono uppercase tracking-wider ${textBrand} font-bold border-b ${dividerColor} pb-2 flex items-center justify-between`}>
                <span>COMMAND DISPATCH & HEADQUARTERS</span>
                <span className="font-mono text-emerald-600 font-bold">24/7/365 ACTIVE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className={`text-xs font-bold ${textHead} flex items-center gap-1.5`}>
                    <MapPin className="w-4 h-4 text-blue-600" /> Head Office & Operational Base
                  </div>
                  <div className={`text-xs font-medium ${textBody}`}>
                    Plot 1621 Ndola Township, Copperbelt, Zambia
                  </div>
                  <div className={`text-[11px] ${textMuted}`}>
                    Headquarters · Nationwide Deployment Capability
                  </div>
                </div>

                <div className="space-y-1">
                  <div className={`text-xs font-bold ${textHead} flex items-center gap-1.5`}>
                    <Mail className="w-4 h-4 text-blue-600" /> Official Email
                  </div>
                  <div className="text-xs font-mono font-semibold text-blue-600">
                    bluestar.solutions@hotmail.com
                  </div>
                  <div className={`text-[11px] ${textMuted}`}>
                    Direct tender & client inquiries
                  </div>
                </div>

                <div className="space-y-1">
                  <div className={`text-xs font-bold ${textHead} flex items-center gap-1.5`}>
                    <Phone className="w-4 h-4 text-blue-600" /> Operations Dispatch
                  </div>
                  <div className="text-xs font-mono font-bold text-blue-600">
                    0979 728 718 <span className={`text-[10px] font-normal ${textMuted}`}>(+260 979 728 718)</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className={`text-xs font-bold ${textHead} flex items-center gap-1.5`}>
                    <Phone className="w-4 h-4 text-blue-600" /> Executive Line
                  </div>
                  <div className="text-xs font-mono font-bold text-blue-600">
                    0967 991 845 <span className={`text-[10px] font-normal ${textMuted}`}>(+260 967 991 845)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Notice */}
            <div className={`text-[11px] ${textMuted} leading-relaxed max-w-xl mx-auto`}>
              All deployments are subject to operational requirements, applicable Zambian laws and licensing conditions. Armed security where appropriately licensed and authorized.
            </div>

          </div>
          {renderRunningFooter(11)}
        </div>
      );

    // PAGE 12: CORPORATE POLICIES & COMPLIANCE FRAMEWORK
    case 12:
      return (
        <div className={`${pageContainerClass} ${theme.bgPage}`}>
          {renderWatermark()}
          {renderRunningHeader("CORPORATE POLICIES & PRICING", "11")}
          
          <div className="flex-1 flex flex-col justify-between py-1 space-y-2.5">
            
            {/* Bold and Centered Title */}
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-amber-500/40 bg-blue-950/60 text-amber-300 text-[10px] font-mono tracking-widest uppercase shadow-xs">
                <Shield className="w-3 h-3 text-amber-400 fill-amber-400/30" />
                <span>OFFICIAL STATUTORY & PRICING FRAMEWORK</span>
                <Shield className="w-3 h-3 text-amber-400 fill-amber-400/30" />
              </div>

              <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${textHead} uppercase text-center`}>
                PAGE 12 - POLICIES & PRICING MODEL
              </h2>

              <div className="w-36 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
            </div>

            {/* Pricing Policy Model */}
            <div className={`p-4 rounded-xl border ${cardHighlight} space-y-2`}>
              <h3 className={`text-sm font-bold uppercase tracking-wide ${isLight ? 'text-blue-950' : 'text-blue-300'}`}>
                PRICING POLICY MODEL
              </h3>
              <p className={`text-xs sm:text-sm ${textBody} leading-relaxed`}>
                Our pricing is based on a professional site risk assessment, taking into account the number of guards required, day and/or night coverage, armed or unarmed deployment, and specific operational requirements of the premises.
              </p>
              <p className={`text-xs sm:text-sm ${textBody} leading-relaxed`}>
                We offer competitive service fees with structured volume discounts for multiple guard deployments and long-term contracts.
              </p>
              <div className={`text-xs sm:text-sm font-bold ${isLight ? 'text-blue-950' : 'text-amber-300'}`}>
                Contact us for a FREE security risk assessment and a detailed quotation tailored to your premises.
              </div>
            </div>

            {/* 8 Policies in Disciplined 2-Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 flex-1 items-stretch">
              {/* Policies 1 to 8 */}
              {CORPORATE_POLICIES.map((policy) => (
                <div 
                  key={policy.id} 
                  className={`p-2 rounded-lg border ${
                    isLight 
                      ? 'bg-white border-blue-900/20 shadow-xs' 
                      : 'bg-[#0a1329]/85 border-blue-900/40 shadow-sm'
                  } flex gap-2 items-start`}
                >
                  <div className={`w-6 h-6 rounded flex items-center justify-center shrink-0 ${
                    isLight ? 'bg-blue-950 text-amber-400' : 'bg-blue-950 text-amber-300'
                  }`}>
                    <Shield className="w-3 h-3" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-[11px] font-black uppercase ${textHead}`}>{policy.title}</h3>
                    <ul className="space-y-0">
                      {policy.points.map((pt, pIdx) => (
                        <li key={pIdx} className={`text-[10px] ${textBody} leading-tight`}>
                          • {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Statutory & Legal Links */}
            {onOpenLegal && (
              <div className={`p-2 rounded-xl border ${cardBg} flex flex-wrap items-center justify-between gap-2`}>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-400">
                  <Scale className="w-3.5 h-3.5 text-blue-500" />
                  <span>Statutory Compliance:</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenLegal('privacy')}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase border transition-all ${
                      isLight 
                        ? 'bg-blue-100 text-blue-900 border-blue-300 hover:bg-blue-200' 
                        : 'bg-blue-950/80 text-blue-300 border-blue-700 hover:bg-blue-900'
                    }`}
                  >
                    Privacy Data (ZDPA 2021)
                  </button>
                  <button
                    onClick={() => onOpenLegal('terms')}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase border transition-all ${
                      isLight 
                        ? 'bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200' 
                        : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    Terms of Use & Service
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Footer Note in Small Italic */}
            <div className={`pt-1 border-t ${dividerColor} flex items-center justify-between gap-4`}>
              <p className={`text-[10px] italic leading-tight ${isLight ? 'text-slate-950 font-semibold' : 'text-slate-300'} flex-1`}>
                All deployments are subject to operational requirements, applicable Zambian laws and licensing conditions. BLUE STAR SECURITY SOLUTIONS LIMITED | Reg No. 120261057561 | Ndola, Zambia
              </p>
              
              {onGoToFirstPage && (
                <button
                  onClick={onGoToFirstPage}
                  className={`shrink-0 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg transition-all active:scale-95 ${
                    isLight 
                      ? 'bg-blue-950 text-white hover:bg-blue-900' 
                      : 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-900/40'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Return to First Page
                </button>
              )}
            </div>

          </div>
          {renderRunningFooter(12)}
        </div>
      );
    default:
      return null;
  }
};
