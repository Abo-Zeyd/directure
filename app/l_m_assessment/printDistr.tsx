"use client";


import React, { useRef } from "react";
import LMAssessment from "./l_m_assessment"
import { useReactToPrint } from "react-to-print";

const PrintComponent = () => {
  const componentRef = useRef<HTMLInputElement>(null);
  const handlePrint = useReactToPrint({
    // المرجع للمكون المراد طباعته
    contentRef: componentRef,
    documentTitle: `توزيع`,

    onPrintError: (errorLocation: any, error: { message: any; }) => {
      alert(
        `❌خطأ في ${errorLocation}: ${error.message} حدث خطأ أثناء الطباعة. يرجى المحاولة مرة أخرى!`
      );
    },
    onBeforePrint: async () => {
      const styles = document.createElement("style");
      styles.innerHTML = `
        @media print {
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          body {
              font-family: '${fontName}', sans-serif !important;
          }
        }
      `;
      document.head.appendChild(styles);
      
    },
   
  });

  return (
    <>
     
          <div className="fixed inset-0 z-auto flex flex-row bg-black/50 overflow-auto">
            <div>
              <div className="absolute flex flex-col text-lg text-accent bg-zinc-600 p-2 rounded border-solid border-2 border-text shadow-md resize-none w-fit z-50 min-h-screen">
                
                <LMAssessment ref={componentRef} />
              </div>
            </div>
          </div>
       
    </>
  );
};

export default PrintComponent;
