"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaHandPointLeft } from "react-icons/fa";

function Doc() {
  const [showInf, setshowInf] = useState<boolean>(false);
  return (
    <div className="mb-4 text-3xl  text-black ">
      <div className="flex items-center justify-center mb-4 gap-4">
        <h1>كيفية العمل ؟</h1>
        <button className="cursor-pointer  text-2xl text-blue-500 hover:text-blue-700 "
        onClick={() => setshowInf(!showInf)}>
          <FaHandPointLeft size={40} />
          </button>
      </div>

      {showInf && (
        <div>
          <Image
            className="border-2 border-gray-400 pb-4"
            src="/direct.png"
            alt=""
            width={1200}
            height={800}
          />
        </div>
      )}
    </div>
  );
}

export default Doc;
