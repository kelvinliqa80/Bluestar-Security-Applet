/**
 * AI Prompt Generator Data for Google AI (Gemini) and Manus AI Agents.
 * Engineered to instruct agents to generate a standard, meticulously classic,
 * professional Company Profile Booklet with color-coded pages and strategic asset placement.
 */

export interface PromptConfig {
  agent: "google-ai" | "manus-ai" | "universal";
  paletteTheme: "command-navy" | "tactical-onyx" | "executive-white" | "alternating-spreads";
  focusSector: "copperbelt-mining" | "corporate-commercial" | "balanced-nationwide";
  pageOrientation: "landscape-spread" | "portrait-a4";
}

export function generateBookletPrompt(config: PromptConfig): string {
  const isManus = config.agent === "manus-ai";
  const isGoogle = config.agent === "google-ai";

  const paletteDescription = {
    "command-navy": "Primary Command Palette: Deep Midnight Navy (#071120, #0B192C) with Royal Blue (#1D4ED8), Silver Platinum (#E2E8F0), and crisp White headers. Provides an elite tactical command and corporate protection presence.",
    "tactical-onyx": "Tactical Stealth Palette: Deep Carbon Onyx (#0A0A0A, #121212) paired with Brushed Steel (#475569) and Warm Amber Gold (#D97706) for a high-security tactical contractor aura.",
    "executive-white": "Corporate Clean White Palette: Crisp pure white pages (#FFFFFF) with high-density Deep Navy typography (#0F172A), Slate borders (#E2E8F0), and royal blue accents for traditional corporate boardroom printing.",
    "alternating-spreads": "Dynamic Multi-Color Editorial Spreads: Alternating rhythmic page spreads: Cover in Deep Obsidian Navy, Executive Briefing in Crisp Platinum Light, Tactical Fleet in Midnight Cobalt, and Technology in High-Tech Slate."
  }[config.paletteTheme];

  const sectorFocusNote = {
    "copperbelt-mining": "Give special operational prominence to the Copperbelt Province mining corridor (copper, cobalt, heavy machinery transit, perimeter intrusion deterrence, and high-risk extraction site safeguarding).",
    "corporate-commercial": "Emphasize high-end corporate campuses, commercial towers, financial institutions, and executive risk advisory.",
    "balanced-nationwide": "Balance heavy mining and industrial infrastructure with urban corporate campuses, residential estates, and nationwide logistics escort."
  }[config.focusSector];

  const agentHeader = isManus
    ? `[SYSTEM TASK INSTRUCTION: MANUS AI AUTONOMOUS BUILD AGENT]`
    : isGoogle
    ? `[PROMPT FOR GOOGLE AI STUDIO / GEMINI 2.5 / 2.0 ADVANCED]`
    : `[UNIVERSAL AI PROMPT: ADVANCED COMPANY PROFILE BOOKLET GENERATOR]`;

  return `${agentHeader}
ROLE: Senior Tactical Command & Corporate Publication Designer, Executive Art Director, and Systems Architect.

OBJECTIVE:
Design and build a meticulous, classic, high-prestige 10-Page Company Profile Booklet for "BLUE STAR SECURITY SOLUTIONS LIMITED" (Command & Operational Precision), based in Ndola, Copperbelt Province, Zambia with nationwide deployment capability across Zambia.

CORE BRANDING & EDITORIAL COPY:
- Company Name: BLUE STAR SECURITY SOLUTIONS LIMITED
- Tagline & Subtitle: "Command & Operational Precision" / "Command experience. Civilian precision."
- Location & Headquarters: Ndola, Copperbelt Province, Zambia (Nationwide Zambian Deployment Capability).
- Mission: "To protect people, assets, information and infrastructure through disciplined, vetted and professionally trained security personnel, supported by effective procedures, technology and responsive operational management."
- Vision: "To deliver cutting-edge, uncompromised protection services across Zambia while setting a professional standard for disciplined and responsive security operations."
- Why Choose Us (6 Pillars): Discipline (Standards adherence), Integrity (Trust & accountability), Vigilance (Perpetual awareness), Versatility (Adapted posture), Adaptability (Resource calibration), Quick Action (Prompt, controlled intervention).
- Executive Leadership Squad:
  1. Kelvin Akapelwa — Director - Operations & Training (Former Army Officer)
  2. Ronald Mwanza — Director - Finance & Marketing
  3. Chipo Mulenga — HR & Liaison Officer
  4. Martin Mulenga — Supervisor Operations Dept (Field Supervisor)
  5. Simon Mwiinga — Investigations Officer (Sensitive Post)
- 8 Core Service Solutions:
  1. Regular & Armed Guarding (Static guarding, access control, gatehouses, visitor logs, armed security where authorized)
  2. Residential & Commercial Security (Perimeter control, guard deployment, patrol schedules, site protocols)
  3. Mobile Patrol & Rapid Response (Scheduled patrols, night patrols, alarm response, mobile security coverage)
  4. CCTV, Alarms & Access Control (CCTV, electric fencing, biometric access, 24/7 monitoring)
  5. Investigations & Evidence Handling (Information gathering, tracing, evidence preservation, structured reporting)
  6. Events, Escort & Transit Security (VIP protection, crowd control, goods-in-transit, route risk assessment)
  7. Risk Assessment & Advisory (Site audits, SOP development, emergency planning, threat assessments)
  8. K9 & Special Operations Support (K9 units, reinforced manpower, emergency high-risk operational support)
- Mandatory Compliance Notice: "All deployments are subject to operational requirements, applicable Zambian laws and licensing conditions. Armed security where legally authorized. Services do not imply armed services or statutory police powers."
- Contact & Dispatch:
  * Emails: bluestar.solutions@hotmail.com
  * Direct Phones: 0979728718 | 0967991845 (International: +260 979 728 718 / +260 967 991 845)
  * Operations Base: Ndola, Copperbelt Province, Zambia

COLOR PALETTE & PAGE THEME SPECIFICATION:
${paletteDescription}
- Page Format: ${config.pageOrientation === "portrait-a4" ? "Standard A4 Portrait Booklet (210mm x 297mm)" : "Executive A4 Landscape Booklet / Slide Spread (297mm x 210mm)"}.
- Page-by-Page Color Rhythm: Implement rhythmic color pacing so reader fatigue is prevented. Use subtle metallic silver/gold hairline borders (1px) and zero clunky drop shadows.
- Sector Specialization: ${sectorFocusNote}

STRATEGIC IMAGE & ASSET PLACEMENT PROTOCOL:
1. Official Shield Logo (Twin Swords & Star crest with 'Bluestar Security Services' banner):
   - Place prominently on the Front Cover as the central heraldic authority seal.
   - Embed in the running header of internal pages (Pages 2 through 9) as a subtle, high-resolution watermark or top-left crest lockup.
   - Re-anchor on the Back Cover as the final official seal of verification.
2. Physical Presence Guard Image (Officer in navy uniform with Bluestar arm flash and back decal):
   - Feature prominently on Page 4 (Regular & Armed Guarding / Residential Security) to illustrate vetted physical presence, uniform discipline, and access control posture.
3. Rapid Response Patrol Car Image (Official Bluestar branded vehicle):
   - Place prominently on Page 5 (Mobile Patrol & Rapid Response) to illustrate visible deterrence, operational mobility, and prompt response across the Copperbelt.
4. Two-Way Radio Communications Set (Baofeng tactical transceivers with surveillance earpieces & chargers):
   - Place on Page 6 (CCTV, Alarms & Access Control / Communications) to illustrate instantaneous command link, encrypted tactical chatter, and coordinated dispatch.
5. High-Power Tactical Searchlight / Torch:
   - Place on Page 7 (Specialist Operations, Investigations & Night Reconnaissance) illustrating 24/7 perimeter sweeps and nocturnal deterrence capabilities.

PAGE-BY-PAGE BOOKLET STRUCTURE (10 PAGES):
- Page 1: HEROIC COVER — Official Crest, Company Title, Subtitle, Ndola HQ, Document Security Classification.
- Page 2: EXECUTIVE MANDATE & PHILOSOPHY — About Bluestar, Zambian reach, Mission & Vision statements.
- Page 3: LEADERSHIP & COMMAND SQUAD — Kelvin Akapelwa (Former Army Officer) & Directors, organizational hierarchy.
- Page 4: PHYSICAL GUARDING & PREMISES SECURITY — Services 01 & 02 with Guard Presence photo and capability list.
- Page 5: MOBILE PATROL & RAPID RESPONSE FLEET — Service 03 with Rapid Response Patrol Car photo and deployment metrics.
- Page 6: ELECTRONIC SECURITY & TACTICAL COMMS — Service 04 with Tactical Two-Way Radios photo, electric fencing & CCTV.
- Page 7: SPECIALIST OPERATIONS & RISK ADVISORY — Services 05, 06, 07, 08 with Searchlight photo, K9, Transit, Investigations.
- Page 8: SECTORS WE SERVE MATRIX — 10 Key Zambian Sectors (Mining, Corporate, Industrial, Estates, Logistics, etc.).
- Page 9: THE BLUESTAR STANDARD — 6 Core Pillars (Discipline, Integrity, Vigilance, Versatility, Adaptability, Quick Action) + Legal footnote.
- Page 10: BACK COVER & DISPATCH COORDINATES — Ndola Operations Base, 24/7 Dispatch phone lines, email, deployment request.

QUALITY BENCHMARKS:
- Clean editorial typography pairing (e.g. Outfit/Cinzel display + Plus Jakarta Sans body + JetBrains Mono for tabular metrics).
- Zero AI buzzwords: state concrete security operational procedures.
- Legible printable layout with crisp contrast compliance (WCAG AA).
${isManus ? "- Output a self-contained responsive interactive web application with page-flip animation, color theme switcher, and direct PDF print preview." : "- Output clean, pristine, copy-pasteable code or publication-ready markdown with designated image slot coordinates."}`;
}
