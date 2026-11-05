/**
 * Bluestar Security Solutions Limited - Corporate Profile Data
 * Grounded in official company specifications and operational mandate.
 */

// Direct Vite asset imports for 100% reliable local bundling and display
import shieldLogoAsset from '../assets/images/IMG-20260701-WA6717_17bb4e3c.jpg';
import kelvinAkapelwaAsset from '../assets/images/IMG-20260924-WA0949_1bec9ead.jpg';
import ronaldMwanzaAsset from '../assets/images/IMG-20261030-WA0016_9d28c359.jpg';
import chipoMulengaAsset from '../assets/images/IMG-20261030-WA5610_b276a501.jpg';
import josephNgimbuAsset from '../assets/images/IMG-20261030-WA3562_ff1e30a3.jpg';
import armedGuardMiningAsset from '../assets/images/IMG-20261030-WA7159_06752adc.jpg';
import accessControlGuardsAsset from '../assets/images/IMG-20261030-WA9700_46cbe1f0.jpg';
import patrolCarRearAsset from '../assets/images/IMG-20261030-WA5142_f097a11d.jpg';
import patrolCarSideAsset from '../assets/images/IMG-20260701-WA9054_aedbf8e1.jpg';
import cctvInstallerAsset from '../assets/images/IMG-20261030-WA8901_68bd5a06.jpg';
import dogHandlerAsset from '../assets/images/k9_dog_handler_clean.jpg';
import radioCommsAsset from '../assets/images/Screenshot_20260924-145233_0081a3cd.png';
import gate3AccessAsset from '../assets/images/IMG-20261030-WA9700_46cbe1f0.jpg';
import certificateAsset from '../assets/images/Screenshot_20261029-225216_7d95cf71.png';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  capabilities: string[];
  typicalApplications: string[];
  illustration: string;
  illustrationCaption: string;
  badgeLabel: string;
  iconName: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  credential?: string;
  department: string;
  brief: string;
  photo?: string;
  tagText?: string;
  isSensitiveAvatar?: boolean;
}

export interface SectorItem {
  name: string;
  threatProfile: string;
  keyServices: string[];
}

export interface CompanyPillar {
  title: string;
  subtitle: string;
  description: string;
}

export const COMPANY_DETAILS = {
  name: "BLUE STAR SECURITY SOLUTIONS LIMITED",
  shortName: "Bluestar Security",
  tagline: "Command & Operational Precision",
  subtitle: "Command Experience. Civilian Precision.",
  registration: "Incorporated under the Laws of the Republic of Zambia",
  incorporationStatement: "BLUE STAR SECURITY SOLUTIONS LIMITED is duly incorporated as a PRIVATE COMPANY LIMITED BY SHARES under The Companies Act, 2017 (Act No. 10 of 2017) on 29th October 2026. Registration No. 120261057561 issued by PACRA, Lusaka, Zambia.",
  headquarters: "Plot 1621 Ndola Township, Copperbelt, Zambia",
  jurisdiction: "Nationwide Deployment Capability across Zambia",
  emails: ["bluestar.solutions@hotmail.com"],
  phones: [
    { display: "0975 665 700", tel: "+260975665700", label: "WhatsApp & Inquiries" },
    { display: "0979 728 918", tel: "+260979728918", label: "Operations Dispatch" },
    { display: "0967 991 845", tel: "+260967991845", label: "Executive Line" },
  ],
  operationalBase: "Plot 1621 Ndola Township, Copperbelt, Zambia",
  about: `Bluestar Security Solutions Limited is a Zambian-based security solutions company headquartered in Ndola, Copperbelt Province, with the capability to deploy security personnel and solutions across Zambia.\n\nThe company combines disciplined personnel, structured operational procedures, threat assessment and modern security technology to provide tailored protection for businesses, infrastructure, property, events and individuals.`,
  mission: `To protect people, assets, information and infrastructure through disciplined, vetted and professionally trained security personnel, supported by effective procedures, technology and responsive operational management.`,
  vision: `To deliver cutting-edge, uncompromised protection services across Zambia while setting a professional standard for disciplined and responsive security operations.`,
  legalDisclaimer: `All deployments are subject to operational requirements, applicable Zambian laws and licensing conditions. Armed security where appropriately licensed and authorized. Services do not imply armed services or statutory police powers.`
};

