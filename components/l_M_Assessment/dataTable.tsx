"use client";

import { useState, useEffect } from "react";
// import React, { useRef } from "react";
// import { useReactToPrint } from "react-to-print";
import { useAssContext } from "@/contexts/assContex";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DataTable(datainf: any) {
  const [data, setDataGet] = useState<string[]>([]);
  //قائمة المعايير
  const [firstHederRow, setfirstHederRow] = useState<string[]>([]);
  //مصفوفة التقيم
  const [contents, setContents] = useState<string[][]>([]);
  //عدد خلايا التقييم
  const [numberCell, setnumberCell] = useState<number>();
  //قائمة الأسماء
  const [listNames, setlistNames] = useState<string[]>([]);
  //عناوين المعايير
  // const [criteria, setCriteria] = useState<string[]>([]);

  // const [criteriaNum, setcriteriaNum] = useState<number>(0);
  //عنوان الصفحة
  // const [skillText, setSkillText] = useState("");
  //مرجع المنطقة المطبوعة
const { setCriteria, criteriaNum } = useAssContext();


  const colorMap = {
    أ: "bg-green-500 text-white",
    ب: "bg-green-200 text-black",
    ج: "bg-yellow-300 text-black",
    د: "bg-red-500 text-white",
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dataGet: StudentData = Object.values(Object.values(datainf as { [key: string]: any })[0])[0] as StudentData;
    const title = Object.keys(
      Object.values(Object.values(dataGet)[criteriaNum])[0]
    );
    const criteriaTitle = Object.keys(dataGet);
    setCriteria(criteriaTitle);
    // console.log("criteriaTitle", criteriaTitle);
    setDataGet(title);

    const names = Object.keys(Object.values(dataGet)[criteriaNum]);

    setlistNames(names);

    function fillFirstRow() {
      const rowData = [];
      for (let i = 0; i < title.length - 1; i++) {
        rowData.push("المعيار " + (i - 2));
      }
      rowData.push("تملك الكفاءات");
      setfirstHederRow(rowData);
    }
    setnumberCell((title.length - 4) * 4 + 4);

    fillFirstRow();

    //----------------------------------------------------------
    const tableContents: string[][] = Object.values(
      Object.values(dataGet)[criteriaNum]
    ).map((item: { [key: string]: string }) => {
      return Object.values(item).filter((_, index) => index > 3);
    });
   
    const mapping = { أ: 0, ب: 1, ج: 2, د: 3 };

    const result = tableContents.map((row) => {
      // نقوم بإنشاء مصفوفة تحتوي على 4 خلايا فارغة في البداية
      const res = row
        .map((char) => {
          const group = Array(4).fill(""); // إنشاء مصفوفة تحتوي على 4 خلايا فارغة
          const index = mapping[char as keyof typeof mapping]; // الحصول على مكان الحرف في الماب

          if (index !== undefined) group[index] = "×"; // تعيين "×" في الموقع المحدد
          return group;
        })
        .flat(); // جعل المصفوفة مسطحة لتصبح مصفوفة مكونة من خلايا متعددة بدلاً من مصفوفة مصفوفات.

      // الآن نضيف 4 خلايا جديدة بعد الحساب
      res.push(...Array(4).fill("")); // إضافة 4 خلايا جديدة تحتوي على "×"

      return res;
    });

    setContents(result);
  }, [criteriaNum, datainf, setCriteria]);



  
  return (
    <div>
   
  
    <div className="flex flex-row items-center justify-center mb-4 ">
     
      
      <table
        dir="rtl"
        className="table-fixed border-collapse bg-white border border-black text-black w-full"
      >
        {/* رأس الجدول */}
        <thead>
          <tr>
            <th className="border-2 border-black p-2 w-12 rotate-[270deg]" rowSpan={3}>
              الرقم
            </th>
            <th rowSpan={3} className="border-2 border-black p-2 w-1/12">
              الاسم واللقب
            </th>
            {firstHederRow.map(
              (item, index) =>
                index > 2 && (
                  <th colSpan={4} key={index} className="border-2 border-black p-1">
                    {item}
                  </th>
                )
            )}
            <th className="border-2 border-black p-2 w-2/12" rowSpan={3}>
              الملاحظات
            </th>
          </tr>
          <tr>
            {data.map(
              (item, index) =>
                index > 3 && (
                  <th colSpan={4} key={index} className="border-2 border-black p-2">
                    {item}
                  </th>
                )
            )}
            {levels.map((level, index) => (
              <th
                key={index}
                className="border border-black w-10 h-32 text-center align-middle"
              >
                <div className="flex items-center justify-center rotate-[270deg] whitespace-nowrap h-full">
                  {level}
                </div>
              </th>
            ))}
          </tr>
          <tr>
            {Array.from({ length: numberCell || 0 }, (_, i) => (
              <td
                key={i}
                className={`border-2 border-black p-2 text-center ${
                  colorMap[
                    i % 4 === 0
                      ? "أ"
                      : i % 4 === 1
                      ? "ب"
                      : i % 4 === 2
                      ? "ج"
                      : "د"
                  ]
                }`}
              >
                {i % 4 === 0
                  ? "أ"
                  : i % 4 === 1
                  ? "ب"
                  : i % 4 === 2
                  ? "ج"
                  : "د"}
              </td>
            ))}
          </tr>
        </thead>
  
        {/* جسم الجدول */}
        <tbody>
          {listNames.map((item, index) => {
            const row = contents[index] || [];
  
            return (
              <tr key={index} className="border-2 border-black">
                <td className="border border-black p-2 whitespace-nowrap text-center align-middle">{index + 1}</td>
                <td className="border-2 border-black p-2">{item}</td>
  
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`border-2 border-black p-2 text-center ${
                      colorMap[cell as keyof typeof colorMap] || ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
  
                <td className="border-2 border-black p-2"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
  
  );
}

export default DataTable;

const levels = ["تحكم أقصى", "تحكم مقبول", "تحكم جزئي", "تحكم محدود"];

interface StudentData {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
}



