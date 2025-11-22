"use client";

import { useState } from "react";
import { Upload, Eye, Trash, Download, X } from "lucide-react";

interface FileUploadPreviewProps {
  label?: string;
  defaultFileName?: string;
  onFileChange?: (file: File | null) => void;
  isEditable?: boolean;
}

export default function FileUploadPreview({
  label = "Current file:",
  defaultFileName = "document.pdf",
  onFileChange,
  isEditable = false,
}: FileUploadPreviewProps) {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);

      const url = URL.createObjectURL(selected);
      setFileUrl(url);

      onFileChange?.(selected);
    }
  };

  const handleDeleteFile = () => {
    setFile(null);
    if (fileUrl) URL.revokeObjectURL(fileUrl);
    setFileUrl(null);
    setShowPreview(false);

    onFileChange?.(null);
  };

  return (
    <>
      <div className="flex items-center space-x-3">
        {/* Upload */}
        <label
          className={`flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md cursor-pointer transition-colors ${
            !isEditable && "opacity-50 cursor-not-allowed"
          }`}
        >
          <Upload className="w-4 h-4" />

          <p className="text-gray-600 text-sm">
            {label}{" "}
            <span className="font-medium truncate overflow-hidden text-ellipsis whitespace-nowrap">
              {file ? file.name : defaultFileName}
            </span>
          </p>

          <input
            type="file"
            onChange={handleFileUpload}
            disabled={!isEditable}
            className="hidden"
            accept=".pdf,.jpg,.jpeg,.png"
          />
        </label>

        {/* Preview */}
        {fileUrl && (
          <button
            type="button"
            onClick={() => setShowPreview(true)}
            className="p-2 rounded-md bg-blue-100 hover:bg-blue-200 transition-colors"
          >
            <Eye className="w-5 h-5 text-blue-600" />
          </button>
        )}

        {/* Delete */}
        {file && (
          <button
            type="button"
            onClick={handleDeleteFile}
            className="p-2 rounded-md bg-red-100 hover:bg-red-200 transition-colors"
          >
            <Trash className="w-5 h-5 text-red-600" />
          </button>
        )}
      </div>

      {/* Preview Modal */}
      {showPreview && fileUrl && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-[500px] h-[90vh] p-4 relative">
            {/* Close */}
            <button
              className="absolute top-3 right-3 p-2 bg-black  rounded-full"
              onClick={() => setShowPreview(false)}
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* File viewer */}
            <div className="w-full h-[70vh] rounded-md overflow-hidden">
              {file?.type === "application/pdf" ? (
                <iframe src={fileUrl} className="w-full h-full" />
              ) : (
                <img src={fileUrl} className="w-full h-full object-cover" />
              )}
            </div>

            {/* Download button */}
            <a
              href={fileUrl}
              download={file?.name}
              className="mt-4 flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download File
            </a>
          </div>
        </div>
      )}
    </>
  );
}
