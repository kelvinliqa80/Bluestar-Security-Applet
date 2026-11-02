import React from 'react';
import { BOOKLET_PAGES } from '../data/bookletData';
import { BookletTheme } from '../data/themes';
import { BookletPageRenderer } from './BookletPageRenderer';

interface PrintBookletProps {
  theme: BookletTheme;
}

export const PrintBooklet: React.FC<PrintBookletProps> = ({ theme }) => {
  return (
    <div className="hidden print:block print-only w-full">
      {BOOKLET_PAGES.map((page) => (
        <div key={page.pageNumber} className="booklet-page">
          <BookletPageRenderer 
            pageNumber={page.pageNumber} 
            theme={theme} 
            isPrintView={true} 
          />
        </div>
      ))}
    </div>
  );
};
