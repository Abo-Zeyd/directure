"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AssContextType {
  showInfSection: boolean;
  setshowInfSection: (newValue: boolean) => void;
  setcriteriaNum:  (index: number) => void;
  criteriaNum: number;
  skillText: string;
  setSkillText: (newValue: string) => void;
  setCriteria: (newValue: string[]) => void;
  criteria: string[];
  data: StudentData[];
  setDataGet: (newValue: StudentData[]) => void;
}

const AssContext = createContext<AssContextType | undefined>(undefined);

// هذا هو المكون الأساسي المغلف لجميع المكونات
export const AssRoot: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showInfSection, setshowInfSection] = useState(true);
  // تغيير الميدان
  const [criteriaNum, setcriteriaNum] = useState<number>(0);
   const [skillText, setSkillText] = useState("");

  const [criteria, setCriteria] = useState<string[]>([]);

  const [data, setDataGet] = useState<StudentData[]>([]);

  return (
    <AssContext.Provider
      value={{
        showInfSection,
        setshowInfSection,
        setcriteriaNum,
        criteriaNum,
        setCriteria,
        criteria,
        data,
        setDataGet,
        skillText,
        setSkillText,
      }}
    >
      {children}
    </AssContext.Provider>
  );
};

// Hook للوصول للكونتكست
export const useAssContext = (): AssContextType => {
  const context = useContext(AssContext);
  if (!context) {
    throw new Error("useAssContext must be used within an AssRoot");
  }
  return context;
};

interface StudentData {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
}
