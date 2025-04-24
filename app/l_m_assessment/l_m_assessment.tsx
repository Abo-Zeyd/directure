"use client";

import { useState, useEffect } from "react";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function LMAssessment(datainf: any) {
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
  const [criteria, setCriteria] = useState<string[]>([]);

  const [criteriaNum, setcriteriaNum] = useState<number>(0);
  //عنوان الصفحة
  const [skillText, setSkillText] = useState("");
  //مرجع المنطقة المطبوعة

  const contentRef = useRef<HTMLDivElement>(null);

  const colorMap = {
    أ: "bg-green-500 text-white",
    ب: "bg-green-200 text-black",
    ج: "bg-yellow-300 text-black",
    د: "bg-red-500 text-white",
  };

  useEffect(() => {
    const dataGet: StudentData = Object.values(datainf)[0] as StudentData;
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
  }, [criteriaNum, datainf]);

  const handleSelect = (index: number) => {
    setcriteriaNum(index);
  };
  const handleSelectValue = (value: string) => {
    setSkillText(value);
  };

  const handlePrint = useReactToPrint({
    contentRef: contentRef,
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

  return (
    <div>
   
  
    <div className="flex flex-row items-center justify-center mb-4 ">
      <ComboCriteria
        criteria={criteria}
        SelectNumber={handleSelect}
        SelectValue={handleSelectValue}

        
      />
      <div className="flex flex-row items-center justify-center mb-4 mr-3">
      <button
        onClick={() => handlePrint()}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        طباعة
      </button>
    </div>
    </div>
    
    {/* ✅ هذا هو المحتوى الذي سيتم تصديره */}
    <div ref={contentRef}>
      <ArabicForm skillText={skillText} setSkillText={setSkillText} />
  <div dir="rtl" className=" block  font-bold text-[16px] p-4 gap-4 text-black">
    <label>الميدان :</label>
    <input
      type="text"
      dir="rtl"
      placeholder="حدد الميدان من القائمة المنسدلة أو أدخله يدويا"
      value={skillText}
      onChange={(e) => setSkillText(e.target.value)} // تحديث skillText عبر props
      className="text-start text-black border-none outline-none bg-transparent w-60">
    </input>
  </div>
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

export default LMAssessment;

const levels = ["تحكم أقصى", "تحكم مقبول", "تحكم جزئي", "تحكم محدود"];

interface StudentData {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
}

type ComboCriteriaProps = {
  criteria: string[];
  SelectNumber: (index: number) => void;
  SelectValue: (value: string) => void;
};

function ComboCriteria({
  criteria,
  SelectNumber,
  SelectValue,
}: ComboCriteriaProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedIndex = criteria.findIndex((c) => c === selectedValue);
    SelectNumber(selectedIndex);
    SelectValue(selectedValue);
  };

  return (
    <div dir="rtl" className="mb-4">
      {/* <label className="block mb-2 text-lg font-semibold text-gray-700 text-right">
      اختر معيارًا
    </label> */}
      <div className="relative">
        <select
          onChange={handleChange}
          className="w-full px-4 py-3 pr-10 text-gray-800 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition duration-200 ease-in-out"
          defaultValue=""
        >
          <option value="" disabled hidden>
            اختر ميدانا
          </option>
          {criteria.map((criterion, index) => (
            <option key={index} value={criterion}>
              {criterion}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
//-----------------------------------------------------------------------
const subjects = [
  "تربية إسلامية",
  "اللغة العربية",
  "الرياضيات",
  "اللغة الفرنسية",
  "اللغة الإنجليزية",
  "التربية المدنية",
  "التربية العلمية",
  "التربية التشكيلية",
  "التربية الموسيقية",
  "التربية البدنية",
  "التربية التكنولوجية",
];
function ArabicForm({ skillText, setSkillText }: { skillText: string; setSkillText: React.Dispatch<React.SetStateAction<string>> }) {
  const [wilaya, setWilaya] = useState("");
  const [school, setSchool] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(subjects[1]);
  const [season, setSeason] = useState("");
  const [teacher, setTeacher] = useState("");

  // تحميل البيانات عند أول مرة
  useEffect(() => {
    const storedWilaya = localStorage.getItem("wilaya") || "";
    const storedSchool = localStorage.getItem("school") || "";
    const storedSubject = localStorage.getItem("subject") || subjects[1];
    const storedSkillText = localStorage.getItem("skillText") || "";
    const storedSeason = localStorage.getItem("season") || "";
    const storedTeacher = localStorage.getItem("teacher") || "";

    console.log("Loaded values:", {
      storedWilaya,
      storedSchool,
      storedSubject,
      storedSkillText,
      storedSeason,
      storedTeacher,
    });

    setWilaya(storedWilaya);
    setSchool(storedSchool);
    setSelectedSubject(storedSubject);
    setSeason(storedSeason);
    setTeacher(storedTeacher);
  }, []);

  // حفظ البيانات عند التغيير
  useEffect(() => {
    console.log("Saving values:", {
      wilaya,
      school,
      selectedSubject,
      skillText,
      season,
      teacher,
    });

    localStorage.setItem("wilaya", wilaya);
    localStorage.setItem("school", school);
    localStorage.setItem("subject", selectedSubject);
    localStorage.setItem("skillText", skillText);
    localStorage.setItem("season", season);
    localStorage.setItem("teacher", teacher);
  }, [wilaya, school, selectedSubject, skillText, season, teacher]);

  return (
    <div
      dir="rtl"
      className="flex justify-between items-start font-bold text-[16px] p-4 gap-4 text-black"
    >
      {/* المقاطعة والابتدائية */}
      <div className="border-2 border-cyan-500 rounded-xl p-3 bg-gray-100">
        <div className="flex items-center gap-1 mb-2">
          <label>مقاطعة:</label>
          <input
            type="text"
            dir="rtl"
            placeholder="أدخل اسم المقاطعة"
            value={wilaya}
            onChange={(e) => setWilaya(e.target.value)}
            className="text-right text-black border-none outline-none bg-transparent w-32"
          />
        </div>
        <div className="flex items-center gap-1">
          <label>ابتدائية:</label>
          <input
            type="text"
            dir="rtl"
            placeholder="أدخل اسم المؤسسة"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="text-right text-black border-none outline-none bg-transparent w-40"
          />
        </div>
      </div>

      {/* الشبكة التحليلية */}
      <div className="border-2 border-red-500 rounded-xl p-3 bg-gray-100 text-center">
        <div className="mb-2">
          <span>الشبكة التحليلية لتقييم الكفاءات الختامية لمادة</span>{" "}
          <select
            dir="rtl"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="text-center text-black border-none outline-none bg-transparent w-40"
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        {/* كفاءة فهم المكتوب */}
        <div>
          <input
            type="text"
            dir="rtl"
            placeholder="حدد الميدان من القائمة المنسدلة أو أدخله يدويا"
            value={skillText}
            onChange={(e) => setSkillText(e.target.value)} // تحديث skillText عبر props
            className="text-center text-black border-none outline-none bg-transparent w-60"
          />
        </div>

        <div className="mt-4"></div>
      </div>

      {/* الموسم الدراسي والأستاذ */}
      <div className="border-2 border-cyan-500 rounded-xl p-3 bg-gray-100">
        <div className="flex items-center gap-1 mb-2">
          <label>الموسم الدراسي:</label>
          <input
            type="text"
            dir="rtl"
            placeholder="2025/2024"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="text-right text-black border-none outline-none bg-transparent w-24"
          />
        </div>
        <div className="flex items-center gap-1">
          <label>الأستاذ:</label>
          <input
            type="text"
            dir="rtl"
            placeholder="ادخل اسم الأستاذ"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            className="text-right text-black border-none outline-none bg-transparent w-32"
          />
        </div>
      </div>
    </div>
  );
}


