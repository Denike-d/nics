"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  X,
  LayoutDashboard,
  Users,
  CheckCircle,
  FileBadge2,
  Wallet,
  HelpCircle,
  Settings,
  CircleUserRound,
} from "lucide-react";
import {
  generateComplaintId,
  saveComplaint,
  type SupportComplaint,
} from "@/utils/support-storage";

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const sidebarItems: SidebarItem[] = [
  {
    name: "Agent Selection",
    href: "/dashboard/agent-selection",
    icon: <Users size={24} />,
  },
  {
    name: "Clearance",
    href: "/dashboard/clearance",
    icon: <CheckCircle size={24} />,
  },
  {
    name: "Certificates",
    href: "/dashboard/certificates",
    icon: <FileBadge2 size={24} />,
  },
  {
    name: "Payments",
    href: "/dashboard/payment",
    icon: <Wallet size={24} />,
  },
  {
    name: "Support",
    href: "/dashboard/support",
    icon: <HelpCircle size={24} />,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: <CircleUserRound size={24} />,
  },
];

interface SubmitComplaintModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem?: (item: SidebarItem) => void;
}

export default function SubmitComplaintModal({
  isOpen,
  onClose,
  onSelectItem,
}: SubmitComplaintModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleCardClick = (item: SidebarItem) => {
    // Generate complaint ID and save to support table
    const complaintId = generateComplaintId();
    const complaint: SupportComplaint = {
      id: complaintId,
      subject: item.name,
      dateSubmitted: new Date().toISOString().split("T")[0],
      status: "Open",
    };

    saveComplaint(complaint);

    // Navigate to chat page with complaint ID and topic
    const title = encodeURIComponent(item.name);
    router.push(
      `/dashboard/support/chat?complaintId=${complaintId}&topic=${title}`
    );

    if (onSelectItem) {
      onSelectItem(item);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-2xl p-6 z-50 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Submit New Complaint
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleCardClick(item)}
              className="group flex flex-col items-center justify-center p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-200 hover:shadow-md"
            >
              <div className="text-gray-600 group-hover:text-green-600 transition-colors mb-3">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition-colors text-center">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
