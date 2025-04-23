import {Moctasapat} from "./l_m_assessment/moctasapat";
import ContactInfo from "./contactInfo";


export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen py-8 px-4 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16">
        
        <div className="text-2xl font-bold text-center text-gray-800">
          {/* عنوان الصفحة هنا إن أحببت */}
        </div>
         {/* <ExportDocx /> */}
        <Moctasapat />

        <div className="flex flex-col items-center text-xl text-gray-500">
         <h1>برمجة: عز الدين عويسي</h1>
         <ContactInfo />

        </div>
        

      </div>
    </div>
  );
}
