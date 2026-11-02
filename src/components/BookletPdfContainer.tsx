import React from 'react';
import { BOOKLET_PAGES } from '../data/bookletData';
import { BookletTheme } from '../data/themes';
import { BookletPageRenderer } from './BookletPageRenderer';

interface BookletPdfContainerProps {
  theme: BookletTheme;
  isOffscreen?: boolean;
}

/**
 * Renders all 10 pages in standard A4 dimensions (794px × 1123px @ 96 DPI)
 * Used both for offscreen html2canvas PDF compilation and onscreen full-booklet preview.
 */
export const BookletPdfContainer: React.FC<BookletPdfContainerProps> = ({ 
  theme, 
  isOffscreen = true 
}) => {
  return (
    <div
      id={isOffscreen ? "printable-booklet-container" : "visible-full-booklet-container"}
      className={
        isOffscreen
          ? "fixed -left-[9999px] top-0 pointer-events-none z-[-100] opacity-100"
          : "flex flex-col items-center gap-10 w-full"
      }
      style={{ width: '794px' }}
    >
      {BOOKLET_PAGES.map((page) => (
        <div
          key={page.pageNumber}
          id={`pdf-page-${page.pageNumber}`}
          className={`pdf-render-page relative overflow-hidden rounded-none shadow-2xl border ${theme.borderSubtle} ${theme.bgPage}`}
          data-page-number={page.pageNumber}
          data-page-title={page.title}
          style={{
            width: '794px',
            height: '1123px',
            minHeight: '1123px',
            maxHeight: '1123px',
            boxSizing: 'border-box',
          }}
        >
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
