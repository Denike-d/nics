"use client";

import OtpInput from "@/components/authentication/otp";
import FooterBanner from "@/components/landing/footer-banner";
import Header from "@/components/landing/header";
import PrimaryButton from "@/components/landing/uikits/PrimaryButton";
import Link from "next/link";
import Image from "next/image";
// import React from "react";

// export default function verifyEmail() {
//   return (
//     <div className="min-h-screen bg-[#608370]">
//       <Header />
//       <div>
//         <div className="flex text-white justify-center items-center my-12">
//           <div>
//             <h1 className="text-centre text-4xl font-bold mb-2">NICS</h1>
//             <h2 className="text-xl font-semibold text-centre mb-4">
//               NESREA IMPORT CLEARANCE SYSTEM
//             </h2>
//             <p className="text-center mt-8 text-lg">Verify your email</p>
//             <p className="text-centre mt-4">
//               An OTP has been sent to example@domain.com <br />
//               please enter it below to verify your email{" "}
//             </p>
//             <div className="mt-12">
//               <OtpInput />
//             </div>

//             <div className="flex justify-between mt-8 text-sm">
//               <p>OTP expires in 10 minutes: 10:00</p>
//               <p>Resend code</p>
//             </div>
//             <div className="flex items-center justify-center mt-12">
//               <PrimaryButton
//                 title="Verify Email"
//                 className="w-[400px] h-[50px] items-center justify-center"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <FooterBanner />
//     </div>
//   );
// }

// import React, {
//   useState,
//   useRef,
//   useEffect,
//   ChangeEvent,
//   KeyboardEvent,
//   ClipboardEvent,
// } from "react";
// import { Mail, ArrowLeft, Shield } from "lucide-react";

// export default function OTPPage() {
//   const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
//   const [isResending, setIsResending] = useState<boolean>(false);
//   const [timer, setTimer] = useState<number>(60);
//   const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

//   // Countdown timer
//   useEffect(() => {
//     if (timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [timer]);

//   // Handle input change
//   const handleChange = (index: number, value: string) => {
//     // Allow only single numeric characters
//     if (!/^\d?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     // Move to next input automatically
//     if (value !== "" && index < 5) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   // Handle backspace navigation
//   const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   // Handle paste (auto-fill)
//   const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData
//       .getData("text")
//       .replace(/\D/g, "")
//       .slice(0, 6);
//     const newOtp = pastedData.split("");
//     setOtp((prev) => {
//       const updated = [...prev];
//       for (let i = 0; i < 6; i++) {
//         updated[i] = newOtp[i] || "";
//       }
//       return updated;
//     });
//   };

//   // Resend code handler
//   const handleResend = () => {
//     setIsResending(true);
//     setTimer(60);
//     setTimeout(() => setIsResending(false), 2000);
//   };

//   // Verify OTP
//   const handleVerify = () => {
//     const otpCode = otp.join("");
//     if (otpCode.length === 6) {
//       alert(`Verifying OTP: ${otpCode}`);
//     }
//   };

//   const isComplete = otp.every((digit) => digit !== "");

//   return (
//     <section>
//       <Header />
//       <div className="min-h-screen flex">
//         {/* Left Side - Image Section */}
//         <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
//             alt="Security"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-green-600/80" />

//           <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
//             <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-md border border-white/20">
//               <Shield className="w-16 h-16 mb-4 mx-auto" />
//               <h2 className="text-3xl font-bold mb-4 text-center">
//                 Account Verification
//               </h2>
//               <p className="text-white/90 text-center text-lg">
//                 We've sent a verification code to your email.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - OTP Form */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white">
//           <div className="w-full max-w-md">
//             {/* Back Button */}
//             <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors">
//               <ArrowLeft className="w-5 h-5" />
//               <span className="font-medium">Back</span>
//             </button>

//             {/* Icon */}
//             <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
//               <Mail className="w-8 h-8 text-white" />
//             </div>

