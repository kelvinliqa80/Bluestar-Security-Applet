import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Sparkles, 
  Download, 
  Terminal, 
  Cpu, 
  Layers, 
  Palette, 
  FileText,
  ShieldAlert
} from 'lucide-react';
import { generateBookletPrompt, PromptConfig } from '../data/prompts';

interface PromptGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptGeneratorModal: React.FC<PromptGeneratorModalProps> = ({ 
  isOpen, 
  onClose 
}) => {
  const [config, setConfig] = useState<PromptConfig>({
    agent: "google-ai",
    paletteTheme: "command-navy",
    focusSector: "copperbelt-mining",
    pageOrientation: "portrait-a4"
  });

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const promptText = generateBookletPrompt(config);

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([promptText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `bluestar_security_booklet_prompt_${config.agent}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn modal-backdrop">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Google AI & Manus AI Agent Prompt Generator
              </h2>
              <p className="text-xs text-slate-400">
                Customizable publication prompt with color-coding, strategic shield logo placement, and tactical capability assets.
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

        {/* Modal Body / Controls */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Knob Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Agent Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-blue-400" /> Target AI Agent
              </label>
              <select
                value={config.agent}
                onChange={(e) => setConfig({ ...config, agent: e.target.value as any })}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="google-ai">Google AI Studio (Gemini 2.5)</option>
                <option value="manus-ai">Manus AI Autonomous Agent</option>
                <option value="universal">Universal Art Director Prompt</option>
              </select>
            </div>

            {/* Palette Theme */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-blue-400" /> Page Color Scheme
              </label>
              <select
                value={config.paletteTheme}
                onChange={(e) => setConfig({ ...config, paletteTheme: e.target.value as any })}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="command-navy">Command Navy & Platinum</option>
                <option value="tactical-onyx">Tactical Stealth Onyx & Amber</option>
                <option value="executive-white">Corporate Crisp White Print</option>
                <option value="alternating-spreads">Dynamic Alternating Spreads</option>
              </select>
            </div>

            {/* Focus Sector */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-blue-400" /> Sector Focus
              </label>
              <select
                value={config.focusSector}
                onChange={(e) => setConfig({ ...config, focusSector: e.target.value as any })}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="copperbelt-mining">Copperbelt Mining & Industry</option>
                <option value="corporate-commercial">Corporate Campuses & Towers</option>
                <option value="balanced-nationwide">Balanced Nationwide Deployment</option>
              </select>
            </div>

            {/* Page Orientation */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-400" /> Format
              </label>
              <select
                value={config.pageOrientation}
                onChange={(e) => setConfig({ ...config, pageOrientation: e.target.value as any })}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="portrait-a4">Standard A4 Portrait Booklet</option>
                <option value="landscape-spread">A4 Landscape Spread Presentation</option>
              </select>
            </div>

          </div>

          {/* Quick Notice */}
          <div className="p-3 rounded-lg border border-blue-900/40 bg-blue-950/20 text-xs text-blue-300 flex items-start gap-2.5">
            <Terminal className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white">How Manus and Google AI execute this prompt:</span>
              <p className="text-slate-300 text-[11px] mt-0.5">
                This prompt specifies the exact company dossier, command leadership structure (Kelvin Akapelwa Former Army Officer, Ronald Mwanza, etc.), 8 service lines, strategic placement of the shield logo as central and running crest, and placement of the rapid response vehicle, physical guard, radio comms, and searchlight.
              </p>
            </div>
          </div>

          {/* Prompt Preview Code Box */}
          <div className="relative rounded-xl border border-slate-800 bg-slate-950 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900/60 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                SYSTEM_PROMPT_CONFIG.MD
              </span>
              <span>{promptText.length} CHARACTERS</span>
            </div>
            <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto max-h-80 whitespace-pre-wrap leading-relaxed select-all">
              {promptText}
            </pre>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/80">
          <div className="text-xs text-slate-400">
            {copied ? (
              <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                <Check className="w-4 h-4" /> Copied to clipboard! Ready to paste into Gemini / Manus.
              </span>
            ) : (
              <span>Ready for Google AI Studio, Claude, ChatGPT, or Manus AI agent.</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Download TXT
            </button>
            <button
              onClick={handleCopy}
              className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-md shadow-blue-600/30"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy Full Prompt"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
