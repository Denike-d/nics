// File: components/RegistrationForm.tsx

"use client";
import { useState, useEffect } from "react";
import { ProfileType } from "@/components/utils/types";
import PrimaryButton from "@/components/landing/uikits/PrimaryButton";
import HeaderBanner from "@/components/header-banner";
import { Asterisk } from "lucide-react";
import { useRouter } from "next/navigation";
import { nigeriaStates } from "@/lib/ngstates";

import Image from "next/image";
import { userType } from "@/content/user-type";
import nesrea from "../../../public/images/nesrea.png";

interface RegistrationFormProps {
  profileType: ProfileType;
  onBack: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  gender: string;
  resiaddress: string;
  address: string;
  additionalInfo: string;
  association: string;
  nin: string;
  contactname: string;
  governmentid: string;
  document: File | null;
}

function LabelWithRequired({ label }: { label: string; className: string }) {
  return (
    <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
      {label}
      <Asterisk className="w-3 h-3 text-red-500" />
    </label>
  );
}

export default function RegistrationForm({
  profileType,
  onBack,
}: RegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    gender: "",
    resiaddress: "",
    address: "",
    nin: "",
    contactname: "",
    additionalInfo: "",
    governmentid: "",
    association: "",
    document: null,
  });

  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState("");
  const [selectedLga, setSelectedLga] = useState("");

  const lgas = selectedState ? nigeriaStates[selectedState] : [];

  const router = useRouter();

  // if (profileType) {
  //   return <div className="p-6">No user type selected. Redirecting...</div>;
  // }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        document: e.target.files[0],
      });
    }
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePic(file);

      // Generate image preview
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const t = localStorage.getItem("userType");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted for:", profileType, formData);
    localStorage.setItem(
      "formData",
      JSON.stringify({ userType: profileType, ...formData })
    );
    console.log("This is the user type", userType);
    router.push("/payment");
    //send the data to the backend API
  };

  const getFormFields = () => {
    switch (profileType) {
      case "agent":
        return (
          <>
            <div>
              <LabelWithRequired
                label="Full Name"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 placeholder:text-gray-200 placeholder:text-sm focus:border-transparent"
                placeholder="Surname, First Name, Middle Name"
                required
              />
            </div>
            <div>
              <LabelWithRequired
                label="Email Address"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div>
              <LabelWithRequired
                label="Gender"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="e.g female"
                required
              />
            </div>
            <div>
              <LabelWithRequired
                label=" National Identification Number(NIN)"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <input
                type="text"
                name="nin"
                value={formData.nin}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="1234567890"
                required
              />
            </div>
            <div>
              <LabelWithRequired
                label="Phone Number"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                placeholder="Enter your contact address"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Association
              </label>
              <input
                type="text"
                name="association"
                value={formData.association}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="08011223344"
                required
              />
            </div>
            <div>
              <LabelWithRequired
                className="block text-sm font-medium text-gray-700 mb-2"
                label="State"
              />
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedLga(""); // reset LGA when state changes
                }}
                className="border p-2 w-full text-md capitalize text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
              >
                <option value="">Select State</option>
                {Object.keys(nigeriaStates).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* LGA Dropdown */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Local Government
              </label>
              <select
                value={selectedLga}
                onChange={(e) => setSelectedLga(e.target.value)}
                disabled={!selectedState}
                className="border p-2 w-full capitalize text-gray-700 text-md border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
              >
                <option value="">Select LGA</option>
                {lgas.map((lga) => (
                  <option key={lga} value={lga}>
                    {lga}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <LabelWithRequired
                className="block text-sm font-medium text-gray-700 mb-2"
                label="Upload Document (NIN and TIN)"
              />

              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-green-700 hover:file:bg-blue-100"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                required
              />
              {formData.document && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected: {formData.document.name}
                </p>
              )}
            </div>
          </>
        );
      case "government":
        return (
          <>
            <div>
              <LabelWithRequired
                label="Institution/Agency Name"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="Ministry of Housing"
                required
              />
            </div>
            <div>
              <LabelWithRequired
                label="Gender"
                className="block text-sm font-medium text-gray-700"
              />

              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="e.g female"
                required
              />
            </div>
            <div>
              <LabelWithRequired
                label="Official Government ID"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <input
                type="text"
                name="governmentid"
                value={formData.governmentid}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="Enter government ID"
                required
              />
            </div>

            <div>
              <h3 className="font-semibold">Contact Person's Information</h3>
              <div className="mt-4">
                <div>
                  <LabelWithRequired
                    label="Contact Person's Name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  />

                  <input
                    type="text"
                    name="contactname"
                    value={formData.contactname}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                    placeholder=""
                    required
                  />
                </div>
                <div className="mt-4">
                  <LabelWithRequired
                    label="Phone Number"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  />

                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <LabelWithRequired
                    className="block text-sm font-medium text-gray-700 mb-2"
                    label="State"
                  />
                  <select
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value);
                      setSelectedLga(""); // reset LGA when state changes
                    }}
                    className="border p-2 w-full text-md capitalize text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  >
                    <option value="">Select State</option>
                    {Object.keys(nigeriaStates).map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                {/* LGA Dropdown */}
                <div>
                  <label className="block font-medium mb-1">
                    Local Government
                  </label>
                  <select
                    disabled={!selectedState}
                    className="border p-2 w-full capitalize text-gray-700 text-md border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  >
                    <option value="">Select LGA</option>
                    {lgas.map((lga) => (
                      <option key={lga} value={lga}>
                        {lga.toLowerCase()}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </>
        );
      case "individual":
        return (
          <>
            <div>
              <LabelWithRequired
                label="Full Name"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <LabelWithRequired
                label="Email Address"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="Enter you email"
                required
              />
            </div>
            <div>
              <LabelWithRequired
                label="Gender"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="e.g female"
                required
              />
            </div>
            <div>
              <LabelWithRequired
                label="National Identity Number (NIN)"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <input
                type="text"
                name="nin"
                value={formData.nin}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="Enter ID number"
                required
              />
            </div>

            <div>
              <LabelWithRequired
                label="Phone Number"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:green-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="Enter your contact address"
                required
              />
            </div>
            <div>
              <LabelWithRequired
                className="block text-sm font-medium text-gray-700 mb-2"
                label="State"
              />

              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedLga(""); // reset LGA when state changes
                }}
                required
                className="border p-2 w-full text-md capitalize text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
              >
                <option value="">Select State</option>
                {Object.keys(nigeriaStates).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* LGA Dropdown */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Local Government
              </label>
              <select
                value={selectedLga}
                onChange={(e) => setSelectedLga(e.target.value)}
                disabled={!selectedState}
                className="border p-2 w-full capitalize text-gray-700 text-md border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
              >
                <option value="">Select LGA</option>
                {lgas.map((lga) => (
                  <option key={lga} value={lga}>
                    {lga}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <LabelWithRequired
                label="Uplaod NIN"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-green-700 hover:file:bg-blue-100"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                required
              />
              {formData.document && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected: {formData.document.name}
                </p>
              )}
            </div>
          </>
        );
      case "company":
        return (
          <>
            {/*Section One */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="Enter company name"
                required
              />
            </div>
            <div>
              <LabelWithRequired
                className="block text-sm font-medium text-gray-700 mb-2"
                label="State"
              />

              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedLga(""); // reset LGA when state changes
                }}
                required
                className="border p-2 w-full text-md capitalize text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
              >
                <option value="">Select State</option>
                {Object.keys(nigeriaStates).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* LGA Dropdown */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Local Government
              </label>
              <select
                value={selectedLga}
                onChange={(e) => setSelectedLga(e.target.value)}
                disabled={!selectedState}
                className="border p-2 w-full capitalize text-gray-700 text-md border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
              >
                <option value="">Select LGA</option>
                {lgas.map((lga) => (
                  <option key={lga} value={lga}>
                    {lga}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CAC / TIN No.
              </label>
              <input
                type="text"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="1234567890"
                required
              />
            </div>
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <select
                value={selectedState}
                onChange={handleStateChange}
                required
                className="border p-2 w-full text-md capitalize text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.code} value={state.code}>
                    {state.name.toLowerCase()}
                  </option>
                ))}
              </select>
            </div> */}

            {/* LGA Dropdown */}
            {/* <div>
              <LabelWithRequired
                className="block text-sm font-medium text-gray-700 mb-2"
                label="State"
              />
              <select
                disabled={!selectedState}
                className="border p-2 w-full capitalize text-gray-700 text-md border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
              >
                <option value="">Select LGA</option>
                {lgas.map((lga) => (
                  <option key={lga} value={lga}>
                    {lga.toLowerCase()}
                  </option>
                ))}
              </select>
            </div> */}
            <div>
              <LabelWithRequired
                label="Upload CAC/TIN document"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                required
              />
              {formData.document && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected: {formData.document.name}
                </p>
              )}
            </div>

            {/*Section Two */}
            <div>
              <h3 className="font-semibold mb-4">
                Contact Person's Information
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person's Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                  placeholder="Enter company name"
                  required
                />
              </div>
              <div>
                <LabelWithRequired
                  label="Gender"
                  className="block text-sm font-medium text-gray-700"
                />

                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                  placeholder="E.g Male"
                  required
                />
              </div>
              <div className="mt-4">
                <LabelWithRequired
                  label="Phone Number"
                  className="block text-sm font-medium text-gray-700 mb-2"
                />

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                  placeholder="Enter registration number"
                  required
                />
              </div>
              <div className="mt-4">
                <LabelWithRequired
                  label="Residential Address"
                  className="block text-sm font-medium text-gray-700 mb-2"
                />

                <textarea
                  typeof="text"
                  name="resiaddress"
                  value={formData.resiaddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:green-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                  placeholder="Enter your address"
                  required
                />
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="flex justify-center gap-2 items-center py-4 bg-white">
        <Image src={nesrea} alt="nesrea logo" width={80} />
        <p className="text-md md:text-lg font-bold text-gray-900 mt-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">
            IMPORT
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">
            {" "}
            CLEARANCE
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">
            {" "}
            SYSTEM
          </span>
        </p>
      </div>
      <div className="bg-gradient-to-br from-emerald-600 to-green-700"></div>
      <div className="p-8 flex justify-center">
        <div className="w-full max-w-2xl">
          <button
            onClick={onBack}
            className="mb-6 text-green-600 font-medium flex items-center gap-2"
          >
            ← Back to profiles
          </button>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-2 text-black">
              {profileType &&
                profileType.charAt(0).toUpperCase() + profileType.slice(1)}{" "}
              Registration
            </h1>
            <p className="text-black mb-6">
              Please fill out the form below to register as a{" "}
              {profileType?.toLowerCase()}.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {getFormFields()}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Profile Picture
                </label>

                <input
                  type="file"
                  onChange={handleProfileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-green-700 hover:file:bg-green-100"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                {formData.document && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected: {formData.document.name}
                  </p>
                )}
              </div>

              <div className="flex justify-between">
                <PrimaryButton
                  title="Save and Continue Later"
                  className=" text-[#10793F] border-[#10793F] border-2 bg-transparent text-sm"
                />
                <PrimaryButton
                  title="Proceed to Pay"
                  className=" text-white text-sm w-[250px]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
