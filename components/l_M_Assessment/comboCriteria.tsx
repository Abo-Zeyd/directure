import React from 'react'
import { useAssContext } from "@/contexts/assContex";
// import ComboBox from '../ui/ComboBox';


 export default function ComboCriteria() {

  const {criteria, setcriteriaNum, setSkillText } = useAssContext();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedIndex = criteria.findIndex((c) => c === selectedValue);
    setcriteriaNum(selectedIndex);
    setSkillText(selectedValue);
    console.log("Selected value:", selectedValue);
    console.log("Selected index:", selectedIndex);
  };
  
  // const options = criteria.map((criterion) => criterion);

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
        {/* <ComboBox  data={options} changeCompmEvent={handleChange} labelTitle='' 
        style={{padding:"10px"}}/> */}
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

