"use client";

import { Users, CircleDotDashed, Banknote, Files } from "lucide-react";
import { Search, SlidersHorizontal } from "lucide-react";
import Header from "@/components/dashboard/header";
import Pagination from "@/components/pagination";
import { useState } from "react";
import Link from "next/link";

export default function OverviewCards() {
  const cards = [
    { title: "Company Payments", value: 0, icon: <Users /> },
    { title: "Individual Payments", value: 0, icon: <CircleDotDashed /> },
    { title: "Pending Payment", value: 0, icon: <Banknote /> },
    { title: "Payment Made", value: 0, icon: <Files /> },
  ];

  interface Activity {
    id: number;
    clearanceID: string;
    nesreaID: string;
    amount: string;
    date: string;
    description: string;
    status: "Paid" | "Pending";
    action: "Pay";
  }

  const [activities] = useState<Activity[]>([
    {
      id: 1,
      clearanceID: "N112247488444",
      nesreaID: "NESRES-234",
      description: "Registration",
      date: "21st Oct, 2025 - 8:30pm",
      amount: "N35,000",
      status: "Paid",
      action: "Pay",
    },
    {
      id: 2,
      clearanceID: "N1122474884444",
      nesreaID: "NESRES-234",
      description: "Clearance",
      date: "21st Oct, 2025 - 8:30pm",
      amount: "N35,000",
      status: "Pending",
      action: "Pay",
    },
    {
      id: 3,
      clearanceID: "N11224748844444",
      nesreaID: "NESRES-234",
      description: "Registration",
      amount: "N35,000",
      date: "21st Oct, 2025 - 8:30pm",
      status: "Paid",
      action: "Pay",
    },
    {
      id: 3,
      clearanceID: "N11224748844444",
      nesreaID: "NESRES-234",
      description: "Clearance",
      amount: "N145,500",
      date: "21st Oct, 2025 - 8:30pm",
      status: "Pending",
      action: "Pay",
    },
    {
      id: 4,
      clearanceID: "N1122474884444",
      nesreaID: "NESRES-234",
      description: "Clearance",
      date: "21st Oct, 2025 - 8:30pm",
      amount: "N135,000",
      status: "Paid",
      action: "Pay",
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
      case "Paid":
        return "text-green-600 bg-green-50";
      case "Pending":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div>
      <Header />
      <div className="mx-8">
        <p className="mt-4 font-semibold">Payment Overview</p>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {cards.map((c) => (
            <div key={c.title} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center gap-2">
                <div className="text-white bg-green-700 p-1.5 rounded-full items-center">
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs text-slate-500 text-semibold">
                    {c.title}
                  </div>
                  <div className="text-2xl font-bold mt-2">{c.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl bg-white">
          {/* Header */}
          <div className="flex items-center justify-between py-8">
            <h2 className="text-xl font-semibold text-gray-800">
              Payment History
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
              {/* <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>All Activities</option>
              <option>Profile Registration</option>
              <option>Clearance</option>
              <option>Payment</option>
              <option>Certificate</option>
            </select> */}

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
                  <th className="text-left px-2 py-3 text-sm font-semibold text-gray-700">
                    S/N
                  </th>
                  <th className="text-left px-2 py-3 text-sm font-semibold text-gray-700">
                    Clearance ID
                  </th>
                  <th className="text-left px-2 py-3 text-sm font-semibold text-gray-700">
                    Nesrea ID
                  </th>
                  <th className="text-left px-2 py-3 text-sm font-semibold text-gray-700">
                    Decription
                  </th>
                  <th className="text-left px-2 py-3 text-sm font-semibold text-gray-700">
                    Amount
                  </th>
                  <th className="text-left px-2 py-3 text-sm font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="text-left px-2 py-3 text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="text-left px-2 py-3 text-sm font-semibold text-gray-700">
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
                    <td className="px-2 py-4 text-sm text-gray-800">
                      {activity.id}
                    </td>
                    <td className="px-2 py-4 text-sm text-gray-800">
                      {activity.clearanceID}
                    </td>
                    <td className="px-2 py-4 text-sm text-gray-800">
                      {activity.nesreaID}
                    </td>
                    <td className="px-2 py-4 text-sm text-gray-600">
                      {activity.description}
                    </td>
                    <td className="px-2 py-4 text-sm text-gray-600">
                      {activity.amount}
                    </td>
                    <td className="px-2 py-4 text-sm text-gray-600">
                      {activity.date}
                    </td>
                    <td className="px-2 py-4">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          activity.status
                        )}`}
                      >
                        {activity.status}
                      </span>
                    </td>
                    <td className="px-2 py-4">
                      {activity.status === "Pending" ? (
                        <Link
                          href="./payment/gateway/"
                          className=" text-white inline-block text-xs bg-green-600 px-3 py-1 rounded-full"
                        >
                          Pay Now
                        </Link>
                      ) : (
                        <button className="text-green-600 text-xs">
                          View Invoice
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
