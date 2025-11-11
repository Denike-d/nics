"use client";

import React, { useState } from "react";

import {
  Search,
  SlidersHorizontal,
  Filter,
  MoreHorizontal,
} from "lucide-react";
// import ImportDetailsPage from "./items/page";

import Link from "next/link";

export default function ImportClearanceCertificate() {
  const [showForm, setShowForm] = useState(false);
  const [selectedClient, setSelectedClient] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  // const handleNext = () => {
  //   if (selectedClient) {
  //     router.push("/clearance/import-details");
  //   } else {
  //     alert("Please select a client");
  //   }
  // };

  const clearanceData = [
    {
      id: 1,
      applicationId: "CLAA00022025",
      clientName: "John Tamar",
      category: "Individual",
      applicationDate: "Mar 18, 2025",
      status: "Pending",
    },
    {
      id: 2,
      applicationId: "CLAA00012025",
      clientName: "Alapan Ato",
      category: "Individual",
      applicationDate: "Mar 12, 2025",
      status: "Approved",
    },
    {
      id: 3,
      applicationId: "CLAA00032025",
      clientName: "James Officer",
      category: "Individual",
      applicationDate: "Mar 08, 2025",
      status: "Rejected",
    },
    {
      id: 4,
      applicationId: "CLAA00042025",
      clientName: "Alims Smart",
      category: "Individual",
      applicationDate: "Feb 19, 2025",
      status: "Pending",
      expiryDate: "Feb 19, 2026",
    },
    {
      id: 5,
      applicationId: "CLAA00052025",
      clientName: "Alims Smart",
      category: "Individual",
      applicationDate: "Feb 10, 2025",
      status: "Approved",
    },
    {
      id: 6,
      applicationId: "CLAA00062025",
      clientName: "John Tamar",
      category: "Individual",
      applicationDate: "Jan 04, 2025",
      status: "Rejected",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Form View
  if (showForm) {
    return (
      <div className="w-full min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Header with Blue Border */}
            <div className="border-l-4 border-blue-500 bg-blue-50 p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                Import Clearance Certificate
              </h1>
              <p className="text-gray-600 text-sm">
                Provide details of your import items and upload the required
                documents
              </p>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Client <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={selectedClient}
                    onChange={(e) => setSelectedClient(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white cursor-pointer"
                  >
                    <option value="">Select Client</option>
                    <option value="client1">Client 1</option>
                    <option value="client2">Client 2</option>
                    <option value="client3">Client 3</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <Link href="/agent/clearance/additems/items">
                <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-8 py-3 rounded-lg transition-colors">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard View
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Import Clearance Certificate
          </h1>
          <p className="text-sm text-gray-600">
            Begin your application process
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-2.5 rounded-lg flex items-center gap-2 transition-colors"
        >
          <span className="text-xl">+</span>
          Apply
        </button>
      </div>

      {/* Tabs */}
      {/* <div className="flex items-center gap-8 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("overview")}
          className={`pb-3 px-1 font-medium transition-colors relative ${
            activeTab === "overview"
              ? "text-green-700"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Clearance Overview
          {activeTab === "overview" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-700"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={`pb-3 px-1 font-medium transition-colors relative ${
            activeTab === "history"
              ? "text-green-700"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Clearance History
          {activeTab === "history" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-700"></div>
          )}
        </button>
      </div> */}

      {/* Overview Cards */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Pending Clearances</span>
              <div className="bg-yellow-100 p-2 rounded-full">
                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Approved Clearances</span>
              <div className="bg-green-100 p-2 rounded-full">
                <div className="w-5 h-5 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Rejected Clearances</span>
              <div className="bg-red-100 p-2 rounded-full">
                <div className="w-5 h-5 bg-red-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Issued Certificates</span>
              <div className="bg-orange-100 p-2 rounded-full">
                <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>
        </div>
      )}

      {/* Table Section */}
      <div className="bg-white border border-gray-200 rounded-lg">
        {/* Table Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Clearance History
            </h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">
                  S/N
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Application ID
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Client Name
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Category
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Application Date
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {clearanceData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900">{item.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {item.applicationId}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {item.clientName}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {item.category}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {item.applicationDate}
                    {item.expiryDate && (
                      <div className="text-xs text-gray-500">
                        Exp: {item.expiryDate}
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
