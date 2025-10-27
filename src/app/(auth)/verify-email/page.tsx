"use client";

import OtpInput from "@/components/authentication/otp";
import FooterBanner from "@/components/landing/footer-banner";
import Header from "@/components/landing/header";
import PrimaryButton from "@/components/landing/uikits/PrimaryButton";
import Link from "next/link";
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

import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEvent,
} from "react";
import { Mail, ArrowLeft, Shield } from "lucide-react";

export default function OTPPage() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [isResending, setIsResending] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(60);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Handle input change
  const handleChange = (index: number, value: string) => {
    // Allow only single numeric characters
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input automatically
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace navigation
  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste (auto-fill)
  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    const newOtp = pastedData.split("");
    setOtp((prev) => {
      const updated = [...prev];
      for (let i = 0; i < 6; i++) {
        updated[i] = newOtp[i] || "";
      }
      return updated;
    });
  };

  // Resend code handler
  const handleResend = () => {
    setIsResending(true);
    setTimer(60);
    setTimeout(() => setIsResending(false), 2000);
  };

  // Verify OTP
  const handleVerify = () => {
    const otpCode = otp.join("");
    if (otpCode.length === 6) {
      alert(`Verifying OTP: ${otpCode}`);
    }
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <section>
      <Header />
      <div className="min-h-screen flex">
        {/* Left Side - Image Section */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
            alt="Security"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-green-600/80" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-md border border-white/20">
              <Shield className="w-16 h-16 mb-4 mx-auto" />
              <h2 className="text-3xl font-bold mb-4 text-center">
                Account Verification
              </h2>
              <p className="text-white/90 text-center text-lg">
                We've sent a verification code to your email.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - OTP Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full max-w-md">
            {/* Back Button */}
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </button>

            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Verify Your Email
            </h1>
            <p className="text-gray-600 mb-8">
              We've sent a 6-digit verification code to{" "}
              <span className="font-semibold text-gray-900">
                user@example.com
              </span>
            </p>

            {/* OTP Input Fields */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Enter Verification Code
              </label>
              <div className="flex gap-3 justify-between">
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleChange(index, e.target.value)
                    }
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl 
                             focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                ))}
              </div>
            </div>

            {/* Timer and Resend */}
            <div className="mb-4 text-center">
              {timer > 0 ? (
                <p className="text-gray-600">
                  Resend code in{" "}
                  <span className="font-semibold text-green-600">
                    {Math.floor(timer / 60)}:
                    {(timer % 60).toString().padStart(2, "0")}
                  </span>
                </p>
              ) : (
                <button
                  onClick={handleResend}
                  disabled={isResending}
                  className="text-green-600 font-semibold hover:text-blue-700 disabled:opacity-50"
                >
                  {isResending ? "Sending..." : "Resend Code"}
                </button>
              )}
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Verify Email
            </button>

            {/* Help Text */}
            {/* <p className="text-center text-sm text-gray-500 mt-6">
            Didn't receive the code?{" "}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Check spam folder
            </a>
          </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
