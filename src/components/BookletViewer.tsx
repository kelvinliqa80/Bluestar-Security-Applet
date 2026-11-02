import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Printer, 
  Sparkles, 
  ZoomIn, 
  ZoomOut, 
  Download,
  List,
  FileText,
  ShieldCheck,
  Check
} from 'lucide-react';
import { BOOKLET_PAGES, IMAGES, COMPANY_DETAILS } from '../data/bookletData';
import { BookletTheme, BOOKLET_THEMES } from '../data/themes';
import { BookletPageRenderer } from './BookletPageRenderer';
import { downloadSinglePage } from '../utils/pdfGenerator';

interface BookletViewerProps {
  currentTheme: BookletTheme;
  onThemeChange: (theme: BookletTheme) => void;
  onOpenPdfModal: () => void;
  onViewAllPages: () => void;
  onRequestQuote: () => void;
  onPrintBooklet: () => void;
}

export const BookletViewer: React.FC<BookletViewerProps> = ({
  currentTheme,
  onThemeChange,
  onOpenPdfModal,
  onViewAllPages,
  onRequestQuote,
  onPrintBooklet
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [showTocDrawer, setShowTocDrawer] = useState(false);
  const [downloadingSingle, setDownloadingSingle] = useState(false);
  const totalPages = BOOKLET_PAGES.length;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentPage(prev => Math.max(prev - 1, 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalPages]);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleDownloadCurrentPage = async () => {
    setDownloadingSingle(true);
    try {
      await downloadSinglePage(
        'current-booklet-page-frame',
        `Bluestar_Booklet_Page_${currentPage}_${currentTheme.id}.png`
      );
    } catch (e) {
      console.error(e);
    } finally {
      setDownloadingSingle(false);
    }
  };

  const pageMeta = BOOKLET_PAGES.find(p => p.pageNumber === currentPage) || BOOKLET_PAGES[0];

  return (
    <div className="flex flex-col items-center w-full min-h-[calc(100vh-5rem)] py-4 px-2 sm:px-4">
      
      {/* Booklet Navigation & Tool Bar */}
      <div className="w-full max-w-4xl flex flex-wrap items-center justify-between gap-3 p-3 mb-4 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-md shadow-lg">
        
        {/* Left: Table of Contents & Page Indicator */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowTocDrawer(!showTocDrawer)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors flex items-center gap-1.5 ${
              showTocDrawer 
                ? 'bg-blue-600 text-white border-blue-500' 
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>Index ({totalPages} Pages)</span>
          </button>

          <div className="text-xs font-mono text-slate-400 pl-2">
            <span className="text-white font-bold">{String(currentPage).padStart(2, '0')}</span> / {String(totalPages).padStart(2, '0')}
          </div>
        </div>

        {/* Center: Quick Pagination Prev/Next */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
              currentPage === 1 
                ? 'text-slate-600 cursor-not-allowed' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
            title="Previous Page (Arrow Left)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="text-xs font-medium text-slate-300 px-2 truncate max-w-[140px] sm:max-w-[200px]">
            {pageMeta.title}
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
              currentPage === totalPages 
                ? 'text-slate-600 cursor-not-allowed' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
            title="Next Page (Arrow Right)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Theme Selector & Zoom controls */}
        <div className="flex items-center gap-2">
          
          {/* Zoom controls */}
          <div className="hidden sm:flex items-center bg-slate-950 rounded-lg border border-slate-800 p-0.5">
            <button
              onClick={() => setZoomLevel(prev => Math.max(85, prev - 15))}
              className="p-1 text-slate-400 hover:text-white rounded"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[10px] font-mono text-slate-400 px-1.5">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel(prev => Math.min(125, prev + 15))}
              className="p-1 text-slate-400 hover:text-white rounded"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

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
        </div>

      </div>

      {/* Table of Contents Drawer / Popover */}
      {showTocDrawer && (
        <div className="w-full max-w-4xl mb-4 p-4 rounded-2xl border border-slate-800 bg-slate-900/95 backdrop-blur-md shadow-2xl transition-all">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
              Table of Contents · 10 Page Standard Booklet
            </span>
            <button 
              onClick={() => setShowTocDrawer(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              Close Index
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {BOOKLET_PAGES.map((page) => (
              <button
                key={page.pageNumber}
                onClick={() => {
                  setCurrentPage(page.pageNumber);
                  setShowTocDrawer(false);
                }}
                className={`p-2.5 rounded-xl text-left border transition-all ${
                  currentPage === page.pageNumber
                    ? 'bg-blue-600/20 border-blue-500 text-white'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-blue-400 mb-1">
                  <span>PAGE 0{page.pageNumber}</span>
                  {currentPage === page.pageNumber && <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>}
                </div>
                <div className="font-semibold text-xs text-white truncate">{page.title}</div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">{page.summary}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* The Booklet Presentation Page Container */}
      <div 
        className="relative w-full max-w-4xl transition-all duration-300"
        style={{
          transform: `scale(${zoomLevel / 100})`,
          transformOrigin: 'top center'
        }}
      >
        {/* Book Binding Shadow Effect */}
        <div 
          id="current-booklet-page-frame"
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-slate-950 min-h-[640px] sm:min-h-[720px] md:min-h-[760px] flex flex-col"
        >
          <BookletPageRenderer 
            pageNumber={currentPage} 
            theme={currentTheme} 
          />
        </div>
      </div>

      {/* Dedicated Single Bottom Download Action */}
      <div className="w-full max-w-4xl mt-6 pt-5 pb-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 font-mono text-[10px] text-slate-300">←</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-800 font-mono text-[10px] text-slate-300">→</span>
          <span>Use keyboard arrows or touch to flip pages</span>
          <span className="text-slate-600 hidden sm:inline">·</span>
          <span className="hidden sm:inline text-slate-400">Ndola HQ: 0979 728 718</span>
        </div>

        {/* The single, prominent download button at bottom */}
        <button 
          onClick={onOpenPdfModal}
          className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>Download Company Profile Booklet (PDF)</span>
        </button>
      </div>

    </div>
  );
};
