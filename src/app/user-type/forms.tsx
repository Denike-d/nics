// File: components/RegistrationForm.tsx

"use client";
import { useState } from "react";
import { ProfileType } from "./page";
import PrimaryButton from "@/components/landing/uikits/PrimaryButton";
import HeaderBanner from "@/components/header-banner";
import { Asterisk } from "lucide-react";

interface RegistrationFormProps {
  profileType: ProfileType;
  onBack: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  resiaddress: string;
  address: string;
  additionalInfo: string;
  nin: string;
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
    resiaddress: "",
    address: "",
    nin: "",
    additionalInfo: "",
    document: null,
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted for:", profileType, formData);
    alert(`${profileType} registration submitted successfully!`);
    //send the data to the backend API
  };

  const getFormFields = () => {
    switch (profileType) {
      case "Agent":
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
                label=" Phone Number"
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
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="08011223344"
                required
              />
            </div>
            <div>
              <LabelWithRequired
                label=" Residential Address"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <textarea
                typeof="text"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="Number 1, ABC Close, Abuja"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Document (NIN, CAC, TIN, or Government ID — if
                applicable)
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
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
      case "Government":
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="Ministry of Housing"
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
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
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
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                    placeholder=""
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Residential Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                    placeholder=""
                    required
                  />
                </div>
              </div>
            </div>
          </>
        );
      case "Individual":
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="Enter you email"
                required
              />
            </div>
            <div></div>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="Enter your contact address"
                required
              />
            </div>
            <div>
              <LabelWithRequired
                label="Residential Address"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <textarea
                typeof="text"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="Enter your address"
                required
              />
            </div>
            <div>
              <LabelWithRequired
                label="Uplaod NIN"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
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
      case "Company":
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="Enter company name"
                required
              />
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="1234567890"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Organizational Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                placeholder="Enter registration number"
                required
              />
            </div>
            <div>
              <LabelWithRequired
                label="Upload CAC/TIN document"
                className="block text-sm font-medium text-gray-700 mb-2"
              />

              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                  placeholder="Enter company name"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
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
    <div className="bg-[url('/images/rectangle.png')] bg-cover ">
      <HeaderBanner />
      <div className="p-8 flex justify-center">
        <div className="w-full max-w-2xl">
          <button
            onClick={onBack}
            className="mb-6 text-green-700 font-medium flex items-center gap-2"
          >
            ← Back to profiles
          </button>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-2 text-black">
              {profileType} Registration
            </h1>
            <p className="text-black mb-6">
              Please fill out the form below to register as a{" "}
              {profileType?.toLowerCase()}.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {getFormFields()}

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
