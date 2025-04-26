import { useEffect, useState } from "react";
import { useAssContext } from "@/contexts/assContex";

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
export default function ArabicForm() {
    const { setSkillText, skillText } = useAssContext();
 
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
    // console.log("Saving values:", {
    //   wilaya,
    //   school,
    //   selectedSubject,
    //   skillText,
    //   season,
    //   teacher,
    // });

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

