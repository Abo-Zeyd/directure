import Image from "next/image";

function Hero() {
  return (
    <div>
        <div className="flex justify-center items-center mt-4 border-2 border-dashed border-gray-50 rounded-lg p-4 bg-gray-700">
                <Image
                  src="/si.png"
                  alt="Logo"
                  width={1200}
                  height={800}
                  className="border-b-2 border-gray-600 rounded-full "
                />
              </div>
    </div>
  )
}

export default Hero