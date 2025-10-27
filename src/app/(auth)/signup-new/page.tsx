"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import logo from "../../../../public/images/logo.png";
import i4logo from "../../../../public/images/i4logo.png";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#608370]">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={logo}
              alt="NESREA Logo"
              width={60}
              height={43}
              className="mr-4"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/landing/home"
              className="text-gray-800 hover:text-[#10793F]"
            >
              Home
            </Link>
            <Link href="#" className="text-gray-800 hover:text-[#10793F]">
              Services
            </Link>
            <Link href="#" className="text-gray-800 hover:text-[#10793F]">
              Documents
            </Link>
            <Link href="#" className="text-gray-800 hover:text-[#10793F]">
              Clearance
            </Link>
            <Link href="#" className="text-gray-800 hover:text-[#10793F]">
              Contact
            </Link>
          </nav>

          {/* Verify Certificate Button */}
          <button className="bg-[#10793F] text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors">
            Verify Certificate
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex justify-between items-center px-6 py-8">
        {/* Left Side - Form */}
        <div className="flex-1 max-w-md">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">NICS</h1>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              NESREA IMPORT CLEARANCE SYSTEM
            </h2>
            <p className="text-lg text-gray-800">Create your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10793F] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10793F] focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10793F] focus:border-transparent"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Create Button */}
            <button
              type="submit"
              className="w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Create
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-800">
              Already have an account?{" "}
              <Link href="/login" className="text-[#10793F] hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>

        {/* Right Side - Illustration */}
        <div className="flex-1 flex justify-center">
          <div className="bg-gray-200 rounded-2xl p-8 max-w-md">
            {/* Forklift Illustration */}
            <div className="relative">
              {/* Background circle */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-green-200 rounded-full opacity-50"></div>

              {/* Cloud shapes */}
              <div className="absolute top-0 left-0 w-16 h-8 bg-white rounded-full opacity-60"></div>
              <div className="absolute top-4 right-8 w-12 h-6 bg-white rounded-full opacity-60"></div>

              {/* Forklift and boxes illustration */}
              <div className="relative z-10">
                {/* Worker */}
                <div className="absolute -top-2 left-4 w-8 h-8 bg-green-500 rounded-full"></div>
                <div className="absolute -top-1 left-3 w-10 h-6 bg-green-500 rounded"></div>

                {/* Forklift */}
                <div className="w-24 h-16 bg-green-300 rounded-lg relative">
                  <div className="absolute -top-2 left-2 w-20 h-4 bg-green-400 rounded"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-2 bg-gray-400 rounded"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-2 bg-gray-400 rounded"></div>
                </div>

                {/* Boxes */}
                <div className="absolute top-0 left-20">
                  <div className="w-8 h-8 bg-white border-2 border-gray-300 mb-1"></div>
                  <div className="w-8 h-8 bg-white border-2 border-gray-300 mb-1"></div>
                  <div className="w-8 h-8 bg-white border-2 border-gray-300"></div>
                </div>

                {/* Pallet */}
                <div className="absolute top-6 left-20 w-12 h-2 bg-green-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full">
        <div className="bg-[#C1D7CB] flex justify-center py-2 items-center">
          <p className="text-black text-sm">Powered by</p>
          <Image
            src={i4logo}
            alt="14 Integrated Services Ltd"
            width={30}
            className="ml-2"
          />
        </div>
      </footer>
    </div>
  );
}
