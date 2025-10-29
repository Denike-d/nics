import PrimaryButton from "./uikits/PrimaryButton";
import Image from "next/image";
import phone from "../../../public/images/phone.png";

// export default function () {
//   return (
//     <div className="px-12 py-8 bg-[#222222] relative">
//       <Image
//         src="/images/Ellipse 9.png"
//         alt="decorative ellipse"
//         width={300}
//         height={300}
//         className="pointer-events-none select-none absolute top-0 right-0 opacity-70 z-0"
//         aria-hidden
//       />
//       <Image
//         src="/images/Ellipse 8.png"
//         alt="decorative ellipse"
//         width={350}
//         height={350}
//         className="pointer-events-none select-none absolute bottom-0 left-0 opacity-70 z-0"
//         aria-hidden
//       />
//       <p className="text-center font-semibold md:text-3xl text-white">
//         Verify your certificates with ease
//       </p>

//       <div className="flex justify-between items-center">
//         <div className="ml-60">
//           <p className="text-xl text-white">
//             Ensure the validity of your import clearance <br />
//             certificates in just a few clicks
//           </p>
//           <PrimaryButton title="verify certificate" href="" className="mt-4" />
//         </div>
//         <Image src={phone} alt="phone" width={350} className="mr-32" />
//       </div>
//     </div>
//   );
// }
import React from "react";
import { ShieldCheck, FileCheck, Sparkles } from "lucide-react";

export default function CertificateVerificationBanner() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-8 py-6">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">
              Verify your certificates with ease
            </h2>
            <p className="text-indigo-100 text-sm mb-4">
              Ensure the validity of your import clearance certificates in just
              a few clicks
            </p>
            <button className="bg-white hover:bg-gray-100 text-green-600 font-semibold px-6 py-2 rounded-lg transition-all duration-200 flex items-center gap-2">
              <FileCheck className="w-4 h-4" />
              <a href="/verify-certificate">Verify Certificate</a>
            </button>
          </div>

          {/* Right Icon */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative">
              <ShieldCheck className="w-24 h-24 text-white/20" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ShieldCheck className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