export const IMAGES = {
  shieldLogo: shieldLogoAsset,
  kelvinAkapelwa: kelvinAkapelwaAsset,
  ronaldMwanza: ronaldMwanzaAsset,
  chipoMulenga: chipoMulengaAsset,
  josephNgimbu: josephNgimbuAsset,
  martinMulenga: josephNgimbuAsset, // Backwards alias
  armedGuardMining: armedGuardMiningAsset,
  accessControlGuards: gate3AccessAsset,
  patrolCarRear: patrolCarRearAsset,
  patrolCarSide: patrolCarSideAsset,
  cctvInstaller: cctvInstallerAsset,
  dogHandler: dogHandlerAsset,
  radioComms: radioCommsAsset,
  certificateOfIncorporation: certificateAsset,
};

export const LEADERSHIP_SQUAD: LeadershipMember[] = [
  {
    id: "kelvin-akapelwa",
    name: "Kelvin Akapelwa",
    role: "Director - Operations & Training",
    credential: "Former Army Officer",
    department: "Command, Operational Training & Deployment",
    photo: IMAGES.kelvinAkapelwa,
    tagText: "AKAPELWA Director / Operations",
    brief: "Infuses genuine armed forces command experience, field-tested operational discipline, rigorous guard vetting, and precision standard operating procedures into civilian security."
  },
  {
    id: "ronald-mwanza",
    name: "Ronald Mwanza",
    role: "Director - Finance & Marketing",
    department: "Corporate Governance & Marketing Strategy",
    photo: IMAGES.ronaldMwanza,
    tagText: "RONALD MWANZA Director Finance & Marketing",
    brief: "Directs Bluestar's fiscal integrity, capital management, strategic partnerships, marketing strategy, and nationwide deployment expansion across Zambia."
  },
  {
    id: "chipo-mulenga",
    name: "CHIPO MULENGA",
    role: "HR and Liaison Officer",
    department: "Personnel Vetting & Client Relations",
    photo: IMAGES.chipoMulenga,
    tagText: "CHIPO MULENGA HR Officer",
    brief: "Directs stringent personnel background vetting, legal compliance, guard welfare, ongoing training curriculums, and institutional liaison with Zambian authorities."
  },
  {
    id: "joseph-ngimbu",
    name: "JOSEPH NGIMBU",
    role: "Supervisor Operations Dept",
    department: "Field Supervision & Shift Command",
    photo: IMAGES.josephNgimbu,
    tagText: "Field Supervisor",
    brief: "Commands frontline field operations, site post inspections, shift handovers, guard discipline, and strict compliance with site-specific standing orders."
  },
  {
    id: "simon-mwiinga",
    name: "Simon Mwiinga",
    role: "Investigations Officer",
    department: "Enquiry, Intelligence & Evidence Control",
    isSensitiveAvatar: true,
    tagText: "Classified Operative Identity",
    brief: "Leads internal investigations, asset tracing, fraud enquiries, and lawful evidence preservation with court-admissible documentation. Maintained with tactical privacy due to the sensitive nature of investigative operations."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "regular-armed-guarding",
    number: "01",
    title: "REGULAR & ARMED GUARDING",
    category: "Physical & Heavy-Site Protection",
    tagline: "Vetted armed & unarmed guards, disciplined post procedures, strict access control.",
    description: "Security personnel are deployed according to the client's operational requirements, site risk profile, access-control requirements and applicable regulatory requirements. Services may include static guarding, access control, visitor management, patrols, gatehouse duties, key control, incident reporting and armed security where appropriately licensed and authorized.",
    capabilities: [
      "Static guarding & perimeter watch",
      "Access control & gatehouse duties",
      "Mining & heavy extraction site security",
      "Visitor logging & badge issuance",
      "Key control & incident logging",
      "Armed security where legally authorized"
    ],
    typicalApplications: [
      "Corporate campuses",
      "Mining sites & extraction pits",
      "Estates & gated premises",
      "Industrial facilities",
      "Controlled-access premises"
    ],
    illustration: IMAGES.armedGuardMining,
    illustrationCaption: "Armed Guarding: Vetted Bluestar armed security officer with shotgun, protective helmet, and radio on active patrol at a Zambian mining facility.",
    badgeLabel: "ARMED GUARDING & EXTRACTION SITES",
    iconName: "ShieldCheck"
  },
  {
    id: "residential-commercial",
    number: "02",
    title: "RESIDENTIAL & COMMERCIAL SECURITY",
    category: "Premises & Gatehouse Access",
    tagline: "Integrated perimeter security, barrier control, structured visitor logging protocols.",
    description: "Security planning may include perimeter control, access management, guard deployment, visitor procedures, patrol schedules and site-specific security protocols for commercial parks, estates, and corporate gates.",
    capabilities: [
      "Perimeter control & barrier operation",
      "Visitor identification procedures",
      "Gatehouse access control logging",
      "Guard deployment & scheduled checks",
      "Site-specific security protocols"
    ],
    typicalApplications: [
      "Private residences & estates",
      "Gate 3 & access control points",
      "Commercial parks & corporate offices",
      "Warehouses & logistics hubs",
      "Construction & infrastructure sites"
    ],
    illustration: gate3AccessAsset,
    illustrationCaption: "Access Control Operations: Bluestar guards at Gate 3 Access Control booth enforcing entry verification and visitor register logging.",
    badgeLabel: "ACCESS CONTROL & GATEHOUSE",
    iconName: "Building2"
  },
  {
    id: "mobile-patrol-rapid-response",
    number: "03",
    title: "MOBILE PATROL & RAPID RESPONSE",
    category: "Mobile Deterrence & Fleet Dispatch",
    tagline: "High-visibility patrol cruisers, prompt tactical intervention, dedicated operational fleet.",
    description: "Mobile patrol and response capability designed to provide visible deterrence, incident response and operational support. Deployments can include scheduled patrols, night patrols, alarm response and mobile security coverage subject to location, resources and applicable legal requirements.",
    capabilities: [
      "Scheduled day & night mobile patrols",
      "Emergency panic & alarm response",
      "High-visibility vehicle deterrence",
      "Mobile security coverage across Copperbelt",
      "Tactical reinforcement for static posts"
    ],
    typicalApplications: [
      "Zambia Commercial Parks & corridors",
      "Distributed mining & industrial zones",
      "Residential estates & suburban clusters",
      "Clients requiring a visible mobile presence"
    ],
    illustration: IMAGES.patrolCarRear,
    illustrationCaption: "Mobile Patrol & Rapid Response: Bluestar branded patrol vehicle on operational standby at Zambia Commercial Park.",
    badgeLabel: "RAPID RESPONSE PATROL FLEET",
    iconName: "Car"
  },
  {
    id: "cctv-alarms-access-control",
    number: "04",
    title: "CCTV, ALARMS & ACCESS CONTROL",
    category: "Electronic Surveillance & Installations",
    tagline: "Professional CCTV mounting, electrified perimeter fencing, biometric access management.",
    description: "Integrated electronic security solutions designed to improve situational awareness, access management and incident detection. Solutions may include CCTV, alarms, electric fencing, biometric access control, radio networks and related security technologies.",
    capabilities: [
      "Professional CCTV camera installation & servicing",
      "Alarm systems & beam sensors",
      "Electric fencing with anti-tamper triggers",
      "Biometric access control turnstiles",
      "Encrypted two-way radio intercom networks",
      "24/7 Monitoring & technical assessments"
    ],
    typicalApplications: [
      "Commercial storefronts & shopping centers",
      "Industrial plants & processing facilities",
      "Corporate executive offices",
      "Residential complexes & secure perimeters"
    ],
    illustration: IMAGES.cctvInstaller,
    illustrationCaption: "CCTV Installation & Electronics: Certified Bluestar technician mounting outdoor dome surveillance camera with safety gear and precision tools.",
    badgeLabel: "CCTV & ELECTRONIC SECURITY",
    iconName: "Radio"
  },
  {
    id: "investigations-evidence",
    number: "05",
    title: "INVESTIGATIONS & EVIDENCE HANDLING",
    category: "Specialized Intelligence & Forensic Audit",
    tagline: "Objective enquiry, asset tracking, lawful chain of custody and forensic documentation.",
    description: "Professional investigative support for security incidents, internal investigations and asset-related concerns. Services may include information gathering, incident documentation, tracing and tracking support, evidence preservation and structured reporting, subject to applicable law.",
    capabilities: [
      "Information gathering & field intelligence",
      "Incident reconstruction & documentation",
      "Asset loss tracing & recovery support",
      "Lawful evidence preservation chain",
      "Court-admissible structured reporting"
    ],
    typicalApplications: [
      "Workplace security breaches & fraud",
      "Internal corporate investigations",
      "Mineral & equipment theft tracing",
      "Documented operational reviews"
    ],
    illustration: radioCommsAsset,
    illustrationCaption: "Tactical Communications & Coordination: Baofeng transceivers providing instant link between command base and field operatives.",
    badgeLabel: "INVESTIGATIONS & EVIDENCE",
    iconName: "Search"
  },
  {
    id: "events-escort-transit",
    number: "06",
    title: "EVENTS, ESCORT & TRANSIT SECURITY",
    category: "Tactical Logistics & Convoy Safeguarding",
    tagline: "Convoy protection, VIP dignitary coverage, crowd dynamics and route safety audits.",
    description: "Planning may include route assessment, escort coordination, access control, crowd management and protective security measures based on assessed risk for valuable cargo and personnel transit.",
    capabilities: [
      "Valuable cargo & minerals in-transit protection",
      "VIP dignitary escort coordination",
      "High-risk route risk assessment",
      "Executive convoy protective security",
      "Corporate event & hospitality crowd control"
    ],
    typicalApplications: [
      "Copperbelt copper & mineral transit corridors",
      "High-value goods movements nationwide",
      "Corporate conferences & diplomatic events",
      "Executive airport & highway escorts"
    ],
    illustration: IMAGES.patrolCarSide,
    illustrationCaption: "Transit & Convoy Escort: High-visibility Bluestar response unit providing escort protection for valuable cargo and executive travel.",
    badgeLabel: "TRANSIT ESCORT & VIP",
    iconName: "Truck"
  },
  {
    id: "risk-assessment-advisory",
    number: "07",
    title: "RISK ASSESSMENT & ADVISORY",
    category: "Consultative Strategic Planning",
    tagline: "Vulnerability audits, standard operating procedures, threat analysis for modern enterprises.",
    description: "Professional advisory support to identify operational gaps, evaluate threat exposure and build practical protection requirements. Recommendations are structured around the client's environment, risk posture and operating conditions.",
    capabilities: [
      "Comprehensive site vulnerability audits",
      "Threat modeling & risk exposure profiling",
      "Security SOP development & standardisation",
      "Emergency response & evacuation planning",
      "Contractor & personnel security reviews"
    ],
    typicalApplications: [
      "Organizations commissioning new premises",
      "Mining & industrial security modernization",
      "Commercial entities preparing for operational change"
    ],
    illustration: IMAGES.shieldLogo,
    illustrationCaption: "Command-Level Risk Advisory: Formal security audits and standard operating procedures tailored to Zambian statutory frameworks.",
    badgeLabel: "STRATEGIC AUDIT & ADVISORY",
    iconName: "FileCheck"
  },
  {
    id: "k9-special-ops",
    number: "08",
    title: "K9 & SPECIAL OPERATIONS SUPPORT",
    category: "Specialized Canine & High-Risk Reinforcement",
    tagline: "Trained patrol dogs, handler teams, emergency tactical reinforcement.",
    description: "Specialist security support for higher-risk assignments, subject to operational requirements, available resources and applicable licensing. Services do not imply armed services or statutory police powers.",
    capabilities: [
      "Trained K9 guard dogs & handler teams",
      "Perimeter intruder detection & deterrence",
      "Gatehouse reinforcement with handler",
      "Emergency tactical team deployment",
      "High-risk perimeter containment"
    ],
    typicalApplications: [
      "Industrial & warehouse compound boundaries",
      "Mining perimeters & high-theft risk zones",
      "Special event containment & crowd deterrence",
      "Urgent security post reinforcement"
    ],
    illustration: IMAGES.dogHandler,
    illustrationCaption: "K9 Security Unit: Professional Bluestar dog handler with trained German Shepherd patrol dog in branded tactical harness.",
    badgeLabel: "K9 CANINE & SPECIAL OPS",
    iconName: "ShieldAlert"
  }
];

