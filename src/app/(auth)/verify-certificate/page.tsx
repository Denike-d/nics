"use client";

// import { useState } from "react";
// import PrimaryButton from "@/components/landing/uikits/PrimaryButton";
// import Header from "@/components/landing/header";
// import FooterBanner from "@/components/landing/footer-banner";
// import veryCertificate from "../../../../public/images/verifyCertificate.png";
// import Image from "next/image";
// import Link from "next/link";
// export default function page() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password || !formData.confirmPassword) {
//       setError("All fields are required.");
//       return;
//     }

//     setError("");
//     setSuccess(true);
//     console.log("Form submitted:", formData);
//   };
//   return (
//     <div className="min-h-screen bg-[#608370]">
//       <Header />
//       <div className="flex justify-between text-white items-center mx-auto px-32 py-4">
//         <div className="">
//           <div>
//             <h1 className="items-centre text-center justify-center text-4xl font-bold mb-2 ml-[-75px]">
//               NICS
//             </h1>
//             <h2 className="text-xl font-semibold mb-4">
//               NESREA IMPORT CLEARANCE SYSTEM
//             </h2>
//             <p className="text-md mt-4">
//               Enter your certificate information to confirm its authenticity
//             </p>
//           </div>

//           {success ? (
//             <p className="text-green-600 text-center font-medium">
//               🎉 Account created successfully!
//             </p>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-4 mt-6">
//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   NESREA ID
//                 </label>
//                 <div>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter your NESREA ID (e.g. NES/123456789)"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-[400px] p-2 border rounded-lg"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Certificate Number
//                 </label>
//                 <div className="relative flex justify-between">
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Enter your certificate number"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-[400px] p-2 border rounded-lg"
//                   />
//                   {/* <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute inset-y-0 right-3 flex items-center text-white"
//                   >
//                     {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                   </button> */}
//                 </div>
//               </div>

//               {error && <p className="text-red-500 text-sm">{error}</p>}

//               <div className="mt-4">
//                 <div className="flex items-center mt-6">
//                   <PrimaryButton
//                     title="Create an account"
//                     className="bg-white text-black text-bold items-center justify-center w-[400px] h-[50px] p-8"
//                   />
//                 </div>
//                 <p className="text-sm text-center mt-2 ml-[-65px]">
//                   Already have an account?{" "}
//                   <Link
//                     href="/login"
//                     className="text-white font-semibold hover:underline"
//                   >
//                     Login
//                   </Link>
//                 </p>
//               </div>
//             </form>
//           )}
//         </div>
//         <Image src={veryCertificate} alt="certificate" width={450} />
//       </div>
//       <FooterBanner />
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  Search,
  Shield,
  CheckCircle,
  FileCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function NesreaLandingPage() {
  const [nesreaId, setNesreaId] = useState("");
  const [certificateNumber, setCertificateNumber] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-green-50 relative overflow-hidden">
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div> */}

      {/* Main Content */}
      <div className="relative container z-10 w-[600px] mx-auto px-6 py-20 flex items-center justify-center">
        <div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black leading-tight text-center">
                NESREA{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-800">
                  Import Clearance
                </span>{" "}
                System
              </h2>
              <p className="text-black text-lg leading-relaxed text-center">
                Enter your certificate information to confirm its authenticity
                in real-time. Our secure system ensures instant verification.
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label className=" text-black font-semibold mb-3 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-emerald-400" />
                    NESREA ID
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={nesreaId}
                      onChange={(e) => setNesreaId(e.target.value)}
                      placeholder="e.g. NES/123456789"
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border text-black border-emerald-400 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-black font-semibold mb-3 flex items-center gap-2">
                    <Search className="w-4 h-4 text-emerald-400" />
                    Certificate Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={certificateNumber}
                      onChange={(e) => setCertificateNumber(e.target.value)}
                      placeholder="Enter your certificate number"
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-emerald-400 text-black placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-green-800 to-green-700 hover:from-green-800 hover:to-green-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] flex items-center justify-center gap-2 group">
                  Verify Certificate
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="pt-2 border-t border-white/10">
                  <p className="text-center text-black text-sm">
                    New to NICS?{" "}
                    <a
                      href="/signup"
                      className="text-green-800 font-semibold hover:text-emerald-300 transition-colors"
                    >
                      Create an account
                    </a>
                  </p>
                  <p className="text-center text-black text-sm mt-2">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="text-green-800 font-semibold hover:text-teal-300 transition-colors"
                    >
                      Login here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
