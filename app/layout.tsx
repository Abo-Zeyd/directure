import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactInfo from "@/components/l_M_Assessment/contactInfo";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "تقييم المكتسبات",
  description: "إنجاز بطاقات تقييم المكتسبات",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "تقييم المكتسبات",
    "بطاقات تقييم المكتسبات",
    "تقييم",
    "بطاقات",]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      dir="rtl"  className={`container mx-auto  antialiased `}
      // dir="rtl"  className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
         <footer className="flex flex-col items-center text-xl text-gray-500 py-6 text-center">
              <h1>من إنجاز: عز الدين عويسي</h1>
              <ContactInfo />
            </footer>
      </body>
    </html>
  );
}
