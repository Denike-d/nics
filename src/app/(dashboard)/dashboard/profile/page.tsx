"use client";

import { useState } from "react";
import { Camera, Upload } from "lucide-react";
import Header from "@/components/dashboard/header";

export default function () {
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
      <div className="flex justify-between items-start mb-8 mt-4 mx-12">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Profile Settings
          </h2>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-colors"
        >
          <span>✓</span>
          <span>Edit Profile</span>
        </button>
      </div>

      {/* Profile Picture */}
      <div className="mb-8 mx-12">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Profile Picture
        </h3>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
              <img
                src="/api/placeholder/80/80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-1.5 shadow-sm hover:bg-gray-50 transition-colors">
              <Camera className="w-3.5 h-3.5 text-gray-600" />
            </button>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Preferred City</p>
            <button className="text-sm text-green-600 hover:text-green-700 font-medium px-3 py-1 border border-green-600 rounded-md transition-colors">
              Upload new picture
            </button>
          </div>
        </div>
      </div>

      {/* Profile Information Form */}
      <form>
        <div className="space-y-6 max-w-3xl mx-12 ">
          <h3 className="text-sm font-semibold text-gray-700">
            Profile Information
          </h3>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={profileData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={profileData.emailAddress}
              onChange={(e) =>
                handleInputChange("emailAddress", e.target.value)
              }
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              National Identification Number (NIN)
            </label>
            <input
              type="text"
              value={profileData.nationalIdentification}
              onChange={(e) =>
                handleInputChange("nationalIdentification", e.target.value)
              }
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your NIN"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={profileData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Residential Address
            </label>
            <input
              type="text"
              value={profileData.residentialAddress}
              onChange={(e) =>
                handleInputChange("residentialAddress", e.target.value)
              }
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your residential address"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Uploaded Document (NIN)
            </label>
            <div className="flex items-center space-x-3">
              <label className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md cursor-pointer transition-colors">
                <Upload className="w-4 h-4" />
                <span className="text-sm">Upload new document</span>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </label>
              {profileData.nationalIdCard && (
                <span className="text-sm text-gray-600">
                  {profileData.nationalIdCard.name}
                </span>
              )}
              {/* <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md text-sm transition-colors">
                    Remove
                  </button> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
