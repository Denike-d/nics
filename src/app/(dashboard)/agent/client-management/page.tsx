"use client";

import { Users, CircleDotDashed, Banknote, Files } from "lucide-react";
import { Search, SlidersHorizontal } from "lucide-react";
import Header from "@/components/dashboard/header";
import Pagination from "@/components/pagination";
import { useState } from "react";
import SideModal from "@/components/dashboard/clientsidemodal";
import ClientSideModal from "@/components/dashboard/clientsidemodal";

export default function OverviewCards() {
  const cards = [
    { title: "Pending", value: 0, icon: <Users /> },
    { title: "Accepted", value: 0, icon: <CircleDotDashed /> },
    { title: "Rejected", value: 0, icon: <Banknote /> },
    { title: "Revoked", value: 0, icon: <Files /> },
  ];

  interface Activity {
    id: number;
    name: string;
    clientType: string;
    totalClearance: string;
    appointmentDate: string;
    nesreaID: string;
    status: "Rejected" | "Approved" | "Pending" | "Revoked";
  }

  const [activities] = useState<Activity[]>([
    {
      id: 1,
      name: "Esther Hownard",
      clientType: "individual",
      totalClearance: "1",
      appointmentDate: "11th Oct, 2025 - 7:55pm",
      status: "Pending",
      nesreaID: "NES-23494-hhr",
    },
    {
      id: 2,
      name: "John Paul",
      clientType: "Individual",
      totalClearance: "1",
      appointmentDate: "11th Oct, 2025 - 7:55pm",
      status: "Rejected",
      nesreaID: "NES-23494-hhr",
    },
    {
      id: 3,
      name: "M$N Enterprise",
      clientType: "company",
      totalClearance: "3",
      appointmentDate: "11th Oct, 2025 - 7:55pm",
      status: "Approved",
      nesreaID: "NES-23494-hhr",
    },

    {
      id: 4,
      name: "Esther Hownard",
      clientType: "individual",
      totalClearance: "1",
      appointmentDate: "11th Oct, 2025 - 7:55pm",
      status: "Revoked",
      nesreaID: "NES-23494-hhr",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All Activities");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const itemsPerPage = 10;

  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = activities.slice(startIndex, startIndex + itemsPerPage);

  const [selectedRow, setSelectedRow] = useState<Activity | undefined>(
    undefined
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Rejected":
        return "text-red-600 bg-red-50";
      case "Approved":
        return "text-green-600 bg-green-50";
      case "Pending":
        return "text-yellow-600 bg-yellow-50";
      case "Revoked":
        return "text-orange-600 bg-orange-50";
    }
  };

  return (
    <div>
      <Header />
      <div className="mt-4">
        <div>
          <p className="font-semibold">Appointment Overview</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Pending</span>
              <div className="bg-yellow-100 p-2 rounded-full">
                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Approved</span>
              <div className="bg-green-100 p-2 rounded-full">
                <div className="w-5 h-5 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Rejected</span>
              <div className="bg-red-100 p-2 rounded-full">
                <div className="w-5 h-5 bg-red-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Revoked</span>
              <div className="bg-orange-100 p-2 rounded-full">
                <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto bg-white">
        {/* Header */}
        <div className="flex items-center justify-between py-8">
          <h2 className="text-xl font-semibold text-gray-800">Client List</h2>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

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
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                  S/N
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                  Client Type
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                  Total Clearance
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                  Appointment Date
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {activities.map((activity) => (
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
                    {activity.clientType}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {activity.totalClearance}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {activity.appointmentDate}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        activity.status
                      )}`}
                    >
                      {activity.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {/* <SideModal
                      isOpen={!!selectedItem}
                      onClose={() => setSelectedItem(null)}
                      title={selectedItem?.title || ""}
                      content={selectedItem?.details || ""}
                    /> */}
                    <button
                      className="text-sm text-green-600 hover:text-green-700 font-medium hover:underline"
                      onClick={() => setSelectedRow(activity)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ClientSideModal
            isOpen={!!selectedRow}
            onClose={() => setSelectedRow(undefined)}
            title={selectedRow?.name}
            content={selectedRow}
          />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
