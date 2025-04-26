"use client";


import Doc from "@/components/l_M_Assessment/doc";
import LMAssessment from "@/sections/assessment/l_m_assessment";
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
  
  // if (jsonData) {
   
  // }
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