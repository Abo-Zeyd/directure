/* eslint-disable @typescript-eslint/no-explicit-any */

import * as xlsx from "xlsx"; // Fixed import
export function excelToJsonAllSheets(fileContent: ArrayBuffer) {
  // قراءة ملف إكسل
  const workbook = xlsx.read(fileContent, { type: "array" });

  // كائن JSON النهائي
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const jsonData: Record<string, any> = {};

  // الدوران عبر جميع الأوراق
  workbook.SheetNames.forEach((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    const rows = xlsx.utils.sheet_to_json<Record<string, unknown>>(sheet, {
      defval: "", // تعيين القيم الفارغة إلى ""
      range: 7, // بدء القراءة من السطر 8
    });

    // إنشاء كائن JSON خاص بكل ورقة
    const sheetData: Record<string, Record<string, any>> = {};

    rows.forEach((row: Record<string, unknown>) => {
      // دمج الاسم واللقب لتكوين مفتاح فريد
      const fullName = `${row["اللقب"] || ""} ${row["الاسم"] || ""}`.trim();
      const rowData: Record<string, any> = {};

      // إدراج جميع الأعمدة، بما في ذلك الخلايا الفارغة
      Object.keys(row).forEach((key) => {
        rowData[key] = row[key]; // الاحتفاظ بالقيمة الفارغة ""
      });

      // إضافة بيانات الصف إلى كائن الورقة
      sheetData[fullName] = rowData;
    });

    // إضافة بيانات الورقة إلى الكائن الرئيسي باستخدام اسم الورقة كمفتاح
    jsonData[sheetName] = sheetData;
  });

  return jsonData; // إرجاع البيانات كـ JSON
}

// import * as xlsx from "xlsx";

// export function excelToJsonAllSheets(fileContent: ArrayBuffer): string {
//   const workbook = xlsx.read(fileContent, { type: "array" });

//   const jsonData: Record<string, any> = {};

//   workbook.SheetNames.forEach((sheetName) => {
//     const sheet = workbook.Sheets[sheetName];
//     const rows = xlsx.utils.sheet_to_json<Record<string, unknown>>(sheet, {
//       defval: "",
//       range: 7,
//     });

//     const sheetData: Record<string, Record<string, any>> = {};

//     rows.forEach((row) => {
//       const fullName = `${row["اللقب"] || ""} ${row["الاسم"] || ""}`.trim();
//       const rowData: Record<string, any> = {};

//       Object.keys(row).forEach((key) => {
//         rowData[key] = row[key];
//       });

//       sheetData[fullName] = rowData;
//     });

//     jsonData[sheetName] = sheetData;
//   });

//   return JSON.stringify(jsonData, null, 2); // ← يرجع كـ string بصيغة JSON
// }
