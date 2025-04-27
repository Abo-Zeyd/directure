"use client";


import React, { useState } from "react";
import { FaHandPointLeft } from "react-icons/fa";
import { Button } from "../ui/Button";

function Doc() {
  const [showInf, setshowInf] = useState<boolean>(false);
  return (
    <div className="flex flex-row items-center justify-center mb-4 text-3xl  text-black ">
      <div className="flex  items-center justify-center mb-4 gap-4 ml-4">
        <h1>كيفية العمل ؟</h1>
        <button
          className="cursor-pointer  text-2xl text-gray-900 hover:text-gray-700 transition duration-300 ease-in-out"
          onClick={() => setshowInf(!showInf)}
        >
          <FaHandPointLeft size={40} />
        </button>
      </div>

      {showInf && (
      <div className="flex justify-center items-center mb-9 border-2 border-dashed border-gray-700 p-4 bg-gray-200 shadow-lg">
      <div className="  p-8   text-start space-y-6">
        <ul className="list-none space-y-4 text-[1.1rem] font-medium leading-relaxed text-gray-700">
          <li className="flex items-center gap-2">
            🛠 انقر على الزر: 
            <Button handleChange={() => {}} id="btn1">استعراض</Button>
             
           
          </li>
          <li className="flex items-center gap-2">
            📋 من القائمة اختر 
            <select className="bg-white border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>اختر ميدانا</option>
             
              {/* أضف الخيارات التي تريدها هنا */}
            </select>
            الذي ستخرج له البطاقة
          </li>
          <li className="flex items-center gap-2">
            📋 من القائمة : الشبكة التحليلية ... 
            <select className=" px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>اللغة العربية</option>
             
              {/* أضف الخيارات التي تريدها هنا */}
            </select> 
            حدد النشاط الوافق للميدان من القائمة المنسدلة
          </li>
          <li>✍️ أكمل ملء البيانات المطلوبة</li>
          <li className="flex items-center gap-2">🖨️ انقر على زر  <Button handleChange={() => {}} id="btn1">طباعة</Button></li>
        </ul>
      </div>
    </div>
    
     
      )}
    </div>
  );
}

export default Doc;
