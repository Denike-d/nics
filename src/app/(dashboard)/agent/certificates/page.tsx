"use client";

import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import Pagination from "@/components/pagination";
import Header from "@/components/dashboard/header";

interface Activity {
  id: number;
  name: string;
  nesreaID: string;
  issuedate: string;
  certificateNo: string;
  expirydate: string;
}

const RecentActivities: React.FC = () => {
  const [activities] = useState<Activity[]>([
    {
      id: 1,
      name: "Profile Re",
      nesreaID: "00112233",
      issuedate: "21st Oct, 2025 - 8:30pm",
      certificateNo: "111111111111111111111111111111",
      expirydate: "21st Oct, 2025 - 8:30pm",
    },
    {
      id: 2,
      name: "Profile Re",
      nesreaID: "00112233",
      issuedate: "21st Oct, 2025 - 8:30pm",
      certificateNo: "111111111111111111111111111111",
      expirydate: "21st Oct, 2025 - 8:30pm",
    },
    {
      id: 3,
      name: "Profile Re",
      nesreaID: "00112233",
      issuedate: "21st Oct, 2025 - 8:30pm",
      certificateNo: "111111111111111111111111111111",
      expirydate: "21st Oct, 2025 - 8:30pm",
    },
    {
      id: 4,
      name: "Profile Re",
      nesreaID: "00112233",
      issuedate: "21st Oct, 2025 - 8:30pm",
      certificateNo: "111111111111111111111111111111",
      expirydate: "21st Oct, 2025 - 8:30pm",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All Activities");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = activities.slice(startIndex, startIndex + itemsPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Rejected":
        return "text-red-600 bg-red-50";
      case "Approved":
        return "text-green-600 bg-green-50";
      case "Pending":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <main>
      <Header />
      <div className="w-full max-w-6xl mt-4 mx-auto p-6 bg-white">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Certificate History
          </h2>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Dropdown */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>All Activities</option>
              <option>Profile Registration</option>
              <option>Clearance</option>
              <option>Payment</option>
              <option>Certificate</option>
            </select>

            {/* Filter Button */}
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <span className="text-sm text-gray-700">Filter</span>
              <SlidersHorizontal className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr className="text-center">
                <th className="px-2 py-3 text-sm font-semibold text-gray-700">
                  S/N
                </th>
                <th className=" px-2 py-3 text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className=" px-2 py-3 text-sm font-semibold text-gray-700">
                  Clearance ID
                </th>
                <th className=" px-2 py-3 text-sm font-semibold text-gray-700">
                  Issue Date
                </th>
                <th className=" px-2 py-3 text-sm font-semibold text-gray-700">
                  Certificate Number
                </th>
                {/* <th className="text-left px-2 py-3 text-sm font-semibold text-gray-700">
                  Expiry Date
                </th> */}
                <th className="px-2 py-3 text-sm font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentItems.map((activity) => (
                <tr
                  key={activity.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {activity.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {activity.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {activity.nesreaID}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {activity.issuedate}
                    {activity.expirydate && (
                      <div className="text-xs text-gray-500">
                        Exp: {activity.expirydate}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {activity.certificateNo}
                  </td>
                  {/* <td className="px-6 py-4 text-sm text-gray-600">
                    {activity.expirydate}
                  </td> */}
                  <td className="px-6 py-4">
                    <button className="text-sm text-green-600 hover:text-green-700 font-medium hover:underline">
                      View More
                    </button>
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
    </main>
  );
};

export default RecentActivities;
