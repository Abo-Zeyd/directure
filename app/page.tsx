import { AssRoot } from "@/contexts/assContex";
import Link from "next/link";


export default function Home() {
  return (
    <AssRoot>
      <div className="flex flex-col min-h-screen justify-between items-center px-4 sm:px-20 bg-gray-200">
        <main className="flex-grow flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center">
            <Link
              href="/l_m_assessment"
              className="buttonheader text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              إنجاز بطاقات التقييم
            </Link>
            
          </div>
        </main>
      </div>
    </AssRoot>
  );
}
