'use client'
import { SiFacebook } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
export default function ContactInfo() {
  return (
    <div  >
     

      <div className="flex items-center ">
       
        <a
          href="https://www.facebook.com/zaldynwysy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
         <SiFacebook size={38} /> 
        </a>
        <a
          href="https://wa.me/213664153813"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
         <IoLogoWhatsapp size={40} color="#25d366" /> 
        </a>
        <a
          href="https://t.me/azzeddine_aouissi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
         <FaTelegram size={40} color="#0088cc" /> 
        </a>
        
      </div>
    </div>
  )
}
