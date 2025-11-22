"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus, ChevronDown, Search } from "lucide-react";
import Header from "@/components/dashboard/header";
import SubmitComplaintModal from "@/components/dashboard/submit-complaint-modal";
import {
  getAllComplaints,
  type SupportComplaint,
} from "@/utils/support-storage";

interface FilterState {
  complaintId: string;
  subject: string;
  dateSubmitted: string;
  status: string;
}

// Dummy data for demonstration
const dummyComplaints: SupportComplaint[] = [
  {
    id: "COMP-001",
    subject: "Payment processing issue",
    dateSubmitted: "2024-01-15",
    status: "Open",
  },
  {
    id: "COMP-002",
    subject: "Certificate verification delay",
    dateSubmitted: "2024-01-20",
    status: "Closed",
  },
  {
    id: "COMP-003",
    subject: "Account access problem",
    dateSubmitted: "2024-02-01",
    status: "Open",
  },
  {
    id: "COMP-004",
    subject: "Document upload error",
    dateSubmitted: "2024-02-05",
    status: "Closed",
  },
  {
    id: "COMP-005",
    subject: "Clearance status inquiry",
    dateSubmitted: "2024-02-10",
    status: "Open",
  },
];

export default function SupportHistory() {
  const router = useRouter();

  const [allComplaints, setAllComplaints] =
    useState<SupportComplaint[]>(dummyComplaints);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    complaintId: "",
    subject: "",
    dateSubmitted: "",
    status: "",
  });

  // Load complaints from storage and combine with dummy data
  useEffect(() => {
    const loadComplaints = () => {
      const storedComplaints = getAllComplaints();
      // Combine dummy data with stored complaints
      // Use a Map to avoid duplicates by ID
      const complaintsMap = new Map<string, SupportComplaint>();

      // Add dummy data first
      dummyComplaints.forEach((complaint) => {
        complaintsMap.set(complaint.id, complaint);
      });

      // Add stored complaints (will overwrite dummy data if same ID exists)
      storedComplaints.forEach((complaint) => {
        complaintsMap.set(complaint.id, complaint);
      });

      const allComplaintsArray = Array.from(complaintsMap.values());
      // Sort by date submitted (newest first)
      allComplaintsArray.sort((a, b) => {
        return (
          new Date(b.dateSubmitted).getTime() -
          new Date(a.dateSubmitted).getTime()
        );
      });
      setAllComplaints(allComplaintsArray);
    };

    loadComplaints();

    // Reload when modal closes (in case a new complaint was added)
    if (!isModalOpen) {
      loadComplaints();
    }
  }, [isModalOpen]);

  // Handle view button click
  const handleViewClick = (complaint: SupportComplaint) => {
    const topic = encodeURIComponent(complaint.subject);
    router.push(
      `/dashboard/support/chat?complaintId=${complaint.id}&topic=${topic}`
    );
  };

  // Get unique values for filter dropdowns
  const uniqueComplaintIds = useMemo(() => {
    return Array.from(new Set(allComplaints.map((c) => c.id))).sort();
  }, []);

  const uniqueSubjects = useMemo(() => {
    return Array.from(new Set(allComplaints.map((c) => c.subject))).sort();
  }, []);

  const uniqueDates = useMemo(() => {
    return Array.from(
      new Set(allComplaints.map((c) => c.dateSubmitted))
    ).sort();
  }, []);

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Filter complaints based on filter state and search query
  const filteredComplaints = useMemo(() => {
    let filtered = allComplaints.filter((complaint) => {
      // Filter by Complaint ID
      if (filters.complaintId && complaint.id !== filters.complaintId) {
        return false;
      }

      // Filter by Subject
      if (filters.subject && complaint.subject !== filters.subject) {
        return false;
      }

      // Filter by Date Submitted
      if (
        filters.dateSubmitted &&
        complaint.dateSubmitted !== filters.dateSubmitted
      ) {
        return false;
      }

      // Filter by Status
      if (filters.status && complaint.status !== filters.status) {
        return false;
      }

      return true;
    });

    // Apply search query if provided
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((complaint) => {
        const id = complaint.id.toLowerCase();
        const subject = complaint.subject.toLowerCase();
        const status = complaint.status.toLowerCase();
        const date = formatDate(complaint.dateSubmitted).toLowerCase();
        const dateRaw = complaint.dateSubmitted.toLowerCase();

        return (
          id.includes(query) ||
          subject.includes(query) ||
          status.includes(query) ||
          date.includes(query) ||
          dateRaw.includes(query)
        );
      });
    }

    return filtered;
  }, [filters, searchQuery]);

  const handleFilterChange = (field: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      complaintId: "",
      subject: "",
      dateSubmitted: "",
      status: "",
    });
    setSearchQuery("");
  };

  const hasActiveFilters =
    Object.values(filters).some((value) => value !== "") ||
    searchQuery.trim() !== "";

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "text-blue-700 bg-blue-100 border border-blue-200";
      case "In Progress":
        return "text-amber-700 bg-amber-100 border border-amber-200";
      case "Resolved":
        return "text-emerald-700 bg-emerald-100 border border-emerald-200";
      case "Closed":
        return "text-gray-700 bg-gray-100 border border-gray-200";
      default:
        return "text-gray-700 bg-gray-100 border border-gray-200";
    }
  };

  return (
    <div>
      <Header />
      <div className="mt-6 max-w-[90%] mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-green-600 mb-2">
              Support History
            </h1>
            <p className="text-base text-gray-600">List of recent complaints</p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {hasActiveFilters && (
              <button
                onClick={handleClearFilters}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Clear Filters
              </button>
            )}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              <span>Submit New Complaint</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                {/* Header Row */}
                <tr className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-200">
                  <th className="text-left px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Complaint ID
                      </span>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                  </th>
                  <th className="text-left px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Subject
                      </span>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                  </th>
                  <th className="text-left px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Date Submitted
                      </span>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                  </th>
                  <th className="text-left px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Status
                      </span>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                  </th>
                  <th className="text-left px-6 py-4">
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Actions
                    </span>
                  </th>
                </tr>
                {/* Filter Row */}
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3" colSpan={5}>
                    <div className="flex items-center gap-3">
                      {/* Search Input */}
                      <div className="relative w-64 flex-shrink-0">
                        <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-8 pr-8 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        {searchQuery && (
                          <button
                            onClick={() => setSearchQuery("")}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        )}
                      </div>

                      {/* Filter Dropdowns */}
                      <div className="flex items-center gap-3 flex-1">
                        <select
                          value={filters.dateSubmitted}
                          onChange={(e) =>
                            handleFilterChange("dateSubmitted", e.target.value)
                          }
                          className="px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">All Dates</option>
                          {uniqueDates.map((date) => (
                            <option key={date} value={date}>
                              {formatDate(date)}
                            </option>
                          ))}
                        </select>
                        <select
                          value={filters.status}
                          onChange={(e) =>
                            handleFilterChange("status", e.target.value)
                          }
                          className="px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">All Statuses</option>
                          <option value="Open">Open</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Resolved">Resolved</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredComplaints.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                          <svg
                            className="w-8 h-8 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-lg font-semibold text-gray-700 mb-1">
                          {hasActiveFilters
                            ? "No Results Found"
                            : "No Records Yet"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {hasActiveFilters
                            ? "Try adjusting your filters to see more results"
                            : "Your support history will appear here"}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredComplaints.map((complaint) => (
                    <tr
                      key={complaint.id}
                      className="group hover:bg-gradient-to-r hover:from-green-50/50 hover:to-emerald-50/30 transition-all duration-200 border-b border-gray-50 last:border-0"
                    >
                      <td className="px-6 py-5">
                        <span className="text-sm font-medium text-gray-900">
                          {complaint.id}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-sm font-medium text-gray-900">
                          {complaint.subject}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-sm text-gray-600">
                          {formatDate(complaint.dateSubmitted)}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full shadow-sm ${getStatusColor(
                            complaint.status
                          )}`}
                        >
                          {complaint.status}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <button
                          onClick={() => handleViewClick(complaint)}
                          className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-200 hover:underline"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Submit New Complaint Modal */}
      <SubmitComplaintModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectItem={(item) => {
          // Modal handles navigation internally
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}
