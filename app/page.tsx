import {Moctasapat} from "./l_m_assessment/moctasapat";



export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen py-8 px-4 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16">
        
        <div className="text-2xl font-bold text-center text-gray-800">
          {/* عنوان الصفحة هنا إن أحببت */}
        </div>
         {/* <ExportDocx /> */}
        <Moctasapat />

        <div className="text-sm text-gray-500">
          &copy; 2023 جميع الحقوق محفوظة
        </div>

      </div>
    </div>
  );
}
