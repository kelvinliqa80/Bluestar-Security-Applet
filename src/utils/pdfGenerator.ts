import jsPDF from 'jspdf';
import html2canvas from 'html2canvas-pro';

export interface GeneratePdfOptions {
  themeId?: string;
  onProgress?: (current: number, total: number, message: string) => void;
  fileName?: string;
}

/**
 * Generates and triggers download of the complete 10-page Bluestar Security Solutions Company Profile PDF.
 * Uses html2canvas-pro to fully support modern CSS color spaces including OKLCH and CSS color functions.
 */
export async function generateBookletPdf(
  pagesContainerId: string = 'printable-booklet-container',
  options: GeneratePdfOptions = {}
): Promise<boolean> {
  const { 
    onProgress, 
    fileName = 'Bluestar_Security_Solutions_Company_Profile.pdf' 
  } = options;

  try {
    const container = document.getElementById(pagesContainerId);
    if (!container) {
      throw new Error(`Booklet container #${pagesContainerId} not found in DOM`);
    }

    const pageElements = Array.from(container.querySelectorAll<HTMLElement>('.pdf-render-page'));
    if (pageElements.length === 0) {
      throw new Error('No booklet pages found to export');
    }

    const totalPages = pageElements.length;
    onProgress?.(0, totalPages, 'Initializing PDF compilation engine...');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    for (let i = 0; i < totalPages; i++) {
      const pageEl = pageElements[i];
      const pageNum = i + 1;

      onProgress?.(
        pageNum, 
        totalPages, 
        `Rendering Page ${pageNum} of ${totalPages} (${pageEl.dataset.pageTitle || 'Booklet Page'})...`
      );

      // Give browser time to update UI and render images
      await new Promise(r => setTimeout(r, 80));

      const isWhiteTheme = options.themeId === 'executive-platinum-white';
      const pageBgColor = isWhiteTheme ? '#ffffff' : '#020617';

      const canvas = await html2canvas(pageEl, {
        scale: 2, // High resolution retina rendering (1588 x 2246 @ 2x)
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: pageBgColor,
        windowWidth: 794,
        windowHeight: 1123,
        onclone: (clonedDoc: Document) => {
          // Ensure cloned elements are fully positioned and visible for clean capture
          const clonedContainer = clonedDoc.getElementById(pagesContainerId);
          if (clonedContainer) {
            clonedContainer.style.position = 'static';
            clonedContainer.style.left = '0';
            clonedContainer.style.visibility = 'visible';
            clonedContainer.style.display = 'block';
          }
          // Make sure the target page in cloned document is positioned at top-left
          const clonedPage = clonedDoc.getElementById(`pdf-page-${pageNum}`);
          if (clonedPage) {
            clonedPage.style.visibility = 'visible';
            clonedPage.style.display = 'flex';
          }
        }
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);

      if (i > 0) {
        pdf.addPage('a4', 'portrait');
      }

      // Add image to fill the exact A4 page (210mm x 297mm)
      pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
    }

    onProgress?.(totalPages, totalPages, 'Finalizing & saving PDF file to your downloads...');
    await new Promise(r => setTimeout(r, 120));

    pdf.save(fileName);
    return true;
  } catch (error) {
    console.error('Failed to generate PDF:', error);
    throw error;
  }
}

/**
 * Downloads a single page as high-res PNG or PDF using html2canvas-pro.
 */
export async function downloadSinglePage(
  elementId: string, 
  fileName: string = 'Bluestar_Page.png'
): Promise<void> {
  const el = document.getElementById(elementId);
  if (!el) throw new Error(`Element #${elementId} not found`);

  const canvas = await html2canvas(el, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    logging: false,
    backgroundColor: null,
    windowWidth: 794,
    windowHeight: 1123,
    onclone: (clonedDoc: Document) => {
      const clonedEl = clonedDoc.getElementById(elementId);
      if (clonedEl) {
        clonedEl.style.position = 'static';
        clonedEl.style.left = '0';
        clonedEl.style.visibility = 'visible';
      }
    }
  });

  const link = document.createElement('a');
  link.download = fileName;
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
