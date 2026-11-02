import React from 'react';
import { BookOpen, Layers, FileText, Sparkles } from 'lucide-react';
import { IMAGES } from '../data/bookletData';

export type AppViewMode = 'booklet' | 'all-pages' | 'dossier' | 'flyers';

interface HeaderNavProps {
  currentView: AppViewMode;
  onViewChange: (view: AppViewMode) => void;
  onRequestQuote: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentView,
  onViewChange,
  onRequestQuote
}) => {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between gap-8 px-4 sm:px-8 py-3.5 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md no-print">
      
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-2.5 whitespace-nowrap shrink-0">
        <img 
          src={IMAGES.shieldLogo} 
          alt="Bluestar Shield" 
          className="w-7 h-7 object-contain drop-shadow"
        />
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onViewChange('booklet'); }}
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
        >
          BLUESTAR SECURITY SOLUTIONS
        </a>
      </div>

      {/* Zone 2: Clean single-line text navigation links */}
      <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-300">
        <button
          onClick={() => onViewChange('booklet')}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
            currentView === 'booklet' ? 'text-blue-400 font-semibold' : ''
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Booklet Reader</span>
        </button>

        <button
          onClick={() => onViewChange('all-pages')}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
            currentView === 'all-pages' ? 'text-blue-400 font-semibold' : ''
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>All 12 Pages (PDF)</span>
        </button>

        <button
          onClick={() => onViewChange('flyers')}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
            currentView === 'flyers' ? 'text-blue-400 font-semibold' : ''
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Flyers & Brochures</span>
        </button>

        <button
          onClick={() => onViewChange('dossier')}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
            currentView === 'dossier' ? 'text-blue-400 font-semibold' : ''
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Executive Dossier</span>
        </button>
      </nav>

      {/* Zone 3: Direct Emergency / Command Dispatch Line */}
      <div className="hidden lg:flex items-center gap-3 shrink-0">
        <button
          onClick={onRequestQuote}
          className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
        >
          Request Quote
        </button>
        <a
          href="tel:+260979728718"
          className="text-xs font-mono font-medium text-blue-400 hover:text-blue-300"
        >
          HQ: 0979 728 718
        </a>
      </div>

    </header>
  );
};
