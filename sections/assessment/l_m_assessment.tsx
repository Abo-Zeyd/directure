"use client";

import ArabicForm from "@/components/l_M_Assessment/arabicForm";
import ComboCriteria from "@/components/l_M_Assessment/comboCriteria";
import DataTable from "@/components/l_M_Assessment/dataTable";
import { useAssContext } from "@/contexts/assContex";
import React, { useRef } from "react";
import { usePrintSection } from "@/utils/printSection";
import { Button } from "@/components/ui/Button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function LMAssessment(datainf: any) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { skillText, setSkillText } = useAssContext();
  const printSection = usePrintSection(contentRef as React.RefObject<HTMLElement>);
 
  return (
    <div>
      <div className="flex flex-row  items-center justify-center mb-4 ">
        <ComboCriteria />
        <div className="flex flex-row items-center justify-center mb-4 mr-3">
           
          <Button
           
           id="print-button"
            handleChange={() => {printSection()}}
          >
            طباعة
          </Button>
        </div>
      </div>

      {/* ✅ هذا هو المحتوى الذي سيتم تصديره */}
      <div ref={contentRef}>
        <ArabicForm />
        <div
          dir="rtl"
          className=" block  font-bold text-[16px] p-4 gap-4 text-black"
        >
          <label>الميدان :</label>
          <input
            type="text"
            dir="rtl"
            placeholder="حدد الميدان من القائمة المنسدلة أو أدخله يدويا"
            value={skillText}
            onChange={(e) => setSkillText(e.target.value)} // تحديث skillText عبر props
            className="text-start text-black border-none outline-none bg-transparent w-60"
          ></input>
        </div>
        <DataTable datainf={datainf} />
      </div>
    </div>
  );
}

export default LMAssessment;
