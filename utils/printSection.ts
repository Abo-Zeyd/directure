import { useReactToPrint } from "react-to-print"; 
 
export const usePrintSection = (contentRef: React.RefObject<HTMLElement>) => {
  return useReactToPrint({
    contentRef:  contentRef,
    documentTitle: `توزيع`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onPrintError: (errorLocation: any, error: { message: any }) => {
      alert(
        `❌خطأ في ${errorLocation}: ${error.message} حدث خطأ أثناء الطباعة. يرجى المحاولة مرة أخرى!`
      );
    },
    onBeforePrint: async () => {
      const styles = document.createElement("style");
      styles.innerHTML = `
        @media print {
          @page {
            margin: 10mm; /* تحديد الهوامش */
          }
          body {
            margin: 0;
          }
        }
      `;
      document.head.appendChild(styles);
      return Promise.resolve();
    },
  });
};