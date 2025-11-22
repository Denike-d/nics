// components/OtpModal.tsx

"use client";
import React from "react";

interface OtpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (otp: string) => void;
}

export default function OtpModal({ isOpen, onClose, onVerify }: OtpModalProps) {
  const [otp, setOtp] = React.useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999]">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Enter OTP</h2>

        {/* OTP INPUT */}
        <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gr-500 text-center tracking-widest text-xl"
        />

        <div className="flex items-center justify-between mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={() => onVerify(otp)}
            className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}
