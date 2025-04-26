"use client";

import { Moctasapat } from "./moctasapat";
import Doc from "@/components/l_M_Assessment/doc";
import Hero from "@/components/l_M_Assessment/hero";
import { useAssContext } from "@/contexts/assContex";

function MainSection() {
  const { showInfSection } = useAssContext();
  return (
    <div>
      <div>
        <Doc />
      </div>
      <Moctasapat />
      {showInfSection && <Hero />}
    </div>
  );
}

export default MainSection;
