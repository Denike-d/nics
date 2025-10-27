"use client";
import { useState, useRef } from "react";

export default function OtpInput() {
  const length = 6; // Number of OTP digits
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return; // Allow only digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if not last and value is entered
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasteData = e.clipboardData
      .getData("text")
      .slice(0, length)
      .split("");
    setOtp(pasteData);
    pasteData.forEach((char, i) => {
      if (inputRefs.current[i]) inputRefs.current[i]!.value = char;
    });
  };

  return (
    <div className="flex justify-center gap-6 mt-6" onPaste={handlePaste}>
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          //   ref={(el) => (inputRefs.current[index] = el)}
          className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-sm"
        />
      ))}
    </div>
  );
}
