import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Phone, Mail, MapPin, Layers, Settings, Palette, Download, Printer, ChevronLeft, ChevronRight, MessageCircle, ChevronDown, Scale, ShieldCheck, FileLock2, ShieldAlert
} from 'lucide-react';
import { BookletTheme, BOOKLET_THEMES } from '../data/themes';
import { COMPANY_DETAILS, IMAGES, BOOKLET_PAGES } from '../data/bookletData';
import { BookletPageRenderer } from './BookletPageRenderer';
import { LegalTabType } from './LegalDossierModal';

interface ExecutiveDossierLandingProps {
  currentTheme: BookletTheme;
  onThemeChange: (theme: BookletTheme) => void;
  onRequestQuote: () => void;
  onNativePrint: () => void;
  onOpenLegal?: (tab: LegalTabType) => void;
}

export const ExecutiveDossierLanding: React.FC<ExecutiveDossierLandingProps> = ({
  currentTheme,
  onThemeChange,
  onRequestQuote,
  onNativePrint,
  onOpenLegal
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, BOOKLET_PAGES.length - 1));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      
      {/* Collapsible Menu */}
      <motion.div
        className="fixed inset-y-0 right-0 z-50 w-80 bg-slate-900 border-l border-slate-800 p-6 shadow-2xl flex flex-col justify-between"
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <img src={IMAGES.shieldLogo} alt="Bluestar" className="w-6 h-6 object-contain" />
              <span className="font-black text-xs uppercase tracking-wider text-white">Command Menu</span>
            </div>
            <button 
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Legal & Compliance Section */}
          <div className="space-y-2">
            <h3 className="font-bold uppercase text-[11px] text-blue-400 tracking-widest flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5" /> Legal & Compliance
            </h3>
            <div className="grid gap-1.5">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenLegal?.('privacy');
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold bg-slate-950 hover:bg-blue-950/60 border border-slate-800 hover:border-blue-700/60 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Privacy Data Policy</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 group-hover:text-blue-300">ZDPA 2021</span>
              </button>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenLegal?.('terms');
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold bg-slate-950 hover:bg-blue-950/60 border border-slate-800 hover:border-blue-700/60 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2">
                  <FileLock2 className="w-4 h-4 text-blue-400" />
                  <span>Terms of Use & Service</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 group-hover:text-blue-300">Zambia</span>
              </button>
            </div>
          </div>

          {/* Themes */}
          <div className="space-y-3">
            <h3 className="font-bold uppercase text-[11px] text-slate-500 tracking-widest flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5" /> Booklet Styling
            </h3>
            <div className="grid gap-2">
              {BOOKLET_THEMES.map(theme => (
                <button
                  key={theme.id}
                  onClick={() => onThemeChange(theme)}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    currentTheme.id === theme.id 
                      ? 'bg-blue-600 text-white font-bold shadow-md' 
                      : 'bg-slate-950/60 hover:bg-slate-800 text-slate-300 border border-slate-800/80'
                  }`}
                >
                  {theme.name}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <h3 className="font-bold uppercase text-[11px] text-slate-500 tracking-widest">Quick Actions</h3>
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-2.5 px-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" /> Request Quote / Deployment
            </button>
            <button 
              onClick={onNativePrint} 
              className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" /> Print Complete Booklet
            </button>
          </div>
        </div>

        {/* Footer info in menu */}
        <div className="pt-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono space-y-1">
          <div>BLUESTAR SECURITY SOLUTIONS LTD</div>
          <div>Plot 1621 Ndola Township, Copperbelt, Zambia</div>
          <div className="text-blue-400 font-bold">Zambia Data Protection Act Compliant</div>
        </div>
      </motion.div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 py-3.5 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={IMAGES.shieldLogo} alt="Bluestar" className="w-9 h-9 object-contain drop-shadow" />
          <div className="hidden sm:block">
            <h1 className="text-xs font-black tracking-wider uppercase text-white">
              BLUESTAR SECURITY SOLUTIONS
            </h1>
            <p className="text-[10px] font-mono text-slate-400">
              Executive Profile & Operational Dossier · Ndola, Zambia
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Legal Quick Action */}
          <button
            onClick={() => onOpenLegal?.('privacy')}
            className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-blue-300 border border-slate-700/80 hover:border-blue-500/50 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
            title="View Privacy Data & Terms of Service"
          >
            <Scale className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden md:inline">Legal & Terms</span>
          </button>

          {/* Request Quote Button */}
          <button
            onClick={onRequestQuote}
            className="px-3 sm:px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-900/30 transition-all active:scale-95 flex items-center gap-1.5"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Request Quote</span>
          </button>

          {/* Menu Trigger */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            title="Open Menu"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Flippable View */}
      <main className="h-screen flex items-center justify-center p-3 pt-16 pb-20">
        <div className="relative w-full max-w-4xl aspect-[1/1.4] perspective-1000 flex items-center gap-4">
          
          {/* Page Container */}
          <motion.div
            className="flex-1 h-full relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full bg-slate-900 border border-slate-700 shadow-2xl rounded-2xl overflow-y-auto scrollbar-hide relative group"
              >
                <div className="min-h-full flex flex-col">
                  <BookletPageRenderer 
                    pageNumber={BOOKLET_PAGES[currentPage].pageNumber} 
                    theme={currentTheme} 
                    isPrintView={false} 
                    onGoToFirstPage={() => setCurrentPage(0)}
                    onOpenLegal={onOpenLegal}
                  />
                </div>

                {/* Vertical Scroll Indicators - Always visible for better UX */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 pointer-events-none z-30">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest [writing-mode:vertical-lr] text-blue-500 opacity-80">
                      Scroll Down
                    </span>
                    <div className="p-1.5 bg-blue-600/20 rounded-full text-blue-500 backdrop-blur-sm border border-blue-500/30 animate-bounce">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </main>

      {/* Navigation Controls & Persistent Legal Footer */}
      <div className="fixed bottom-3 left-0 right-0 flex flex-col items-center gap-2 z-40 pointer-events-none">
        
        {/* Previous / Page Indicator / Next */}
        <div className="flex items-center justify-center gap-3 pointer-events-auto">
          <button 
            onClick={prevPage} 
            disabled={currentPage === 0}
            className={`p-2.5 sm:p-3 bg-slate-900/90 border border-slate-700 text-white rounded-full shadow-xl transition-all ${currentPage === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-blue-600 hover:border-blue-500 active:scale-95'}`}
            title="Previous Page"
          >
            <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>

          <div className="px-3.5 sm:px-4 py-1.5 sm:py-2 bg-slate-900/95 border border-slate-700/80 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wider text-slate-300 shadow-xl backdrop-blur-md">
            <span className="text-blue-400">PAGE {currentPage + 1}</span> / {BOOKLET_PAGES.length}
          </div>

          <button 
            onClick={nextPage} 
            disabled={currentPage === BOOKLET_PAGES.length - 1}
            className={`p-2.5 sm:p-3 bg-slate-900/90 border border-slate-700 text-white rounded-full shadow-xl transition-all ${currentPage === BOOKLET_PAGES.length - 1 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-blue-600 hover:border-blue-500 active:scale-95'}`}
            title="Next Page"
          >
            <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        </div>

        {/* Footer Legal & Compliance Direct Access Bar */}
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono text-slate-400 pointer-events-auto bg-slate-950/80 px-3.5 py-1 rounded-full border border-slate-800 backdrop-blur-sm">
          <button
            onClick={() => onOpenLegal?.('privacy')}
            className="hover:text-blue-400 underline underline-offset-2 transition-colors cursor-pointer"
          >
            Privacy Data Policy
          </button>
          <span>·</span>
          <button
            onClick={() => onOpenLegal?.('terms')}
            className="hover:text-blue-400 underline underline-offset-2 transition-colors cursor-pointer"
          >
            Terms of Use
          </button>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-slate-500">Ndola, Copperbelt, Zambia</span>
        </div>

      </div>

      {/* WhatsApp/Call Floating Action Buttons */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp - 0975665700 */}
        <a
          href="https://wa.me/260975665700"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center border border-emerald-400/30 cursor-pointer"
          title="WhatsApp Inquiry: 0975 665 700"
        >
          <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6" />
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900/95 text-emerald-400 text-xs font-mono font-bold rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-700">
            WhatsApp: 0975 665 700
          </span>
        </a>

        {/* Direct Call - 0979728918 (Airtel) */}
        <a
          href="tel:+260979728918"
          className="group relative p-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center border border-blue-400/30"
          title="Direct Call Dispatch (Airtel: 0979 728 918)"
        >
          <Phone className="w-5 sm:w-6 h-5 sm:h-6" />
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900/95 text-blue-400 text-xs font-mono font-bold rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-700">
            Call Dispatch: 0979 728 918 (Airtel)
          </span>
        </a>
      </div>
    </div>
  );
};
