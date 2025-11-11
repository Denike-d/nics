import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

interface Activity {
  id: number;
  activity: string;
  referenceId: string;
  date: string;
  status: "Rejected" | "Approved" | "Pending";
}

const RecentActivities: React.FC = () => {
  const [activities] = useState<Activity[]>([
    {
      id: 1,
      activity: "Profile Registration",
      referenceId: "CL - 1023",
      date: "21st Oct, 2025 - 8:30pm",
      status: "Rejected",
    },
    {
      id: 2,
      activity: "Clearance",
      referenceId: "PR - 1050",
      date: "11th Oct, 2025 - 7:55pm",
      status: "Approved",
    },
    {
      id: 3,
      activity: "Payment",
      referenceId: "PY - 9012",
      date: "3rd Oct, 2025 - 5:00pm",
      status: "Approved",
    },
    {
      id: 4,
      activity: "Certificate",
      referenceId: "CF - 808",
      date: "24th Sep, 2025 - 1:45pm",
      status: "Pending",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All Activities");

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
    <div className="w-full max-w-6xl mx-auto bg-white">
      {/* Header */}
      <div className="flex items-center justify-between py-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Recent Activities
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
            <tr>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                Activity
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                Reference ID
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                Date
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
                  {activity.activity}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {activity.referenceId}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {activity.date}
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
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline">
                    View More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivities;
