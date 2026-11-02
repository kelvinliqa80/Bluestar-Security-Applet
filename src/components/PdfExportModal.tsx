import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  Printer, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  Loader2, 
  Palette,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { BookletTheme, BOOKLET_THEMES } from '../data/themes';
import { generateBookletPdf } from '../utils/pdfGenerator';
import { BOOKLET_PAGES } from '../data/bookletData';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: BookletTheme;
  onThemeChange: (theme: BookletTheme) => void;
  onNativePrint: () => void;
  onViewAllPages: () => void;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({
  isOpen,
  onClose,
  currentTheme,
  onThemeChange,
  onNativePrint,
  onViewAllPages
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progressMsg, setProgressMsg] = useState('');
  const [progressPercent, setProgressPercent] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleStartPdfDownload = async () => {
    setIsGenerating(true);
    setErrorMessage('');
    setDownloadSuccess(false);
    setProgressPercent(5);
    setProgressMsg('Preparing high-resolution A4 page renderers...');

    try {
      await generateBookletPdf('printable-booklet-container', {
        themeId: currentTheme.id,
        fileName: `Bluestar_Security_Solutions_Company_Profile_${currentTheme.id}.pdf`,
        onProgress: (current, total, message) => {
          const pct = Math.round((current / total) * 100);
          setProgressPercent(Math.max(10, Math.min(100, pct)));
          setProgressMsg(message);
        }
      });

      setDownloadSuccess(true);
      setProgressPercent(100);
      setProgressMsg('PDF downloaded successfully to your downloads folder!');
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err?.message || 'Failed to generate PDF. You can also use the Direct Print to PDF option below.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadStandaloneHtml = () => {
    const container = document.getElementById('printable-booklet-container');
    if (!container) return;

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Bluestar Security Solutions Limited - Company Profile Booklet</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    body { margin: 0; padding: 20px; background: #0b0f19; font-family: 'Plus Jakarta Sans', sans-serif; display: flex; flex-direction: column; align-items: center; }
    .booklet-page { width: 794px; min-height: 1123px; height: 1123px; padding: 44px; box-sizing: border-box; margin: 20px 0; background: #020617; color: #ffffff; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.8); page-break-after: always; break-after: page; display: flex; flex-direction: column; justify-content: space-between; position: relative; }
    @media print {
      body { background: white !important; padding: 0 !important; }
      .booklet-page { margin: 0 !important; box-shadow: none !important; border-radius: 0 !important; width: 210mm !important; height: 297mm !important; }
    }
  </style>
</head>
<body>
  ${container.innerHTML}
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Bluestar_Security_Solutions_Company_Profile_${currentTheme.id}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn modal-backdrop">
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Download Official Company Profile PDF
              </h2>
              <p className="text-xs text-slate-400">
                10-Page Standard Corporate Dossier · Bluestar Security Solutions Limited
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* Color Palette Selector for PDF */}
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/70 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-blue-400" />
                Select PDF Color Theme
              </span>
              <span className="text-[11px] text-blue-400 font-medium">
                {currentTheme.name}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {BOOKLET_THEMES.map((th) => (
                <button
                  key={th.id}
                  onClick={() => onThemeChange(th)}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    currentTheme.id === th.id
                      ? 'border-blue-500 bg-blue-950/40 text-white shadow-sm'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="text-[11px] font-bold truncate">{th.name}</div>
                  <div className="text-[9px] text-slate-400 truncate mt-0.5">{th.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Primary Action: Direct PDF Generation & Download */}
          <div className="p-5 rounded-2xl border border-blue-600/40 bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Download className="w-5 h-5 text-blue-400" />
                  Instant Direct Download (All 12 Pages)
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Compiles all 12 pages with official Shield Logo, tactical and executive command credentials, uniformed guard photos, rapid response vehicle, tactical radios, Ndola dispatch lines, and the complete 8-point Corporate Policies & Compliance Framework directly into a ready-to-print A4 PDF document.
                </p>
              </div>
            </div>

            {/* Progress Bar when generating */}
            {isGenerating && (
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-300 font-mono flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-400" />
                    {progressMsg}
                  </span>
                  <span className="text-white font-mono font-bold">{progressPercent}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-sky-400 transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>
            )}

            {downloadSuccess && (
              <div className="p-3 rounded-lg border border-emerald-500/40 bg-emerald-950/40 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Success!</strong> Your company profile booklet has been generated and saved to your device.
                </span>
              </div>
            )}

            {errorMessage && (
              <div className="p-3 rounded-lg border border-rose-500/40 bg-rose-950/40 text-xs text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleStartPdfDownload}
                disabled={isGenerating}
                className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-blue-600/30 ${
                  isGenerating
                    ? 'bg-blue-800 text-blue-200 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-500 text-white hover:scale-[1.02]'
                }`}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Generating PDF ({progressPercent}%)...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Download Booklet PDF Now
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  onClose();
                  onViewAllPages();
                }}
                className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View All 12 Pages Onscreen
              </button>
            </div>
          </div>

          {/* Secondary Methods: Browser Print & HTML File */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            
            {/* Method 2: Browser Print */}
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-xs">
                <Printer className="w-4 h-4 text-sky-400" />
                Browser Print to PDF (Ctrl+P)
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Opens your browser's native print dialog with pre-configured A4 portrait page breaks and margins.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onNativePrint();
                }}
                className="w-full mt-2 py-2 px-3 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                Trigger Print Dialog
              </button>
            </div>

            {/* Method 3: Standalone HTML Dossier */}
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-xs">
                <FileText className="w-4 h-4 text-emerald-400" />
                Standalone Offline HTML Dossier
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Downloads a self-contained offline HTML file that opens anywhere, preserves layout, and prints cleanly.
              </p>
              <button
                onClick={handleDownloadStandaloneHtml}
                className="w-full mt-2 py-2 px-3 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                Download HTML File
              </button>
            </div>

          </div>

          {/* Document Verification Box */}
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-950/40 text-[11px] text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Document Reference: DOC-BSS-2026 · 10 Total A4 Pages
            </span>
            <span className="font-mono text-slate-400">Ndola Headquarters</span>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-800 bg-slate-950/80">
          <div className="text-xs text-slate-400">
            For custom formatting or tender documentation, contact bluestar.solutions@hotmail.com
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