export const CORE_PILLARS: CompanyPillar[] = [
  {
    title: "DISCIPLINE",
    subtitle: "Command Standards",
    description: "Consistent adherence to standards, procedures and operational readiness at every post and engagement."
  },
  {
    title: "INTEGRITY",
    subtitle: "Uncompromising Trust",
    description: "Professional conduct, strict accountability and absolute trust across client premises and valuable assets."
  },
  {
    title: "VIGILANCE",
    subtitle: "Perpetual Awareness",
    description: "Constant awareness of threats, systemic vulnerabilities and shifting environmental risk conditions."
  },
  {
    title: "VERSATILITY",
    subtitle: "Custom Posture",
    description: "Security solutions adapted to diverse operating environments, from corporate hubs to remote heavy mining sites."
  },
  {
    title: "ADAPTABILITY",
    subtitle: "Dynamic Evolution",
    description: "Readiness to swiftly calibrate tactics, manpower, and technology as situational demands change."
  },
  {
    title: "QUICK ACTION",
    subtitle: "Decisive Intervention",
    description: "Prompt, controlled and professional response when emergent situations require immediate operational intervention."
  }
];

export const SECTORS: SectorItem[] = [
  {
    name: "Mining",
    threatProfile: "Perimeter intrusion, copper & machinery theft, remote territory logistics, access control.",
    keyServices: ["Regular & Armed Guarding", "Mobile Patrol", "K9 & Rapid Response", "Heavy Equipment Escort"]
  },
  {
    name: "Corporate & Commercial",
    threatProfile: "Unauthorized entry, intellectual property leakage, staff safety, visitor protocol.",
    keyServices: ["Access Control & CCTV", "Concierge Security", "Visitor Management", "Emergency Planning"]
  },
  {
    name: "Construction",
    threatProfile: "Material theft, plant equipment sabotage, open boundary vulnerability, after-hours breaches.",
    keyServices: ["Static Guarding", "Perimeter Patrols", "High-Intensity Night Searchlights", "Key Control"]
  },
  {
    name: "Residential & Estates",
    threatProfile: "Home invasion deterrence, gate barrier breaches, peace of mind for families and syndicates.",
    keyServices: ["Electric Fencing", "Perimeter Patrols", "Gatehouse Intercom", "Rapid Alarm Response"]
  },
  {
    name: "Warehousing & Logistics",
    threatProfile: "Pilferage, cargo inventory shrinkage, transit tampering, loading dock oversight.",
    keyServices: ["Inventory Access Checks", "Goods-in-Transit Escort", "24/7 CCTV Monitoring", "Guard Posts"]
  },
  {
    name: "Retail",
    threatProfile: "Shoplifting, customer crowd spikes, cash-in-hand vulnerability, after-hours glass security.",
    keyServices: ["Loss Prevention", "Visible Guard Deterrence", "Alarm Integration", "Incident Documentation"]
  },
  {
    name: "Events & Hospitality",
    threatProfile: "Unruly crowd surges, VIP dignitary exposure, venue capacity management, emergency egress.",
    keyServices: ["VIP Close Protection", "Crowd Management", "Access Badging", "Medical Liaison"]
  },
  {
    name: "Industrial Facilities",
    threatProfile: "Hazardous zone security, perimeter tampering, shift-change worker ingress/egress validation.",
    keyServices: ["Biometric Turnstiles", "Specialist High-Risk Patrols", "SOP Enforcement", "Fire Watch"]
  },
  {
    name: "Institutions",
    threatProfile: "School & college campus safety, hospital ward security, government bureau protection.",
    keyServices: ["Access Control", "Static Guarding", "Dispute De-escalation", "Emergency Protocols"]
  },
  {
    name: "Private Clients",
    threatProfile: "Targeted threats, personal property protection, executive convoy and estate peace.",
    keyServices: ["Bespoke Close Protection", "Private Residence Security", "Secure Chauffeuring", "Risk Advisory"]
  }
];

