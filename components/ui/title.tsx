import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string; // خاصية اختيارية
}

function Title({ children, className }: TitleProps) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={
          className
            ? className // استخدم التنسيق المخصص إذا تم تمريره
            : "bg-primary px-3 py-2 border-double border-2 border-secondary rounded-md shadow-md shadow-slate-700 my-2" // استخدم التنسيق الافتراضي
        }
      >
        <h1 className="text-center">{children}</h1>
      </div>
    </div>
  );
}

export default Title;
