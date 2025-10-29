"use client";

import FooterBanner from "@/components/landing/footer-banner";
import Header from "@/components/landing/header";
import PrimaryButton from "@/components/landing/uikits/PrimaryButton";
// import { useState } from "react";
import Image from "next/image";
import Truck from "../../../../public/images/Truck.png";
// import { Eye, EyeOff } from "lucide-react";
import box from "../../../../public/images/box.jpg";
import Link from "next/link";

// export default function SignUpPage() {
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
//     <div className="h-screen">
//       {/* <Header /> */}
//       <div className="flex justify-between text-black items-center  px-32 py-4">
//         <div className="">
//           <h1 className="text-center text-4xl font-bold mb-2">NICS</h1>
//           <h2 className="text-xl font-semibold mb-4">
//             {" "}
//             NESREA IMPORT CLEARANCE SYSTEM
//           </h2>

//           <p className="text-lg mt-4">Log into your account</p>

//           {success ? (
//             <p className="text-green-600 text-center font-medium">
//               🎉 Account created successfully!
//             </p>
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

//               {error && <p className="text-red-500 text-sm">{error}</p>}

//               <div className="mt-4">
//                 <div className="flex items-center justify-center mt-8">
//                   <PrimaryButton
//                     title="Login"
//                     href="/user-type"
//                     className="bg-green-700 text-white text-bold items-center justify-center w-[400px] h-[50px] p-8"
//                   />
//                 </div>

//                 <p className="text-center text-sm text-white mt-2 ">
//                   Don't have an account?{" "}
//                   <Link
//                     href="/signup"
//                     className="font-semibold hover:underline"
//                   >
//                     Create an account
//                   </Link>
//                 </p>
//               </div>
//             </form>
//           )}
//         </div>
//         <Image src={box} alt="truck" width={450} />
//       </div>
//     </div>
//   );
// }
// app/login/page.tsx  (or src/pages/login.tsx)
// app/login/page.tsx or src/pages/login.tsx
// export default function LoginPage() {
//   return (
//     <section>
//       <Header />
//       <div className="flex h-screen">
//         {/* Left Side - Full Image */}
//         <div
//           className="hidden md:block w-1/2 bg-cover top-0 bg-center"
//           style={{ backgroundImage: "url('/images/box.jpg')" }}
//         ></div>

//         {/* Right Side - Login Form */}
//         <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-8">
//           <div className="w-full max-w-md">
//             <h2 className="text-4xl font-bold mb-8 text-gray-800">
//               Welcome Back
//             </h2>

//             <form className="space-y-6">
//               <div>
//                 <label className="block text-gray-700 mb-2">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full border-b-2 border-gray-300 p-3 focus:outline-none focus:border-green-600 transition"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-2">Password</label>
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="w-full border-b-2 border-gray-300 p-3 focus:outline-none focus:border-green-600 transition"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-green-800 text-white py-3 rounded-lg hover:bg-green-700 transition"
//               >
//                 Sign In
//               </button>

//               <p className="text-sm text-gray-600 text-center">
//                 Don’t have an account?{" "}
//                 <a href="/signup" className="text-green-800 hover:underline">
//                   Sign up
//                 </a>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import i4logo from "../../../../public/images/i4logo.png";

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
      <div className="flex items-center justify-center p-4">
        <div
          className="absolute inset-0 opacity-20 bg-cover -z-10 pointer-events-none"
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
          className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md rounded-md shadow-lg p-8 mt-8"
          aria-label="Sign up form"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Log into your account
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

          {/* <label className="block mb-4 relative">
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
          </label> */}

          {!passwordsMatch && confirmPassword.length > 0 && (
            <p className="text-sm text-red-600 mb-3">Passwords do not match.</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-800 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            <a href="/verify-email">Login</a>
          </button>
          <p className="text-sm text-center text-gray-700 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-green-800 font-medium">
              Signup
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
