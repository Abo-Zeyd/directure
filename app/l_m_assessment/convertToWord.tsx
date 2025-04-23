"use client";
import React from 'react';
import { saveAs } from 'file-saver';
import HtmlDocx from 'html-docx-ts';

type ExportDocxProps = {
  contentRef: React.RefObject<HTMLDivElement>;
};

const ExportDocx = ({ contentRef }: ExportDocxProps) => {
  const generateDocx = () => {
    const element = contentRef.current;
    if (!element) return;

    const htmlContent = `
      <html>
        <head><meta charset="utf-8"></head>
        <body>${element.innerHTML}</body>
      </html>
    `;

    const blob = HtmlDocx.asBlob(htmlContent);
    saveAs(blob, 'document.docx');
  };

  return (
    <div className="text-black">
      <button onClick={generateDocx}>تصدير كـ Word</button>
    </div>
  );
};

export default ExportDocx;





//---------------------------------------------------------------
// "use client";
// import React from 'react';
// import { saveAs } from 'file-saver';
// import PizZip from 'pizzip';
// import Docxtemplater from 'docxtemplater';


// type ExportDocxProps = {
//   contentRef: React.RefObject<HTMLDivElement | null>;
// };
// const ExportDocx = ({ contentRef }: ExportDocxProps) => {
//   const generateDocx = async () => {
//     const content = contentRef.current?.textContent || '';

//     const response = await fetch('/template.docx');
//     if (!response.ok) {
//       console.error('فشل في تحميل القالب:', response.statusText);
//       return;
//     }

//     const arrayBuffer = await response.arrayBuffer();
//     const zip = new PizZip(arrayBuffer);
//     const doc = new Docxtemplater(zip, {
//       paragraphLoop: true,
//       linebreaks: true,
//     });

//     doc.setData({ content });

//     try {
//       doc.render();
//     } catch (error) {
//       console.error('خطأ أثناء توليد الملف:', error);
//       return;
//     }

//     const blob = doc.getZip().generate({ type: 'blob' });
//     saveAs(blob, 'document.docx');
//   };

//   return (
//     <div className="text-black">
//       <button onClick={generateDocx}>تصدير كـ Word</button>
//     </div>
//   );
// };

// export default ExportDocx;
