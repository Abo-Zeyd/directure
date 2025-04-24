"use client";

// Fixed import
import Doc from "./doc";
// Fixed import
import LMAssessment from "./l_m_assessment";
// import * as xlsx from "xlsx"; // Fixed import
import { excelToJsonAllSheets } from "@/utils/excelToJsonAllSheets";
import { useState, useEffect } from "react";

export function Moctasapat() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [jsonData, setJsonData] = useState<Record<string, any> | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]; // الحصول على الملف
      setSelectedFile(file);
    } else {
      alert("لم يتم اختيار ملف صالح.");
    }
  };

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target?.result; // محتوى الملف
        if (fileContent) {
          const json = excelToJsonAllSheets(fileContent as ArrayBuffer);
          setJsonData(json); // تخزين البيانات في المتغير
        }
      };
      reader.readAsArrayBuffer(selectedFile); // قراءة الملف كـ ArrayBuffer
    }
  }, [selectedFile]); // تنفيذ التأثير عند تغيير selectedFile
  if (jsonData) {
    // console.log("jsonData", jsonData); // طباعة jsonData في وحدة التحكم
  }
  return (
    <div style={{ padding: "20px" }}>
      <div>
         
        <Doc />
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <h1 className="mb-4 text-xl  text-black">
          اختر ملف تقييم المكتسبات بصيغة Excel
        </h1>

        {/* زر تنسيقي */}
        <label
          htmlFor="excel-upload"
          className="  cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow mb-6"
        >
          استعراض
        </label>

        {/* input مخفي */}
        <input
          id="excel-upload"
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      {jsonData && <LMAssessment jsonData={jsonData} />}{" "}
      {/* تمرير jsonData إلى Test */}
    </div>
  );
}

// function excelToJsonAllSheets(fileContent: ArrayBuffer) {
//   // قراءة ملف إكسل
//   const workbook = xlsx.read(fileContent, { type: "array" });

//   // كائن JSON النهائي
//   const jsonData: Record<string, any> = {};

//   // الدوران عبر جميع الأوراق
//   workbook.SheetNames.forEach((sheetName) => {
//     const sheet = workbook.Sheets[sheetName];
//     const rows = xlsx.utils.sheet_to_json<Record<string, unknown>>(sheet, {
//       defval: "", // تعيين القيم الفارغة إلى ""
//       range: 7, // بدء القراءة من السطر 8
//     });

//     // إنشاء كائن JSON خاص بكل ورقة
//     const sheetData: Record<string, Record<string, any>> = {};

//     rows.forEach((row: Record<string, unknown>) => {
//       // دمج الاسم واللقب لتكوين مفتاح فريد
//       const fullName = `${row["اللقب"] || ""} ${row["الاسم"] || ""}`.trim();
//       const rowData: Record<string, any> = {};

//       // إدراج جميع الأعمدة، بما في ذلك الخلايا الفارغة
//       Object.keys(row).forEach((key) => {
//         rowData[key] = row[key]; // الاحتفاظ بالقيمة الفارغة ""
//       });

//       // إضافة بيانات الصف إلى كائن الورقة
//       sheetData[fullName] = rowData;
//     });

//     // إضافة بيانات الورقة إلى الكائن الرئيسي باستخدام اسم الورقة كمفتاح
//     jsonData[sheetName] = sheetData;
//   });

//   return jsonData; // إرجاع البيانات كـ JSON
// }
