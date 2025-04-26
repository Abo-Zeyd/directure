"use client";

import LMAssessment from "./l_m_assessment";
import ExcelFileUploader from "@/components/l_M_Assessment/getFileExcelContents";
import { useAssContext } from "@/contexts/assContex";
import { readExcelFile } from "@/utils/readExcelFile";
import { useState, useEffect } from "react";


export function Moctasapat() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [jsonData, setJsonData] = useState<Record<string, any> | null>(null);
  const { setshowInfSection } = useAssContext();
  useEffect(() => {
    if (selectedFile) {
      readExcelFile(selectedFile)
        .then((json) => {
          setJsonData(json);
          setshowInfSection(false);
        })
        .catch((error) => {
          console.error("حدث خطأ أثناء قراءة الملف:", error);
        });
    }
  }, [selectedFile, setshowInfSection]);
  const handleSelectedFile = (file: File) => {
    // هنا تحصل على الملف المختار
    console.log("الملف المختار:", file);
    setSelectedFile(file); // أو أي شيء تريد
  };

  return (
    <div style={{ padding: "20px" }}>
      <ExcelFileUploader onFileSelect={handleSelectedFile} />
      {jsonData && (
        <div className="flex flex-col items-center justify-center mt-4 border-2 border-dashed border-gray-700 rounded-lg p-4 bg-gray-200">
          <LMAssessment jsonData={jsonData} />
        </div>
      )}{" "}
    </div>
  );
}
