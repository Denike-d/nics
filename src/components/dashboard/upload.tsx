"use client";

import { useState } from "react";

export default function FileUpload() {
  const [files, setFiles] = useState([{ name: "Resume.pdf", progress: 100 }]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files).map((file) => ({
      name: file.name,
      progress: 100,
    }));
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleBrowse = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = Array.from(e.target.files).map((file) => ({
      name: file.name,
      progress: 100,
    }));
    setFiles((prev) => [...prev, ...selected]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Upload Box */}
      <div
        className="border-2 w-[450px] border-dashed border-[#9dd4c4] h-[130px] p-2 px rounded-xl text-center bg-white shadow-sm"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <div className="text-gray-500 mb-4">Drag and drop files here</div>
        <div className="my-2 text-gray-600">- OR -</div>

        <label className="bg-green-600 text-white px-6 py-3 rounded-lg shadow cursor-pointer hover:bg-[#32a38d] transition-all">
          Browse Files
          <input
            type="file"
            multiple
            className="hidden"
            onChange={handleBrowse}
          />
        </label>
      </div>

      {/* Uploaded Files List */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-4">
          Uploaded Files
        </h4>

        <div className="space-y-3">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-2 rounded-lg shadow border border-gray-100"
            >
              <div className="flex items-center gap-3">
                {/* <div className="w-6 h-6 bg-red-100 text-green-500 flex items-center justify-center rounded-lg text-sm uppercase">
                  {file.name.split(".").pop()?.slice(0, 3)}
                </div> */}
                <span className="text-green-700 font-medium text-sm">
                  {file.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