export const BOOKLET_PAGES = [
  {
    pageNumber: 1,
    title: "Front Cover",
    chapter: "Presentation",
    summary: "Command & Operational Precision Cover with Official Crest"
  },
  {
    pageNumber: 2,
    title: "Executive Mandate",
    chapter: "About & Philosophy",
    summary: "Command Experience, Civilian Precision, Mission & Vision"
  },
  {
    pageNumber: 3,
    title: "Directors & Command Squad",
    chapter: "Governance",
    summary: "Executive Directors & Operational Officers with Official Portraits"
  },
  {
    pageNumber: 4,
    title: "Guarding & Premises Security",
    chapter: "Core Services",
    summary: "Armed Mining Guard & Gate 3 Access Control Operations"
  },
  {
    pageNumber: 5,
    title: "Mobile Patrol & Rapid Response",
    chapter: "Tactical Fleet",
    summary: "Patrol Fleet at Zambia Commercial Park & Rapid Response"
  },
  {
    pageNumber: 6,
    title: "Electronic Security & CCTV Installations",
    chapter: "Technology",
    summary: "CCTV Installation Technician, Biometrics & Tactical Radios"
  },
  {
    pageNumber: 7,
    title: "K9 Canine Units & Specialist Operations",
    chapter: "Specialist Ops",
    summary: "Trained Dog Handler, Searchlights, Transit Escort & Investigations"
  },
  {
    pageNumber: 8,
    title: "Sectors We Serve",
    chapter: "Industry Matrix",
    summary: "Mining, Corporate, Industrial, Logistics & Estate Solutions"
  },
  {
    pageNumber: 9,
    title: "Why Choose Us: The Bluestar Standard",
    chapter: "Value Proof",
    summary: "6 Core Pillars, Vetting Assurance & Legal Compliance"
  },
  {
    pageNumber: 10,
    title: "Annex: Certificate of Incorporation",
    chapter: "Statutory Annex",
    summary: "PACRA Certificate of Incorporation & Legal Registration Details"
  },
  {
    pageNumber: 11,
    title: "Corporate Policies & Compliance Framework",
    chapter: "Compliance Framework",
    summary: "8 Core Policies, Police Clearance, Ethics, HSE & Statutory Framework"
  },
  {
    pageNumber: 12,
    title: "Operational Base & Inquiries",
    chapter: "Back Cover",
    summary: "Ndola Headquarters, 24/7 Dispatch Contacts & Nationwide Deployment"
  }
];

