"use clent";

import ComboBox from "./ComboBox";
import React from "react";
import { AiFillEdit } from "react-icons/ai";

const data = [
  { name: "Ahmed", age: 25, job: "Doctor" },
  { name: "Ali", age: 30, job: "Engineer" },
  { name: "Sara", age: 28, job: "Teacher" },
  { name: "Mahmoud", age: 35, job: "Developer" },
  { name: "Fatima", age: 22, job: "Designer" },
  { name: "Sofia", age: 32, job: "Manager" },
];
function dataTable() {
  return (
    <div>
      {data ? (
        <div className="">
          <table
            dir="rtl"
            className="w-full mx-auto  text-sm text-left rtl:text-right text-gray-950 dark:text-blue-100
                          border border-collapse border-solid "
          >
            <thead className="text-xs text-text uppercase border-b  dark:text-white ">
              <tr className="sticky top-0  bg-primary">
                {Object.keys(data[0]).map((key, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-1 text-center h-10 bg-primary mt-4 text text-base border-solid border-l-2 border-accent
                               group"
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data?.map((item: { [key: string]: unknown }, index: number) => {
                return (
                  <tr key={index} className="bg-accent p-0  ">
                    {/* عرض القيم بناءً على مفاتيح الأعمدة */}
                    {Object.entries(item).map(([key, value], valueIndex) => {
                      return (
                        <td
                          key={valueIndex}
                          className="px-1 h-30 text-center border border-primary cursor-pointer break-word whitespace-normal relative group"
                        >
                          {/* قائمة تغيير أسابيع الشهر */}
                          {key === "name"  && (
                            <div
                              className="absolute p-0 -left-1 -top-1  bg-slate-400 border-2 border-gray-600 rounded-md hidden  
                              group-hover:block 
                          transition-opacity duration-200"
                            >
                              <ComboBox
                                changeCompmEvent={(e) => {
                                  console.log("Selected value:", e.target.value);
                                }}
                                data={["1", "2", "3"]}
                                labelTitle=""
                                id="setFirstweekNumber"
                              />
                            </div>
                          )}

                          {key === "job" && (
                            <div>
                              <div
                                className="absolute p-0 -left-1 top-2  bg-slate-400 border-2 border-gray-600 rounded-md hidden  group-hover:block 
                          transition-opacity duration-200"
                              >
                                <ComboBox
                                  changeCompmEvent={(e) => {
                                    console.log("Selected job:", e.target.value);
                                  }}
                                  data={[
                                    "job",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                  ]}
                                  labelTitle=""
                                  id="listArabicCourses"
                                />
                                {/* )} */}
                              </div>
                            </div>
                          )}

                          {
                            /* key != "age" && */ <div
                              className="absolute p-1  bg-primary border-2 border-gray-300 rounded-full 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            >
                              <AiFillEdit className="text-text" />
                            </div>
                          }
                          {String(value)
                            .split("\n")
                            .map((line, i) => (
                              <span key={i} className="text-base">
                                {line}
                                <br />
                              </span>
                            ))}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default dataTable;