//             {/* Heading */}
//             <h1 className="text-3xl font-bold text-gray-900 mb-3">
//               Verify Your Email
//             </h1>
//             <p className="text-gray-600 mb-8">
//               We've sent a 6-digit verification code to{" "}
//               <span className="font-semibold text-gray-900">
//                 user@example.com
//               </span>
//             </p>

//             {/* OTP Input Fields */}
//             <div className="mb-6">
//               <label className="block text-sm font-semibold text-gray-700 mb-4">
//                 Enter Verification Code
//               </label>
//               <div className="flex gap-3 justify-between">
//                 {otp.map((digit, index) => (
//                   <input
//                     key={index}
//                     ref={(el) => {
//                       inputRefs.current[index] = el;
//                     }}
//                     type="text"
//                     inputMode="numeric"
//                     maxLength={1}
//                     value={digit}
//                     onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                       handleChange(index, e.target.value)
//                     }
//                     onKeyDown={(e) => handleKeyDown(index, e)}
//                     onPaste={handlePaste}
//                     className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl
//                              focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Timer and Resend */}
//             <div className="mb-4 text-center">
//               {timer > 0 ? (
//                 <p className="text-gray-600">
//                   Resend code in{" "}
//                   <span className="font-semibold text-green-600">
//                     {Math.floor(timer / 60)}:
//                     {(timer % 60).toString().padStart(2, "0")}
//                   </span>
//                 </p>
//               ) : (
//                 <button
//                   onClick={handleResend}
//                   disabled={isResending}
//                   className="text-green-600 font-semibold hover:text-blue-700 disabled:opacity-50"
//                 >
//                   {isResending ? "Sending..." : "Resend Code"}
//                 </button>
//               )}
//             </div>

//             {/* Verify Button */}
//             <button
//               type="submit"
//               className="w-full bg-green-800 text-white py-3 rounded-lg hover:bg-green-700 transition"
//             >
//               Verify Email
//             </button>

//             {/* Help Text */}
//             {/* <p className="text-center text-sm text-gray-500 mt-6">
//             Didn't receive the code?{" "}
//             <a href="#" className="text-blue-600 font-semibold hover:underline">
//               Check spam folder
//             </a>
//           </p> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useRef, KeyboardEvent, ClipboardEvent } from "react";
import i4logo from "../../../../public/images/i4logo.png";

const OTPVerification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);

    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleVerify = () => {
    const otpCode = otp.join("");
    if (otpCode.length === 6) {
      console.log("Verifying OTP:", otpCode);
      alert(`Verifying OTP: ${otpCode}`);
    }
  };

  const handleResend = () => {
    console.log("Resending OTP");
    alert("OTP has been resent to your email/phone");
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  return (
    <section className="min-h-screen ">
      <Header />
      <div className="flex items-center justify-center p-4">
        <div
          className="absolute inset-0 opacity-20 bg-cover"
          style={{ backgroundImage: "url(/images/ship.jpg)" }}
        />

        {/* Logo at bottom right */}
        <div className="absolute bottom-8 right-8 z-20">
          <p className="ml-[-8px] text-[12px]">Powered by</p>
          <Image
            src={i4logo}
            alt="Company Logo"
            className="h-12 w-auto hover:opacity-90 transition-opacity"
          />
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-8 mt-8 w-full max-w-md relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Enter OTP</h1>
            <p className="text-gray-600 text-sm">
              We've sent a verification code to your email
            </p>
            <p className="text-gray-800 font-medium mt-1">you@example.com</p>
          </div>

          <div className="mb-8">
            <div className="flex justify-center gap-2 mb-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-14 text-center text-2xl font-semibold border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-20 transition-all"
                  aria-label={`Digit ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleVerify}
            disabled={otp.some((digit) => !digit)}
            className="w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors duration-200 mb-4"
          >
            Verify OTP
          </button>

          <div className="text-center">
            <p className="text-gray-600 text-sm mb-2">
              Didn't receive the code?
            </p>
            <button
              onClick={handleResend}
              className="text-green-700 hover:text-green-800 font-semibold text-sm transition-colors"
            >
              Resend OTP
            </button>
          </div>

          <div className="mt-6 text-center">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
            >
              ← Back to Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OTPVerification;
