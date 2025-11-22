"use client";

import React, { useState } from "react";
import { Camera, Upload } from "lucide-react";
import Header from "@/components/dashboard/header";
import NotificationSettings from "./notifications";
import SecuritySettings from "./security";

export default function ProfileSettings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState({
    fullName: "",
    preferredCity: "",
    emailAddress: "",
    nationalIdentification: "",
    phoneNumber: "",
    residentialAddress: "",
    nationalIdCard: null as File | null,
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileData((prev) => ({
        ...prev,
        nationalIdCard: e.target.files![0],
      }));
    }
  };

  const handleSubmit = () => {
    console.log("Profile data submitted:", profileData);
    // Add your submit logic here
  };

  return (
    <div>
      <Header />
      <div className=" bg-white rounded-lg shadow-sm mt-6 max-w-[90%]">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab("security")}
              className={`py-4 px-2 font-medium text-sm border-b-2 transition-colors ${
                activeTab === "security"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Security Settings
            </button>
            <button
              onClick={() => setActiveTab("notification")}
              className={`py-4 px-2 font-medium text-sm border-b-2 transition-colors ${
                activeTab === "notification"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Notification Settings
            </button>
          </div>
        </div>

        {/* Security Settings Content */}
        {activeTab === "security" && (
          <div className="p-6">
            <SecuritySettings />
          </div>
        )}

        {/* Notification Settings Content */}
        {activeTab === "notification" && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Notification Settings
            </h2>
            <NotificationSettings />
          </div>
        )}
      </div>
    </div>
  );
}
