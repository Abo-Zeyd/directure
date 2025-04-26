import { AssRoot } from "@/contexts/assContex";
import MainSection from "@/sections/assessment/mainSection";

function page() {
  return (
    <AssRoot>
      <div className="flex flex-col min-h-screen justify-between items-center  px-4 sm:px-20 bg-gray-200">
        <main className="flex-grow my-10">
          <MainSection />
        </main>
      </div>
    </AssRoot>
  );
}

export default page;
