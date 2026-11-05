import React, { useState } from 'react';
import { 
  Scale, 
  ShieldCheck, 
  Lock, 
  FileText, 
  X, 
  Printer, 
  Search, 
  Download, 
  Check, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  AlertCircle,
  FileLock2,
  ScrollText
} from 'lucide-react';
import { COMPANY_DETAILS, IMAGES } from '../data/bookletData';

export type LegalTabType = 'privacy' | 'terms';

interface LegalDossierModalProps {
  isOpen: boolean;
  initialTab?: LegalTabType;
  onClose: () => void;
}

export const LegalDossierModal: React.FC<LegalDossierModalProps> = ({
  isOpen,
  initialTab = 'privacy',
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<LegalTabType>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync initial tab when changed
  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const textToCopy = activeTab === 'privacy' ? privacyPolicyText : termsOfUseText;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const privacyPolicyText = `BLUESTAR SECURITY SOLUTIONS LIMITED
CORPORATE PRIVACY & DATA PROTECTION POLICY
Compliant with the Data Protection Act No. 3 of 2021 of the Republic of Zambia
Effective Date: January 1, 2026 | Document Ref: BSS-LEG-DP-2026-v2

1. STATUTORY COMPLIANCE & IDENTITY OF DATA CONTROLLER
Bluestar Security Solutions Limited (Company Registration No. 120261057561), incorporated under the Companies Act of the Republic of Zambia, operates as a recognized Data Controller and Data Processor under Section 3 and Section 14 of the Data Protection Act No. 3 of 2021.
Head Office: Plot 1621, Ndola Township, Copperbelt, Zambia.
Designated Data Protection Officer (DPO): Legal & Compliance Directorate | Contact: akapekwak@gmail.com | Phone: +260 979 728 918 / +260 967 991 845.

2. CATEGORIES OF DATA COLLECTED DURING SECURITY OPERATIONS
In the lawful execution of physical security guarding, surveillance, access control, VIP escort, canine patrols, and emergency armed response, Bluestar collects and processes:
a) Visitor & Access Control Records: Full names, National Registration Card (NRC) numbers, passport details, vehicle registration numbers, employer/company details, entry/exit timestamps, and purpose of visit recorded at client perimeters.
b) CCTV & Video Surveillance Footage: Continuous video recordings captured via optical surveillance systems installed on client installations, guard command booths, and Bluestar monitoring stations.
c) Biometric & Electronic Gate Telemetry: Fingerprint or RFID badge access logs recorded at automated client turnstiles and security barriers.
d) Convoy & Fleet Telematics: GPS tracking, vehicle coordinates, convoy transit velocity, and route telemetry for assets under escort.
e) Client Keyholder & Incident Personnel Data: Emergency contact telephone numbers, physical residential/corporate addresses, and call-out rosters.
f) Radio & Dispatch Communication Audio: Recorded VHF, UHF, and cellular audio communications between mobile response units and the central Ndola Operations Command Room.

3. LAWFUL BASIS FOR PROCESSING
In compliance with Section 12 and Section 22 of the Zambia Data Protection Act No. 3 of 2021, processing is performed strictly under:
a) Performance of Contract: Executing physical asset defense, manned guarding, and incident prevention covenants under formal client service agreements.
b) Legitimate Interests: Deterrence of burglary, pilferage, vandalism, trespass, and preservation of human safety on protected industrial, commercial, and residential properties.
c) Statutory & Legal Obligations: Assisting the Zambia Police Service, judicial courts, and statutory investigatory agencies in the investigation and prosecution of criminal offenses.

4. RETENTION & AUTOMATED DISPOSAL SCHEDULES
a) CCTV Optical Footage: Retained for a default cycle of thirty (30) to sixty (60) days, after which automated overwriting occurs, unless marked as evidence in an active incident docket or under judicial subpoena.
b) Physical Gate Occurrence Books (OB) & Visitor Registers: Retained in locked, fire-rated archives for twelve (12) calendar months, followed by secure shredding under supervisor witness.
c) Incident Investigation Dockets: Retained for seven (7) years to align with the statute of limitations for civil litigation and insurance subrogation claims under Zambian law.
d) Telematics & Fleet Logs: Retained for twelve (12) months.

5. SECURITY SAFEGUARDS & ACCESS RESTRICTIONS
a) Physical Registers: Bound hardcopy occurrence books are permanently stationed in guarded sentry cabins and locked in metal strongboxes when not actively in use.
b) Digital Security: Video server repositories and access databases are secured with AES-256 encryption, role-based access control, multi-factor authentication, and isolated from open public web indexing.
c) Personnel Confidentiality: All operational guards, control room operators, and canine handlers sign strict Non-Disclosure Agreements (NDAs) and undergo rigorous criminal background vetting before post assignment.

6. LAWFUL THIRD-PARTY DISCLOSURES
Bluestar Security Solutions Limited does NOT sell, rent, or commercialize any personal or operational data. Disclosures are strictly limited to:
a) The Zambia Police Service (ZPS) upon issuance of an official investigation request or Section 49 Criminal Procedure warrant.
b) Competent Courts of Law in the Republic of Zambia pursuant to a valid judicial subpoena.
c) Authorized insurance underwriters and loss adjusters evaluating verified claims arising from documented security incidents.
d) The Client’s authorized corporate security representatives.

7. DATA SUBJECT RIGHTS UNDER ZAMBIAN LAW
Under Part VI of the Data Protection Act No. 3 of 2021, data subjects possess the right to:
- Request confirmation of personal data held and obtain a verified copy;
- Request correction of inaccurate visitor or personal profile records;
- Object to unauthorized processing not mandated by security defense or statute;
- Lodge a formal complaint with the Office of the Data Protection Commissioner (ODPC) of Zambia if they believe their statutory rights have been infringed.
To exercise any rights, submit a written query to the DPO at: akapekwak@gmail.com.`;

  const termsOfUseText = `BLUESTAR SECURITY SOLUTIONS LIMITED
TERMS OF SERVICE, USE & OPERATIONAL ENGAGEMENT
Governed by the Laws of the Republic of Zambia | Head Office: Plot 1621, Ndola Township, Copperbelt, Zambia
Effective Date: January 1, 2026 | Document Ref: BSS-LEG-TOU-2026-v2

1. BINDING SCOPE & AGREEMENT OVERVIEW
These Terms of Service and Operational Conditions govern all security deployments, service quotations, physical installations, rapid response protocols, canine (K9) services, and access control operations provided by Bluestar Security Solutions Limited ("Bluestar") to commercial, industrial, mining, corporate, and private clients ("the Client"). Acceptance of a quotation, execution of a Service Level Agreement (SLA), or commissioning of guard personnel constitutes irrevocable assent to these terms.

2. STANDARD OPERATING PROCEDURES & GUARD POST STANDING ORDERS
a) Deployment Roster: Manned guarding personnel are assigned according to agreed 12-hour day/night shifts or continuous 24-hour rotations.
b) Conduct & Duty Discipline: All personnel adhere to the Bluestar Standing Operational Orders. Personnel shall not leave their designated post until officially relieved by a squad colleague or field supervisor.
c) Random Inspections: Bluestar Operations Officers and Night Duty Inspectors conduct unannounced mobile supervisory patrols across all Copperbelt posts to inspect sentry alertness, equipment integrity, and book logs.
d) Uniformity & ID: Guards shall at all times wear the official Bluestar navy tactical uniform, reflective safety wear where required, and visible company identification badge.

3. CANINE (K9) & ARMED RESPONSE OPERATIONAL PROTOCOLS
a) K9 Deployment: All security patrol dogs are accompanied by certified professional canine handlers. K9 units remain leashed and under direct handler command at all times, deployed solely for deterrence, perimeter patrolling, and tracking.
b) Firearms & Armed Escorts: Armed personnel operate strictly under the Firearms Act (Chapter 110 of the Laws of Zambia) and statutory police clearances. Deadly force is strictly governed by the defense of human life against imminent unlawful lethal threat.
c) Emergency Response: Mobile response vehicles dispatch immediately upon receiving alarm trip signals or duress calls, coordinating directly with the Zambia Police Service where criminal trespass or breach has occurred.

4. CLIENT OBLIGATIONS & OCCUPATIONAL HEALTH CONDITIONS
a) Safe Working Environment: In compliance with the Occupational Health and Safety Act of Zambia, the Client shall ensure that guard sentry posts provide adequate shelter against rain and extreme sun, sanitary convenience, potable drinking water, and sufficient security perimeter floodlighting.
b) Hazard Notice: The Client must disclose in writing any specialized hazards existing on the premises (e.g., hazardous chemicals, unstable pits, energized industrial machinery, unchained private animals).
c) Non-Solicitation: The Client covenants not to solicit, hire, or directly engage any Bluestar guard, supervisor, or handler within twelve (12) months following the termination of the service agreement.

5. PRICING, INVOICING & PAYMENT TERMS
a) Currency & Quotations: All quotations, invoices, and service fees are denominated in Zambian Kwacha (ZMW) unless expressly agreed otherwise in writing.
b) Payment Terms: Invoices are submitted monthly in advance and become due within thirty (30) days from invoice date.
c) Late Payment: Overdue accounts will incur a statutory financing surcharge of 2.5% per month or the Bank of Zambia benchmark rate plus 5%, whichever is applicable.
d) Right of Demobilization: Bluestar reserves the contractual right to temporarily withdraw guard coverage upon giving forty-eight (48) hours' written default notice for non-payment exceeding 45 days.

6. LIMITATION OF LIABILITY & FORCE MAJEURE
a) Professional Duty of Care: Bluestar undertakes to provide diligent, disciplined security services in accordance with established industry standards.
b) Insurance & Liability Cap: Manned guarding constitutes a deterrent measure and does not constitute an insurance policy against criminal acts. Bluestar maintains commercial public liability insurance. Bluestar's aggregate liability for any proven direct negligence of its personnel shall not exceed the total service fees paid by the Client in the preceding three (3) months, or the insured limit of the company’s policy.
c) Consequential Damages Exclusion: Under no circumstances shall Bluestar be liable for indirect, incidental, punitive, or consequential economic losses, loss of production, mining interruptions, or business disruptions.
d) Force Majeure: Neither party shall be liable for service disruptions caused by acts of God, civil riots, public labor strikes, regional power grid blackouts, or government armed intervention beyond reasonable control.

7. TERMINATION & CONTRACT HANDOVER
Either party may terminate a continuous guarding contract by serving thirty (30) days' prior written notice to the other party's registered corporate office, or immediately in the event of an unremedied material breach after fourteen (14) days' written cure notification. Upon contract cessation, Bluestar shall systematically demobilize all arms, communication gear, and personnel while furnishing an orderly final handover docket.

8. GOVERNING LAW & JURISDICTION
This agreement and any dispute, controversy, or claim arising out of or related to security operations shall be governed by, construed, and enforced in accordance with the Laws of the Republic of Zambia. The parties irrevocably submit to the exclusive jurisdiction of the High Court of Zambia, sitting at the Ndola District Registry in the Copperbelt Province.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900/40 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="legal-modal-title" className="text-base sm:text-lg font-black tracking-tight text-white uppercase">
                  LEGAL & STATUTORY FRAMEWORK
                </h2>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-950 text-blue-300 border border-blue-800">
                  REPUBLIC OF ZAMBIA
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Bluestar Security Solutions Limited · Ndola, Copperbelt Province
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Print Legal Document"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="Copy Full Document to Clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <ScrollText className="w-3.5 h-3.5 text-blue-400" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-rose-900/40 text-slate-400 hover:text-rose-300 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selector & Search Bar */}
        <div className="px-6 py-3 bg-slate-900 border-b border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'privacy'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              Privacy Data Policy
              <span className="text-[10px] opacity-75 font-mono">ZDPA 2021</span>
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'terms'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileLock2 className="w-4 h-4" />
              Terms of Use & Service
              <span className="text-[10px] opacity-75 font-mono">Zambia</span>
            </button>
          </div>

          <div className="relative flex-1 max-w-xs">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search clauses (e.g. CCTV, Firearms, ZMW)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-300 text-sm leading-relaxed scrollbar-thin scrollbar-thumb-slate-700">
          
          {/* Statutory Badge Banner */}
          <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-white uppercase tracking-wider block mb-0.5">
                Official Statutory Compliance Dossier
              </span>
              <p className="text-slate-300">
                This document sets forth the complete operational privacy commitments under the{' '}
                <strong className="text-blue-300">Data Protection Act No. 3 of 2021 of the Republic of Zambia</strong>{' '}
                and the standard conditions of engagement for commercial security contracts in Ndola and the Copperbelt region.
              </p>
            </div>
          </div>

          {activeTab === 'privacy' ? (
            /* =================== PRIVACY POLICY CONTENT =================== */
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[11px] font-mono text-blue-400 font-bold uppercase tracking-widest block">
                  STATUTORY DATA PROTECTION DOSSIER
                </span>
                <h3 className="text-xl font-black text-white mt-1 uppercase underline underline-offset-8 decoration-blue-600 decoration-2">
                  CORPORATE PRIVACY & SECURITY DATA POLICY
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  Governed under Act No. 3 of 2021 (Data Protection Act) · Effective 1 January 2026
                </p>
              </div>

              {/* Section 1 */}
              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase underline underline-offset-4 decoration-blue-600 decoration-1">
                  <span className="text-xs font-mono px-2 py-0.5 bg-blue-900/60 text-blue-300 rounded border border-blue-700 no-underline">01</span>
                  STATUTORY COMPLIANCE & DATA CONTROLLER IDENTITY
                </h4>
                <p>
                  <strong>Bluestar Security Solutions Limited</strong> (Company Registration No. 120261057561), incorporated under the Companies Act of Zambia, operates as an authorized Data Controller and Processor under Section 3 and Section 14 of the <em>Data Protection Act No. 3 of 2021</em>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-500 block uppercase font-mono text-[10px]">Head Office Location</span>
                    <span className="text-slate-200 font-medium">Plot 1621, Ndola Township, Copperbelt, Zambia</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase font-mono text-[10px]">Designated Data Protection Officer (DPO)</span>
                    <span className="text-blue-400 font-medium">Legal & Compliance Desk · akapekwak@gmail.com</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase font-mono text-[10px]">Operational Call Center</span>
                    <span className="text-slate-200 font-mono">+260 979 728 918 (Airtel) / +260 967 991 845 (MTN)</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase font-mono text-[10px]">Supervisory Authority</span>
                    <span className="text-slate-200 font-medium">Office of the Data Protection Commissioner (ODPC), Lusaka</span>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase underline underline-offset-4 decoration-blue-600 decoration-1">
                  <span className="text-xs font-mono px-2 py-0.5 bg-blue-900/60 text-blue-300 rounded border border-blue-700 no-underline">02</span>
                  CATEGORIES OF DATA COLLECTED DURING SECURITY OPERATIONS
                </h4>
                <p>
                  In the performance of guarding, static sentry posts, canine patrols, and rapid escort responses, Bluestar collects and processes specific security-relevant data:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
                    <h5 className="font-bold text-xs text-blue-300 uppercase">A. Visitor & Gate Access Logs</h5>
                    <p className="text-xs text-slate-400">
                      Full names, NRC / Passport numbers, company affiliations, vehicle registration plates, visiting purposes, and physical arrival/departure timestamps.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
                    <h5 className="font-bold text-xs text-blue-300 uppercase">B. CCTV & Video Surveillance</h5>
                    <p className="text-xs text-slate-400">
                      Continuous optical video recordings at client perimeters, gate access barriers, warehouse loading docks, and central guard checkpoints.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
                    <h5 className="font-bold text-xs text-blue-300 uppercase">C. Fleet & Convoy Telematics</h5>
                    <p className="text-xs text-slate-400">
                      Real-time GPS coordinates, vehicle transit speeds, stop durations, and escort routing logs for Copperbelt transit protection.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
                    <h5 className="font-bold text-xs text-blue-300 uppercase">D. Dispatch Radio & Audio Calls</h5>
                    <p className="text-xs text-slate-400">
                      VHF/UHF operational frequencies and dispatch phone calls recorded at the Ndola Central Command Room for incident logging and safety reviews.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase underline underline-offset-4 decoration-blue-600 decoration-1">
                  <span className="text-xs font-mono px-2 py-0.5 bg-blue-900/60 text-blue-300 rounded border border-blue-700 no-underline">03</span>
                  LAWFUL BASES FOR PROCESSING UNDER ZDPA 2021
                </h4>
                <p>
                  Data collection is conducted strictly under Section 12 of the Data Protection Act:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-300">
                  <li>
                    <strong className="text-white">Contractual Performance:</strong> Providing contracted physical guarding, access verification, and perimeter security as agreed with our commercial clients.
                  </li>
                  <li>
                    <strong className="text-white">Legitimate Interests:</strong> Deterrence and detection of trespassing, corporate theft, copper concentrate pilferage, vandalism, and the protection of personnel life and safety.
                  </li>
                  <li>
                    <strong className="text-white">Legal Obligations:</strong> Assisting the Zambia Police Service (ZPS) and statutory law enforcement agencies pursuant to court orders, search warrants, or active criminal investigations.
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase underline underline-offset-4 decoration-blue-600 decoration-1">
                  <span className="text-xs font-mono px-2 py-0.5 bg-blue-900/60 text-blue-300 rounded border border-blue-700 no-underline">04</span>
                  DATA RETENTION & AUTOMATED PURGE SCHEDULES
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800">
                    <span className="font-semibold text-slate-200">CCTV Optical Recordings</span>
                    <span className="font-mono text-amber-400 font-bold">30 – 60 Days (Auto-Overwrite)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800">
                    <span className="font-semibold text-slate-200">Physical Gate Occurrence Books (OBs)</span>
                    <span className="font-mono text-blue-400 font-bold">12 Months (Vaulted Hardcopy)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800">
                    <span className="font-semibold text-slate-200">Incident Investigation Dockets & Police Reports</span>
                    <span className="font-mono text-emerald-400 font-bold">7 Years (Statutory Limitation)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800">
                    <span className="font-semibold text-slate-200">Fleet Escort GPS Telematics</span>
                    <span className="font-mono text-blue-400 font-bold">12 Months</span>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase underline underline-offset-4 decoration-blue-600 decoration-1">
                  <span className="text-xs font-mono px-2 py-0.5 bg-blue-900/60 text-blue-300 rounded border border-blue-700 no-underline">05</span>
                  SECURITY SAFEGUARDS & ACCESS CONTROLS
                </h4>
                <p className="text-xs">
                  We employ rigorous physical, organizational, and technological safeguards to shield collected information:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                    <strong className="text-blue-300 block mb-1">Physical Lockup</strong>
                    All physical gate logbooks are stored in locked sentry boxes and transferred to Ndola central vaults weekly.
                  </div>
                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                    <strong className="text-blue-300 block mb-1">AES-256 Storage</strong>
                    Digital video feeds and telemetry logs are encrypted and hosted on isolated private servers with 2FA protection.
                  </div>
                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                    <strong className="text-blue-300 block mb-1">Guards Vetting & NDAs</strong>
                    All guards undergo full criminal background vetting and sign strict non-disclosure contracts prior to deployment.
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase underline underline-offset-4 decoration-blue-600 decoration-1">
                  <span className="text-xs font-mono px-2 py-0.5 bg-blue-900/60 text-blue-300 rounded border border-blue-700 no-underline">06</span>
                  THIRD-PARTY DISCLOSURES & LAW ENFORCEMENT
                </h4>
                <p className="text-xs">
                  Bluestar will <strong>NEVER</strong> sell or commercially distribute client or visitor data. Disclosures occur solely in the following controlled circumstances:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
                  <li>Upon formal written demand by the Zambia Police Service or statutory intelligence agencies following an official incident docket;</li>
                  <li>In compliance with a legally valid subpoena or order issued by the High Court of Zambia or Subordinate Courts;</li>
                  <li>To authorized corporate insurance adjusters assessing verified insurance claims under client policies.</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section className="space-y-2 border-t border-slate-800 pt-4">
                <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase underline underline-offset-4 decoration-blue-600 decoration-1">
                  <span className="text-xs font-mono px-2 py-0.5 bg-blue-900/60 text-blue-300 rounded border border-blue-700 no-underline">07</span>
                  DATA SUBJECT RIGHTS & DPO CONTACT
                </h4>
                <p className="text-xs">
                  Under Part VI of the <em>Data Protection Act No. 3 of 2021</em>, individuals have the right to request access to their personal data, seek rectification of inaccurate visitor entries, object to unlawful data handling, or submit a complaint to the <strong>Office of the Data Protection Commissioner of Zambia</strong>.
                </p>
                <div className="p-3 bg-slate-950 rounded-xl border border-blue-500/30 text-xs flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="text-slate-400 block">Direct Inquiries to the Data Protection Officer:</span>
                    <span className="font-bold text-white font-mono">akapekwak@gmail.com</span>
                  </div>
                  <a
                    href="mailto:akapekwak@gmail.com?subject=Data%20Protection%20Inquiry%20-%20Bluestar%20Security"
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-xs transition-colors"
                  >
                    Email Legal DPO
                  </a>
                </div>
              </section>
            </div>
          ) : (
            /* =================== TERMS OF USE CONTENT =================== */
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[11px] font-mono text-blue-400 font-bold uppercase tracking-widest block">
                  STANDARD OPERATING TERMS & CONDITIONS
                </span>
                <h3 className="text-xl font-black text-white mt-1 uppercase underline underline-offset-8 decoration-blue-600 decoration-2">
                  TERMS OF SERVICE & OPERATIONAL ENGAGEMENT
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  Governed by the Laws of the Republic of Zambia · High Court Ndola Jurisdiction
                </p>
              </div>

              {/* Section 1 */}
              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase underline underline-offset-4 decoration-blue-600 decoration-1">
                  <span className="text-xs font-mono px-2 py-0.5 bg-blue-900/60 text-blue-300 rounded border border-blue-700 no-underline">01</span>
                  SCOPE OF SERVICE & BINDING ENGAGEMENT
                </h4>
                <p className="text-xs">
                  These Terms of Service govern all physical manned guarding, VIP close protection, armed response escorts, canine (K9) patrols, rapid alarm reaction, and electronic access systems operated by <strong>Bluestar Security Solutions Limited</strong> throughout the Copperbelt Province and greater Zambia. Commissioning guard services or signing a Deployment Agreement constitutes binding assent to these operational conditions.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase underline underline-offset-4 decoration-blue-600 decoration-1">
                  <span className="text-xs font-mono px-2 py-0.5 bg-blue-900/60 text-blue-300 rounded border border-blue-700 no-underline">02</span>
                  STANDING OPERATIONAL ORDERS & POST DISCIPLINE
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
                    <strong className="text-blue-300 block uppercase">Continuous 12-Hour Shift Rota</strong>
                    <p className="text-slate-400">
                      Standard deployments run on dedicated 12-hour shifts (Day: 06:00–18:00; Night: 18:00–06:00). Guards must remain at their station until physical relief by an oncoming colleague is verified in the Occurrence Book.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
                    <strong className="text-blue-300 block uppercase">Tactical Supervisory Patrols</strong>
                    <p className="text-slate-400">
                      Random mobile supervisory inspections are conducted multiple times per 24-hour cycle to assess sentry alertness, equipment functionality, and logbook compliance.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase underline underline-offset-4 decoration-blue-600 decoration-1">
                  <span className="text-xs font-mono px-2 py-0.5 bg-blue-900/60 text-blue-300 rounded border border-blue-700 no-underline">03</span>
                  FIREARMS & RULES OF ENGAGEMENT PROTOCOL
                </h4>
                <p className="text-xs">
                  Armed security escorts and tactical units operate under strict compliance with the <em>Firearms Act (Chapter 110 of the Laws of Zambia)</em>:
                </p>
                <div className="p-3 bg-slate-950 rounded-xl border border-amber-500/30 text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-400 font-bold uppercase text-[11px]">
                    <AlertCircle className="w-4 h-4" /> Proportionality & Life Defense Directive
                  </div>
                  <p className="text-slate-300">
                    Lethal force is restricted strictly to circumstances where there is an imminent, unlawful threat to human life. Non-lethal physical containment, canine deterrence, baton maneuvers, and tactical retreat protocols are prioritized at all operational times.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase underline underline-offset-4 decoration-blue-600 decoration-1">
                  <span className="text-xs font-mono px-2 py-0.5 bg-blue-900/60 text-blue-300 rounded border border-blue-700 no-underline">04</span>
                  CLIENT SITE OBLIGATIONS & SAFETY WARRANTIES
                </h4>
                <p className="text-xs">
                  In compliance with the <em>Occupational Health and Safety Act of Zambia</em>, the Client warrants and agrees to provide:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
                  <li>Adequate guard sentry post shelter providing protection against extreme weather, rain, and cold;</li>
                  <li>Access to clean drinking water and sanitary restroom facilities on the client premises;</li>
                  <li>Adequate perimeter illumination and floodlighting along patrol pathways and gate barriers;</li>
                  <li>Prompt written notification of any industrial hazards, open pits, chemical stores, or aggressive animal hazards on site.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase underline underline-offset-4 decoration-blue-600 decoration-1">
                  <span className="text-xs font-mono px-2 py-0.5 bg-blue-900/60 text-blue-300 rounded border border-blue-700 no-underline">05</span>
                  INVOICING, CURRENCY & PAYMENT TERMS
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-blue-300 font-bold block uppercase">Zambian Kwacha (ZMW) Invoicing</span>
                    <p className="text-slate-400">
                      All monthly contracts are invoiced in Zambian Kwacha (ZMW) in advance. Invoices are payable within <strong>thirty (30) calendar days</strong> from the date of submission.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-amber-300 font-bold block uppercase">Default & Right of Demobilization</span>
                    <p className="text-slate-400">
                      Accounts outstanding past 45 days accrue a financing surcharge of 2.5% monthly. Bluestar reserves the contractual right to withdraw guarding personnel following forty-eight (48) hours' formal written notice of non-payment.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase underline underline-offset-4 decoration-blue-600 decoration-1">
                  <span className="text-xs font-mono px-2 py-0.5 bg-blue-900/60 text-blue-300 rounded border border-blue-700 no-underline">06</span>
                  LIMITATION OF LIABILITY & FORCE MAJEURE
                </h4>
                <p className="text-xs leading-relaxed">
                  Security services constitute a professional deterrence and mitigation measure, not a guarantee or comprehensive insurance policy against theft or damage. Bluestar maintains commercial third-party liability insurance. Except in cases of willful misconduct, Bluestar’s total cumulative liability for any proven incident of guard negligence shall be capped at the total service fees paid by the Client in the three (3) months preceding the incident.
                </p>
                <p className="text-xs text-slate-400 italic">
                  Neither party shall be held liable for failure to deliver services during events of Force Majeure, including armed civil disturbance, sovereign military intervention, violent riots, regional power grid failures, or extreme natural catastrophes.
                </p>
              </section>

              {/* Section 7 */}
              <section className="space-y-2 border-t border-slate-800 pt-4">
                <h4 className="text-base font-bold text-white flex items-center gap-2 uppercase underline underline-offset-4 decoration-blue-600 decoration-1">
                  <span className="text-xs font-mono px-2 py-0.5 bg-blue-900/60 text-blue-300 rounded border border-blue-700 no-underline">07</span>
                  GOVERNING LAW & NDOLA JURISDICTION
                </h4>
                <p className="text-xs">
                  This Agreement, and any claim or dispute arising out of or related to security deployments in Zambia, shall be governed by, construed, and enforced exclusively under the <strong>Laws of the Republic of Zambia</strong>. The parties submit to the exclusive jurisdiction of the <strong>High Court of Zambia, sitting at the Ndola District Registry in the Copperbelt Province</strong>.
                </p>
              </section>
            </div>
          )}

        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-blue-400 font-mono font-bold">
              <Building2 className="w-4 h-4" /> Bluestar Security Solutions Limited
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline font-mono">Company Reg: 120261057561</span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="tel:+260979728918"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>0979 728 918 (Airtel)</span>
            </a>
            <span className="text-slate-600">·</span>
            <a 
              href="https://wa.me/260967991845"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>WhatsApp: 0967 991 845</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
