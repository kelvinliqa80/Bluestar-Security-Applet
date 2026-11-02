export interface BookletTheme {
  id: string;
  name: string;
  description: string;
  bgPage: string;
  bgCard: string;
  bgHeader: string;
  borderSubtle: string;
  borderStrong: string;
  accentPrimary: string;
  accentSecondary: string;
  textHeading: string;
  textBody: string;
  textMuted: string;
  accentBadge: string;
  shieldGlow: string;
  isLight?: boolean;
}

export const BOOKLET_THEMES: BookletTheme[] = [
  {
    id: "slate-cream-white",
    name: "Slate Cream White",
    description: "Elegant, soft cream-white background with professional slate typography for readable corporate print.",
    bgPage: "bg-slate-50 text-slate-900",
    bgCard: "bg-white border-slate-200",
    bgHeader: "bg-slate-50/95 border-slate-200",
    borderSubtle: "border-slate-200",
    borderStrong: "border-slate-400/40",
    accentPrimary: "text-slate-900 bg-slate-800 text-white",
    accentSecondary: "text-slate-700",
    textHeading: "text-slate-950",
    textBody: "text-slate-800",
    textMuted: "text-slate-600",
    accentBadge: "bg-slate-200 text-slate-900 border-slate-300 font-semibold",
    shieldGlow: "shadow-[0_4px_20px_rgba(30,41,59,0.1)]",
    isLight: true
  }
];