export interface CorporatePolicy {
  id: string;
  number: number;
  title: string;
  iconName: string;
  points: string[];
}

export const CORPORATE_POLICIES: CorporatePolicy[] = [
  {
    id: "vetting-recruitment",
    number: 1,
    title: "Vetting & Recruitment Policy",
    iconName: "ShieldCheck",
    points: [
      "100% Zambia Police clearance",
      "NRC & reference verification",
      "No criminal record",
      "Zero compromise on integrity"
    ]
  },
  {
    id: "code-of-conduct",
    number: 2,
    title: "Code of Conduct & Ethics",
    iconName: "Award",
    points: [
      "Zero tolerance: theft, sleeping on duty, alcohol, collusion",
      "Professional conduct 24/7",
      "Client respect"
    ]
  },
  {
    id: "use-of-force-firearms",
    number: 3,
    title: "Use of Force & Firearms Policy",
    iconName: "ShieldAlert",
    points: [
      "Compliant with Zambian law",
      "Force as last resort",
      "De-escalation first",
      "Firearms only where licensed and authorized - no police/military powers implied"
    ]
  },
  {
    id: "training-operational-readiness",
    number: 4,
    title: "Training & Operational Readiness",
    iconName: "Target",
    points: [
      "Basic security training",
      "Site-specific SOP training",
      "Monthly refresher & drills",
      "First aid & fire safety"
    ]
  },
  {
    id: "confidentiality-data-protection",
    number: 5,
    title: "Confidentiality & Data Protection",
    iconName: "Lock",
    points: [
      "Client information strictly confidential",
      "Compliant with Data Protection Act No. 3 of 2021"
    ]
  },
  {
    id: "hse-policy",
    number: 6,
    title: "Health, Safety & Environment (HSE)",
    iconName: "AlertTriangle",
    points: [
      "Compliant with OHS Act No. 36 of 2010",
      "PPE compliance",
      "Safe systems of work"
    ]
  },
  {
    id: "anti-bribery-corruption",
    number: 7,
    title: "Anti-Bribery & Corruption",
    iconName: "FileCheck",
    points: [
      "Zero tolerance",
      "No solicitation or acceptance of bribes",
      "Conflict of interest declaration"
    ]
  },
  {
    id: "disciplinary-accountability",
    number: 8,
    title: "Disciplinary & Accountability",
    iconName: "FileText",
    points: [
      "Immediate action on misconduct",
      "Aligned to Employment Code Act No. 3 of 2019",
      "Transparent reporting"
    ]
  }
];

