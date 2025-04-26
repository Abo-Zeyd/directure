import React from "react";
import "./style.css";

export default function ComboBox({
  data,
  labelTitle,
  changeCompmEvent,
  id,
  style,
}: {
  data: string[] | null;
  labelTitle: string;
  changeCompmEvent: React.ChangeEventHandler<HTMLSelectElement>;
  id?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className="w-full ">
      {data ? (
        <div className="flex flex-col sm:flex-row  items-start gap-2 sm:gap-4 m-1 w-full">
          <label
            htmlFor={id}
            className="text-base font-medium text-black dark:text-gray-300"
          >
            {labelTitle}
          </label>
          <select
           id={id}
           name={id}
           className="combStyle appearance-none w-full rounded-lg font-bold bg-primary text-text border-2 border-secondary shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
           onChange={changeCompmEvent}
           style={style}
          >
            {data.map((item, index) => (
              <option key={index} className="bg-primary">
                {item}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
}
