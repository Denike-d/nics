// File: components/CertificateModal.tsx
"use client";

import { FC } from "react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateUrl: string; // URL of the certificate (image/pdf)
}

const CertificateModal: FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificateUrl,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50">
      <div className="bg-white rounded-lg w-11/12 md:w-1/2 lg:w-1/2 p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flex flex-col items-center">
          {/* Display image or PDF */}
          {certificateUrl.endsWith(".pdf") ? (
            <iframe
              src={certificateUrl}
              className="w-full h-96 mb-4"
              title="Certificate"
            />
          ) : (
            <img
              src={certificateUrl}
              alt="Certificate"
              className="mb-4 max-h-96 object-contain"
            />
          )}

          {/* Download Button */}
          {/* <a
            href={certificateUrl}
            download
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Download
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
