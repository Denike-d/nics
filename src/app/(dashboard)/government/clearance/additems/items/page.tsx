"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Pagination from "@/components/pagination";
import Link from "next/link";
import AddImportItemModal from "@/components/dashboard/additemform";
import FileUpload from "@/components/dashboard/upload";

interface ImportItem {
  id: number;
  item: string;
  hsCode: string;
  unit: string;
  quantity: string;
  cargoNo: string;
  countryOfOrigin: string;
  portOfLoading: string;
}

export default function ImportDetailsPage() {
  const [items, setItems] = useState<ImportItem[]>([
    {
      id: 1,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    },
    {
      id: 2,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    },
    {
      id: 3,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    },
    {
      id: 4,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    },
    {
      id: 5,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    },
    {
      id: 6,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    },
    {
      id: 7,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    },
    {
      id: 8,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    },
    {
      id: 9,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    },
    {
      id: 10,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    },
    {
      id: 11,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    },
    {
      id: 12,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    },
    {
      id: 13,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    },
    {
      id: 14,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    },
    {
      id: 15,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    },
    {
      id: 16,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddItem = () => {
    const newItem: ImportItem = {
      id: items.length + 1,
      item: "Salt",
      hsCode: "12345",
      unit: "Kg",
      quantity: "22222",
      cargoNo: "122",
      countryOfOrigin: "China",
      portOfLoading: "Ghana",
    };
    setItems([...items, newItem]);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);
  const router = useRouter();
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Progress Steps */}

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Import Details</h1>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-700 hover:bg-green-800 text-white font-medium px-5 py-2.5 rounded-lg flex items-center gap-2 transition-colors"
          >
            <span className="text-lg">+</span>
            Add Item
          </button>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 pb-6 rounded-lg overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    S/N
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    HS Code
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Unit
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Cargo No
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Country of Origin
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Port of Loading
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {item.id}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {item.item}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {item.hsCode}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {item.unit}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {item.quantity}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {item.cargoNo}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {item.countryOfOrigin}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {item.portOfLoading}
                    </td>
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
        <FileUpload />
        {/* Action Buttons */}
        <div className="flex items-center justify-center mt-12 gap-4">
          <button className="px-6 py-2.5 w-[200px] border-2 border-green-700 text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors">
            Save for later
          </button>
          <button className="px-8 py-2.5 bg-green-700 w-[200px] hover:bg-green-800 text-white font-medium rounded-lg transition-colors">
            Next
          </button>
        </div>
      </div>

      <AddImportItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          // console.log("Item added successfully!");
          setIsModalOpen(false);
          // Refresh your items list here
        }}
      />
    </div>
  );
}
