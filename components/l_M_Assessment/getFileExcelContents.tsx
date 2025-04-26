import React, { useRef } from "react";
import { Button } from "../ui/Button";

interface ExcelFileUploaderProps {
  onFileSelect: (file: File) => void;
}

const ExcelFileUploader: React.FC<ExcelFileUploaderProps> = ({
  onFileSelect,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click(); // نضغط على input لما يضغط المستخدم على الزر
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      onFileSelect(file);
    } else {
      alert("لم يتم اختيار ملف صالح.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="flex flex-col w-fit items-center justify-center mt-4 border-2 border-dashed border-gray-700 rounded-lg p-4 bg-gray-200">
        <h1 className="mb-4 text-xl text-black">
          اختر ملف تقييم المكتسبات بصيغة Excel
        </h1>

        {/* هنا غيّرت `handleClick` إلى `handleChange` */}
        <Button handleChange={handleButtonClick} id="btn1">
          استعراض
        </Button>

        <input
          ref={fileInputRef}
          id="excel-upload"
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ExcelFileUploader;
