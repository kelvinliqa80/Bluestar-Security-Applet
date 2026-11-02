import React from 'react';
import { 
  Download, 
  Printer, 
  Sparkles, 
  Palette, 
  FileText, 
  ChevronUp, 
  ArrowLeft,
  Share2
} from 'lucide-react';
import { BOOKLET_PAGES, IMAGES } from '../data/bookletData';
import { BookletTheme, BOOKLET_THEMES } from '../data/themes';
import { BookletPageRenderer } from './BookletPageRenderer';
import { downloadSinglePage } from '../utils/pdfGenerator';

interface AllPagesBookletViewProps {
  currentTheme: BookletTheme;
  onThemeChange: (theme: BookletTheme) => void;
  onOpenPdfModal: () => void;
  onNativePrint: () => void;
  onBackToReader: () => void;
  onRequestQuote: () => void;
}

export const AllPagesBookletView: React.FC<AllPagesBookletViewProps> = ({
  currentTheme,
  onThemeChange,
  onOpenPdfModal,
  onNativePrint,
  onBackToReader,
  onRequestQuote
}) => {
  const scrollToPage = (pageNum: number) => {
    const el = document.getElementById(`visible-page-${pageNum}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadSingle = async (pageNum: number) => {
    try {
      await downloadSinglePage(
        `visible-page-${pageNum}`,
        `Bluestar_Booklet_Page_${pageNum}_${currentTheme.id}.png`
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen py-6 px-2 sm:px-4">
      
      {/* Floating Control Bar */}
      <div className="sticky top-16 z-30 w-full max-w-4xl p-3 mb-8 rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-md shadow-2xl flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: View Switching & Page Quick Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={onBackToReader}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Single Page Reader</span>
          </button>

          <span className="text-slate-700 hidden sm:inline">|</span>

          {/* Quick Page Jump Chips */}
          <div className="hidden md:flex items-center gap-1">
            {BOOKLET_PAGES.map((p) => (
              <button
                key={p.pageNumber}
                onClick={() => scrollToPage(p.pageNumber)}
                className="w-6 h-6 rounded text-[10px] font-mono font-bold bg-slate-950 text-slate-400 hover:text-white hover:bg-blue-600 transition-colors"
                title={`Jump to Page ${p.pageNumber}: ${p.title}`}
              >
                {p.pageNumber}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Theme & Export Actions */}
        <div className="flex items-center gap-2">
          
          {/* Theme Dropdown */}
          <select
            value={currentTheme.id}
            onChange={(e) => {
              const th = BOOKLET_THEMES.find(t => t.id === e.target.value);
              if (th) onThemeChange(th);
            }}
            className="px-2.5 py-1.5 text-xs rounded-lg bg-slate-950 border border-slate-800 text-slate-300 focus:outline-none focus:border-blue-500 cursor-pointer"
            title="Switch Booklet Page Color Theme"
          >
            {BOOKLET_THEMES.map(th => (
              <option key={th.id} value={th.id}>{th.name}</option>
            ))}
          </select>

          {/* Direct Print Button */}
          <button
            onClick={onNativePrint}
            className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 border border-slate-700"
          >
            <Printer className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">Print (A4)</span>
          </button>
        </div>

      </div>

      {/* Intro Header */}
      <div className="w-full max-w-4xl text-center mb-8 space-y-2">
        <div className="inline-block px-3 py-1 text-xs font-mono tracking-widest uppercase rounded border border-blue-500/30 bg-blue-950/40 text-blue-300">
          ALL 12 PAGES · HIGH-PRECISION A4 BOOKLET DOSSIER
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Complete Printable Booklet Dossier
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Meticulously structured in accordance with official Zambian security specifications, command governance, and tactical capabilities.
        </p>
      </div>

      {/* Sequentially Stacked A4 Pages Container */}
      <div className="flex flex-col items-center gap-12 w-full max-w-4xl">
        {BOOKLET_PAGES.map((page) => (
          <div key={page.pageNumber} className="w-full flex flex-col items-center">
            
            {/* Page Header Bar */}
            <div className="w-full max-w-[794px] flex items-center justify-between pb-2 px-2 text-xs text-slate-400 font-mono">
              <span className="text-blue-400 font-bold">
                PAGE {String(page.pageNumber).padStart(2, '0')} // {page.title.toUpperCase()}
              </span>
              <span className="text-slate-400 text-[11px]">{page.chapter}</span>
            </div>

            {/* A4 Sheet Element */}
            <div
              id={`visible-page-${page.pageNumber}`}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl border ${currentTheme.borderSubtle} ${currentTheme.bgPage}`}
              style={{
                width: '100%',
                maxWidth: '794px',
                minHeight: '880px',
                aspectRatio: '1 / 1.414',
                boxSizing: 'border-box'
              }}
            >
              <BookletPageRenderer
                pageNumber={page.pageNumber}
                theme={currentTheme}
                isPrintView={false}
              />
            </div>

          </div>
        ))}
      </div>

      {/* Single Bottom Download Action Bar & Back to Top */}
      <div className="mt-14 mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onOpenPdfModal}
          className="px-8 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-xl shadow-blue-600/30 inline-flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>Download Company Profile Booklet (All 12 Pages PDF)</span>
        </button>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-5 py-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-colors inline-flex items-center gap-2 shadow-lg"
        >
          <ChevronUp className="w-4 h-4" /> Back to Top
        </button>
      </div>

    </div>
  );
};
