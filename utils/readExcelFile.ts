import { excelToJsonAllSheets } from './excelToJsonAllSheets'; // عدل المسار حسب مكان الدالة

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function readExcelFile(file: File): Promise<any> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target?.result;
      if (fileContent) {
        try {
          const json = excelToJsonAllSheets(fileContent as ArrayBuffer);
          resolve(json);
        } catch (error) {
          reject(error);
        }
      } else {
        reject(new Error("فشل في قراءة الملف"));
      }
    };

    reader.onerror = () => {
      reject(new Error("حدث خطأ أثناء قراءة الملف"));
    };

    reader.readAsArrayBuffer(file);
  });
}
