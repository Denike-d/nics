"use client";

import FooterBanner from "@/components/landing/footer-banner";
import Header from "@/components/landing/header";
import PrimaryButton from "@/components/landing/uikits/PrimaryButton";
// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Truck from "../../../../public/images/Truck.png";
// import { Eye, EyeOff } from "lucide-react";

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

//     if (formData.password.length < 6) {
//       setError("Password must be at least 6 characters.");
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setError("");
//     setSuccess(true);
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="bg-[#608370] ">
//       <Header />
//       <div className="flex justify-between text-white items-center px-32 py-4">
//         <div className="">
//           <h1 className="items-centre text-center text-4xl font-bold mb-2">
//             NICS
//           </h1>
//           <h2 className="text-xl font-semibold mb-4">
//             NESREA IMPORT CLEARANCE SYSTEM
//           </h2>

//           <p className="text-lg mt-4">Create your Account</p>

//           {success ? (
//             <Link href="/login" />
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//               <div>
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <div>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="you@example.com"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-[400px] p-2 border rounded-lg"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Password
//                 </label>
//                 <div className="relative flex justify-between">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     placeholder="Enter password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-[400px] p-2 border rounded-lg"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute inset-y-0 right-3 flex items-center text-white"
//                   >
//                     {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                   </button>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Confirm Password
//                 </label>
//                 <div className="relative flex justify-between">
//                   <input
//                     type={showConfirmPassword ? "text" : "password"}
//                     name="confirmPassword"
//                     placeholder="Re-enter password"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className="w-[400px] p-2 border rounded-lg"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                     className="absolute inset-y-0 right-3 flex items-center text-white"
//                   >
//                     {showConfirmPassword ? (
//                       <EyeOff size={20} />
//                     ) : (
//                       <Eye size={20} />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {error && <p className="text-red-500 text-sm">{error}</p>}

//               <div className="flex items-center justify-center mt-6">
//                 <PrimaryButton
//                   title="Create an account"
//                   href="/login"
//                   className="bg-white text-black text-bold text-lg items-center justify-center w-[400px] h-[50px] p-8"
//                 />
//               </div>
//               <p className="text-center text-sm">
//                 Already have an account?{" "}
//                 <Link
//                   href="/login"
//                   className="text-white font-semibold hover:underline"
//                 >
//                   Login
//                 </Link>
//               </p>
//             </form>
//           )}
//         </div>
//         <Image src={Truck} alt="truck" width={400} />
//       </div>
//       <FooterBanner />
//     </div>
//   );
// }
import React, { useState } from "react";
import i4logo from "../../../../public/images/i4logo.png";
import { Eye, EyeOff } from "lucide-react";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const passwordsMatch = password === confirmPassword && password.length > 0;
  const canSubmit = email.trim() !== "" && passwordsMatch;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    console.log({ email, password });
  }

  return (
    <section>
      <Header />
      <div className="flex items-center justify-center p-4">
        <div
          className="absolute inset-1 opacity-20 bg-cover"
          style={{ backgroundImage: "url(/images/ship.jpg)" }}
        />

        <div className="absolute bottom-8 right-8 z-20">
          <p className="text-[12px] ml-[-8px]">Powered by</p>
          <Image
            src={i4logo}
            alt="Company Logo"
            className="h-12 w-auto hover:opacity-90 transition-opacity"
          />
        </div>
        {/* <div className="absolute inset-0 bg-black/70 z-10" />{" "} */}
        {/* overlay for opacity */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md rounded-md shadow-lg p-8 mt-4"
          aria-label="Sign up form"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Create an account
          </h2>

          <label className="block mb-3">
            <span className="text-sm font-medium">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300 p-3"
              placeholder="you@example.com"
            />
          </label>

          <label className="block mb-3 relative">
            <span className="text-sm font-medium">Password</span>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300 p-3 pr-12"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 flex items-center justify-center h-full p-1 rounded-md focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          <label className="block mb-4 relative">
            <span className="text-sm font-medium">Confirm password</span>
            <div className="relative flex items-center">
              <input
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300 p-3 pr-12"
                placeholder="Confirm password"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((s) => !s)}
                className="absolute right-3 flex items-center justify-center h-full p-1 rounded-md focus:outline-none"
                aria-label={
                  showConfirm
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          {!passwordsMatch && confirmPassword.length > 0 && (
            <p className="text-sm text-red-600 mb-3">Passwords do not match.</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-800 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            <a href="/verify-email"> Create an Account</a>
          </button>
          <p className="text-sm text-center text-gray-700 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-green-800 font-medium">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
