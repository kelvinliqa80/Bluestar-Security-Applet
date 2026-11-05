import React from 'react';
import { X, CheckCircle2, ShieldCheck, ExternalLink, Image as ImageIcon, MapPin } from 'lucide-react';
import { ATTACHED_ASSETS_MANIFEST } from '../data/bookletData';

interface AttachedAssetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToPage?: (pageNum: number) => void;
}

export const AttachedAssetsModal: React.FC<AttachedAssetsModalProps> = ({
  isOpen,
  onClose,
  onNavigateToPage
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn modal-backdrop">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Attached Security Assets & Strategic Photo Implementation
              </h2>
              <p className="text-xs text-slate-400">
                All 14 official photos deployed across the 10-page company profile booklet.
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

        {/* Assets Grid */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="p-3.5 rounded-xl border border-blue-900/40 bg-blue-950/20 text-xs text-blue-300 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white">Full Asset Integration Verified:</span>
              <p className="text-slate-300 text-[11px] mt-0.5 leading-relaxed">
                All directors and personnel (Kelvin Akapelwa, Ronald Mwanza, Chipo Mulenga, Martin Mulenga, Simon Mwiinga avatar), operational fleet (response patrol cars), guarding operations (armed mining guard, Gate 3 access control), CCTV electronic installers, dog handlers with K9 units, Baofeng radios, and tactical searchlights are placed in their respective sections.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ATTACHED_ASSETS_MANIFEST.map((asset, idx) => (
              <div 
                key={asset.id || idx}
                className="p-4 rounded-xl border border-slate-800 bg-slate-950/70 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold">
                      ASSET {String(idx + 1).padStart(2, '0')} · {asset.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Active in Booklet
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-white">{asset.title}</h3>

                  {/* Image Preview Container */}
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-slate-800 bg-black flex items-center justify-center group">
                    <img 
                      src={asset.src} 
                      alt={asset.title} 
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {asset.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 space-y-2 text-[11px]">
                  <div className="flex items-start gap-1.5 text-blue-300">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Booklet Placement:</strong> {asset.placement}</span>
                  </div>
                  <div className="text-slate-400 text-[10px]">
                    <strong>Operational Role:</strong> {asset.capabilities}
                  </div>
                  {onNavigateToPage && (
                    <button
                      onClick={() => {
                        onNavigateToPage(asset.pageNum);
                        onClose();
                      }}
                      className="w-full mt-1 py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-blue-600/30 text-blue-300 hover:text-white border border-slate-700 hover:border-blue-500/50 text-[11px] font-medium flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Jump to Page {asset.pageNum} in Booklet</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-800 bg-slate-950/80">
          <div className="text-xs text-slate-400">
            Click &quot;Jump to Page&quot; to review the photo directly in the company profile booklet.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            Done Viewing
          </button>
        </div>

      </div>
    </div>
  );
};
