"use client";

import React from "react";
import { Download, FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { clearanceData } from "@/components/dashboard/content";
import Pagination from "@/components/pagination";
import DocumentPreview from "@/components/documentPreview";
import documentt from "../../../../../../public/images/documentt.jpg";
import Header from "@/components/dashboard/header";

interface ImportItem {
  sn: number;
  item: string;
  hsCode: string;
  unit: string;
  quantity: number;
  cargoNo: number;
  countryOfOrigin: string;
  pol: string;
}

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "approved":
      return "bg-green-100 text-green-700";
    case "pending":
      return "bg-yellow-100 text-yellow-700";
    case "rejected":
      return "bg-red-100 text-red-700";
    case "paid":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

type ClearanceType = {
  id: string;
  applicationId: string;
  clientName: string;
  category: string;
  applicationDate: string;
  status: string;
  expiryDate?: string;
};
const importItems: ImportItem[] = [
  {
    sn: 1,
    item: "Salt",
    hsCode: "12345",
    unit: "Kg",
    quantity: 22222,
    cargoNo: 122,
    countryOfOrigin: "China",
    pol: "Shanghai",
  },
  {
    sn: 2,
    item: "Salt",
    hsCode: "12345",
    unit: "Kg",
    quantity: 22222,
    cargoNo: 122,
    countryOfOrigin: "China",
    pol: "Shanghai",
  },
  {
    sn: 3,
    item: "Salt",
    hsCode: "12345",
    unit: "Kg",
    quantity: 22222,
    cargoNo: 122,
    countryOfOrigin: "China",
    pol: "Shanghai",
  },
  {
    sn: 4,
    item: "Salt",
    hsCode: "12345",
    unit: "Kg",
    quantity: 22222,
    cargoNo: 122,
    countryOfOrigin: "China",
    pol: "Shanghai",
  },
  {
    sn: 5,
    item: "Salt",
    hsCode: "12345",
    unit: "Kg",
    quantity: 22222,
    cargoNo: 122,
    countryOfOrigin: "China",
    pol: "Shanghai",
  },
];

const clearanceDetails = ({ params }: { params: { id: string } }) => {
  console.log("params:", params);
  // const router = useRouter();
  // const clearance = clearanceData.find((c) => c.id === params.id);

  const [clearance, setClearance] = useState<ClearanceType | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(importItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = importItems.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    const found = clearanceData.find((c) => c.id === params.id) ?? null;
    setClearance(found);
    console.log("params in browser:", params);
  }, [params.id]);

  if (!clearance) {
    return <p>Not found</p>;
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Importer Details */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Importer Details:
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-600 font-medium">Client Name</span>
                <span className="text-gray-800">I4 Global Services</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-600 font-medium">Client Email</span>
                <span className="text-gray-800">email@1234.com</span>
              </div>
              <div className="flex items-center justify-between pb-3">
                <span className="text-gray-600 font-medium">
                  Client NESREA ID
                </span>
                <span className="text-gray-800">1234567890</span>
              </div>
              <div className="flex items-center justify-between pb-3">
                <span className="text-gray-600 font-medium">
                  Client Category
                </span>
                <span className="text-gray-800">Company</span>
              </div>
            </div>
          </div>

          {/* Clearance Details */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Clearance Details:
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-600 font-medium">Status</span>
                <span
                  className={`${getStatusColor(
                    clearance.status
                  )} px-4 py-1 rounded-full text-sm font-medium`}
                >
                  {clearance.status}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-600 font-medium">
                  Application date and time
                </span>
                <span className="text-gray-800">2 Oct, 2025</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-600 font-medium">Admin Comment</span>
                <span className="text-gray-800">No Comment</span>
              </div>
              <div className="flex items-center justify-between pb-3">
                <span className="text-gray-600 font-medium">
                  Client Category
                </span>
                <span className="text-gray-800">Company</span>
              </div>
            </div>
          </div>

          {/* Documents Uploaded */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Documents Uploaded:
            </h2>
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-gray-600" />
                <span className="text-gray-800">000221334-test.doc.pdf</span>
              </div>
              <button
                onClick={() => setPreviewOpen(true)}
                className="flex items-center gap-2 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
              >
                Preview & Download
              </button>
              {previewOpen && (
                <DocumentPreview
                  fileUrl={documentt.src}
                  fileName="sample.pdf"
                  onClose={() => setPreviewOpen(false)}
                />
              )}
            </div>
          </div>

          {/* Import Details Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Import Details
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-3 text-sm font-semibold text-gray-700">
                      S/N
                    </th>
                    <th className="text-left p-3 text-sm font-semibold text-gray-700">
                      Item
                    </th>
                    <th className="text-left p-3 text-sm font-semibold text-gray-700">
                      HS Code
                    </th>
                    <th className="text-left p-3 text-sm font-semibold text-gray-700">
                      Unit
                    </th>
                    <th className="text-left p-3 text-sm font-semibold text-gray-700">
                      Quantity
                    </th>
                    <th className="text-left p-3 text-sm font-semibold text-gray-700">
                      Cargo No
                    </th>
                    <th className="text-left p-3 text-sm font-semibold text-gray-700">
                      Country of Origin
                    </th>
                    <th className="text-left p-3 text-sm font-semibold text-gray-700">
                      POL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item) => (
                    <tr
                      key={item.sn}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="p-3 text-sm text-gray-800">{item.sn}</td>
                      <td className="p-3 text-sm text-gray-800">{item.item}</td>
                      <td className="p-3 text-sm text-gray-800">
                        {item.hsCode}
                      </td>
                      <td className="p-3 text-sm text-gray-800">{item.unit}</td>
                      <td className="p-3 text-sm text-gray-800">
                        {item.quantity}
                      </td>
                      <td className="p-3 text-sm text-gray-800">
                        {item.cargoNo}
                      </td>
                      <td className="p-3 text-sm text-gray-800">
                        {item.countryOfOrigin}
                      </td>
                      <td className="p-3 text-sm text-gray-800">{item.pol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>

          {/* Action Buttons */}
          {clearance.status === "Approved" && (
            <div className="flex justify-end gap-4">
              <button className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                View Invoice
              </button>

              <button className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                Proceed to payment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default clearanceDetails;
