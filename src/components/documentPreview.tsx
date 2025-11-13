"use client";

import React from "react";
import { X, Download } from "lucide-react";

interface FullScreenPreviewProps {
  fileUrl: string;
  fileName?: string;
  onClose: () => void;
}

const DocumentPreview: React.FC<FullScreenPreviewProps> = ({
  fileUrl,
  fileName,
  onClose,
}) => {
  const fileExt = fileUrl.split(".").pop()?.toLowerCase();

  const isPDF = fileExt === "pdf";
  const isImage = ["jpg", "jpeg", "png", "gif", "webp"].includes(fileExt || "");

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl h-[100vh] rounded-xl shadow-xl relative flex flex-col overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">
            {fileName || "File Preview"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* File Preview Area */}
        <div className="flex-1 bg-gray-50 flex justify-center items-center overflow-auto">
          {isPDF ? (
            <iframe
              src={fileUrl}
              className="w-full h-full"
              title="PDF Preview"
            ></iframe>
          ) : isImage ? (
            <img
              src={fileUrl}
              alt={fileName || "Image Preview"}
              className="max-h-full max-w-full object-contain rounded-lg"
            />
          ) : (
            <iframe
              src={`https://docs.google.com/gview?url=${fileUrl}&embedded=true`}
              className="w-full h-full"
              title="Document Preview"
            ></iframe>
          )}
        </div>

        {/* Footer (Download) */}
        <div className="p-4 border-t flex justify-end bg-white">
          <a
            href={fileUrl}
            download={fileName || "file"}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocumentPreview;
