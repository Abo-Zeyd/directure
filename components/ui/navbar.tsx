
"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useRouter } from 'next/navigation';

function NaveBarGen() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  // إزالة التكرارات باستخدام Set
  const navItems = Array.from(
    new Set([
      { name: "الرئيسية", href: "/" },
      { name: "التوزيعات", href: "/pages/monthlyDistrubtion" },
      { name: "التحضير", href: "/pages/monthlyDistrubtion" },
      { name: "المعلقات", href: "/pages/monthlyDistrubtion" },
    ].map((item) => JSON.stringify(item)))
  ).map((item) => JSON.parse(item));
function showDashboard() {
  // هنا يمكنك إضافة منطق لإظهار لوحة التحكم
  router.push('/dashboard');
}
  return (
    <div className="flex flex-col items-center justify-center w-full">
    <header className="w-2/3 mb-1 bg-secondary dark:bg-gray-900 border-b border-gray-600 dark:border-gray-800 z-50 rounded-b-xl">
      <nav className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 border-2 border-black dark:border-white bg-primary p-1 rounded-lg">
          <h2 className="text-black dark:text-white font-bold text-2xl">المعلم</h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-text font-bold text-black/60 dark:text-white">
          {navItems.map((item) => (
            <li key={item.href} className="hover:underline hover:underline-offset-4 ml-3 transition">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-x-3 items-center">
          <button onClick={showDashboard}
           className="px-5 py-2 text-black dark:text-white font-semibold">لوحة التحكم</button>
          <button className="px-5 py-2 text-black dark:text-white font-semibold">تسجيل</button>
          <Button handleChange={() => {}}>دخول</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-800 dark:text-white focus:outline-none text-2xl"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-5 pb-4">
          <ul className="flex flex-col space-y-3 text-black/70 dark:text-white font-bold">
            {navItems.map((item) => (
              <li key={item.href} className="hover:underline hover:underline-offset-4">
                <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-full mt-4 h-px bg-slate-500"></div>
          <div className="mt-1 flex flex-col space-y-2 w-fit">
            <button onClick={showDashboard}
             className="text-right text-black dark:text-white font-semibold py-2">لوحة التحكم</button>
            <button className="text-right text-black dark:text-white font-semibold py-2">تسجيل</button>
            <Button handleChange={() => {}}>دخول</Button>
          </div>
        </div>
      )}
    </header>
    </div>
  );
}

export default NaveBarGen;
