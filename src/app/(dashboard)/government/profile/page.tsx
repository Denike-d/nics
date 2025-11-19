"use client";

import { useState } from "react";
import { Camera, Upload } from "lucide-react";
import Header from "@/components/dashboard/header";

export default function () {
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    emailAddress: "johdoe@gmail.com",
    gender: "male",
    nationalIdentification: "339999999999999",
    state: "Abia",
    lga: "Aba North",
    phoneNumber: "080***",
    residentialAddress: "n01 ******",
    nationalIdCard: null as File | null,
  });
  const [isEditable, setIsEditable] = useState(false);
  const [preview, setPreview] = useState("/api/placeholder/80/80");

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
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl); // update preview
    }
  };
  const handleSubmit = () => {
    console.log("Profile data submitted:", profileData);
    // Add your submit logic here
  };

  return (
    <div>
      <Header />
      <div className=" bg-white rounded-lg shadow-sm py-8 my-8 max-w-[90%] mx-auto ">
        <div className="flex justify-between items-start mb-8 mt-4 mx-12">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Profile Settings
            </h2>
          </div>
          <button
            onClick={() => setIsEditable(true)}
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
                  src="https://unsplash.com/photos/selective-focus-of-man-smiling-during-daytime-2EGNqazbAMk"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() =>
                  document.getElementById("profilePicInput")?.click()
                }
                className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-1.5 shadow-sm hover:bg-gray-50 transition-colors"
              >
                <Camera className="w-3.5 h-3.5 text-gray-600" />
              </button>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Name</p>
              <button
                onClick={() =>
                  document.getElementById("profilePicInput")?.click()
                }
                className="text-sm text-green-600 hover:text-green-700 font-medium px-3 py-1 border border-green-600 rounded-md transition-colors"
              >
                Upload new picture
              </button>
            </div>
            <input
              id="profilePicInput"
              type="file"
              accept="image/*"
              disabled={!isEditable}
              className="hidden"
              onChange={handleImageChange}
            />
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
                disabled={!isEditable}
                className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  !isEditable && "bg-gray-100 cursor-not-allowed"
                }`}
                // placeholder="Enter your full name"
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
                disabled={!isEditable}
                className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  !isEditable && "bg-gray-100 cursor-not-allowed"
                }`}
                // placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Gender</label>
              <input
                type="text"
                value={profileData.gender}
                onChange={(e) => handleInputChange("gender", e.target.value)}
                disabled={!isEditable}
                className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  !isEditable && "bg-gray-100 cursor-not-allowed"
                }`}
                // placeholder="Enter your email address"
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
                disabled={!isEditable}
                className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  !isEditable && "bg-gray-100 cursor-not-allowed"
                }`}
                // placeholder="Enter your NIN"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={profileData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                disabled={!isEditable}
                className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  !isEditable && "bg-gray-100 cursor-not-allowed"
                }`}
                // placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">State</label>
              <input
                type="text"
                value={profileData.state}
                onChange={(e) =>
                  handleInputChange("residentialAddress", e.target.value)
                }
                disabled={!isEditable}
                className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  !isEditable && "bg-gray-100 cursor-not-allowed"
                }`}
                placeholder="Enter your residential address"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">State</label>
              <input
                type="text"
                value={profileData.lga}
                onChange={(e) =>
                  handleInputChange("residentialAddress", e.target.value)
                }
                disabled={!isEditable}
                className={`w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  !isEditable && "bg-gray-100 cursor-not-allowed"
                }`}
                // placeholder="Enter your residential address"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Uploaded Document (NIN)
              </label>
              <div className="flex items-center space-x-3">
                <label className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md cursor-pointer transition-colors">
                  <Upload className="w-4 h-4" />

                  <p className="text-gray-600 text-sm">
                    Current file:{" "}
                    <span className="font-medium">invoice.pdf</span>
                  </p>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    disabled={!isEditable}
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
              {isEditable && (
                <div className="flex gap-12 mt-8">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded w-[200px]"
                  >
                    Submit
                  </button>

                  {/* <button
                  onClick={() => setIsEditable(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded"
                >
                  Cancel
                </button> */}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