export interface AttachedAssetItem {
  id: string;
  title: string;
  category: string;
  src: string;
  placement: string;
  pageNum: number;
  capabilities: string;
  description: string;
}

export const ATTACHED_ASSETS_MANIFEST: AttachedAssetItem[] = [
  {
    id: "kelvin-akapelwa",
    title: "Kelvin Akapelwa (Former Army Officer)",
    category: "Executive Command",
    src: IMAGES.kelvinAkapelwa,
    placement: "Page 3 (Governance & Directors) & Executive Dossier",
    pageNum: 3,
    capabilities: "Tactical command experience, specialized guard training, vetting, and operational oversight.",
    description: "Official portrait of Kelvin Akapelwa in uniform. Serves as Director - Operations & Training."
  },
  {
    id: "ronald-mwanza",
    title: "Ronald Mwanza (Director - Finance & Marketing)",
    category: "Executive Command",
    src: IMAGES.ronaldMwanza,
    placement: "Page 3 (Governance & Directors) & Executive Dossier",
    pageNum: 3,
    capabilities: "Financial governance, commercial marketing strategy, client alliances, and nationwide expansion.",
    description: "Executive portrait of Ronald Mwanza wearing official Bluestar navy polo. Serves as Director - Finance & Marketing."
  },
  {
    id: "chipo-mulenga",
    title: "Chipo Mulenga (HR and Liaison Officer)",
    category: "Personnel & Compliance",
    src: IMAGES.chipoMulenga,
    placement: "Page 3 (Governance & Directors) & Executive Dossier",
    pageNum: 3,
    capabilities: "Guard background vetting, statutory compliance, personnel welfare, and regulatory liaison.",
    description: "Official portrait of Chipo Mulenga in navy Bluestar shirt with 'CHIPO MULENGA HR Officer' tag and embroidered gold laurel crest."
  },
  {
    id: "joseph-ngimbu",
    title: "JOSEPH NGIMBU (Supervisor Operations Dept)",
    category: "Field Operations",
    src: IMAGES.josephNgimbu,
    placement: "Page 3 (Governance & Directors) & Executive Dossier",
    pageNum: 3,
    capabilities: "Site-level inspections, shift handovers, guard discipline, and frontline supervisor patrols.",
    description: "Field supervisor portrait of Joseph Ngimbu featuring the official 'Field Supervisor' epaulet tag."
  },
  {
    id: "armed-guard-mining",
    title: "Armed Guard at Copper Mining Extraction Site",
    category: "Heavy Industrial Security",
    src: IMAGES.armedGuardMining,
    placement: "Page 4 (Regular & Armed Guarding)",
    pageNum: 4,
    capabilities: "Armed deterrence, perimeter watch, mining pit protection, and high-value mineral safeguarding.",
    description: "Vetted armed guard with tactical shotgun, professional protective helmet, and radio on active patrol at an open-cast copper mining pit in Zambia."
  },
  {
    id: "access-control-guards",
    title: "Gate 3 Access Control Guard Station",
    category: "Premises Security",
    src: IMAGES.accessControlGuards,
    placement: "Page 4 (Residential & Commercial Security)",
    pageNum: 4,
    capabilities: "Access verification, visitor logging, barrier control, and vehicle inspection.",
    description: "Uniformed Bluestar guards on duty at Gate 3 access booth enforcing strict visitor check-in, identity validation, and access logs."
  },
  {
    id: "patrol-car-rear",
    title: "Rapid Response Patrol Fleet (Commercial Park)",
    category: "Mobile Deterrence",
    src: IMAGES.patrolCarRear,
    placement: "Page 5 (Mobile Patrol & Rapid Response)",
    pageNum: 5,
    capabilities: "24/7 scheduled patrols, alarm response dispatch, and visible deterrence across Copperbelt.",
    description: "Bluestar branded patrol vehicle with star crest livery on operational patrol standby at Zambia Commercial Park."
  },
  {
    id: "patrol-car-side",
    title: "Escort & Convoy Patrol Vehicle (Side Profile)",
    category: "Transit Security",
    src: IMAGES.patrolCarSide,
    placement: "Page 7 (Events, Escort & Transit)",
    pageNum: 7,
    capabilities: "High-visibility escort for valuable cargo, minerals, and executive movements nationwide.",
    description: "Crisp side profile of Bluestar response vehicle showing doors branded with the official Bluestar shield emblem."
  },
  {
    id: "cctv-installer",
    title: "CCTV Installation & Electronic Systems Technician",
    category: "Electronic Security",
    src: IMAGES.cctvInstaller,
    placement: "Page 6 (CCTV, Alarms & Access Control)",
    pageNum: 6,
    capabilities: "Surveillance camera mounting, wiring, electric fencing, and biometric sensor installation.",
    description: "Certified Bluestar technician with hard hat, safety glasses, and cordless drill installing high-resolution dome camera."
  },
  {
    id: "dog-handler",
    title: "K9 Patrol Dog Handler with German Shepherd",
    category: "Specialist Operations",
    src: IMAGES.dogHandler,
    placement: "Page 7 (K9 & Special Operations Support)",
    pageNum: 7,
    capabilities: "Intruder deterrence, perimeter containment, specialized canine patrols, and compound security.",
    description: "Uniformed Bluestar dog handler standing alongside a trained German Shepherd in a branded tactical chest harness."
  },
  {
    id: "shield-logo",
    title: "Official Bluestar Shield Crest",
    category: "Corporate Brand Seal",
    src: IMAGES.shieldLogo,
    placement: "Page 1 (Cover), Page 2, Page 10 & Headers",
    pageNum: 1,
    capabilities: "Official heraldic identity, gold laurel wreath, five-point star, and blue security shield.",
    description: "Authoritative brand emblem representing Bluestar Security Solutions Limited's command ethos and corporate integrity."
  },
  {
    id: "radio-comms",
    title: "Baofeng UHF/VHF Tactical Two-Way Comms",
    category: "Tactical Communications",
    src: IMAGES.radioComms,
    placement: "Page 6 (Electronic Security & Comms)",
    pageNum: 6,
    capabilities: "Multichannel radio communications, covert earpieces, base-to-guard real-time reporting.",
    description: "Fleet of four Baofeng tactical handheld radios on charging cradles with acoustic-tube headsets."
  }
];

