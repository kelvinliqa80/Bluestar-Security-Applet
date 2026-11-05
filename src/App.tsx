/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ExecutiveDossierLanding } from './components/ExecutiveDossierLanding';
import { DeploymentRequestModal } from './components/DeploymentRequestModal';
import { LegalDossierModal, LegalTabType } from './components/LegalDossierModal';
import { BOOKLET_THEMES, BookletTheme } from './data/themes';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<BookletTheme>(BOOKLET_THEMES[0]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; tab: LegalTabType }>({
    isOpen: false,
    tab: 'privacy'
  });

  const handleOpenLegal = (tab: LegalTabType = 'privacy') => {
    setLegalModal({ isOpen: true, tab });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <ExecutiveDossierLanding
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
        onRequestQuote={() => setIsQuoteModalOpen(true)}
        onNativePrint={() => window.print()}
        onOpenLegal={handleOpenLegal}
      />
      <DeploymentRequestModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
      <LegalDossierModal
        isOpen={legalModal.isOpen}
        initialTab={legalModal.tab}
        onClose={() => setLegalModal(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}

