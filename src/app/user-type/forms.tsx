// File: components/RegistrationForm.tsx

"use client";
import { useState, useEffect } from "react";
import { ProfileType } from "@/components/utils/types";
import PrimaryButton from "@/components/landing/uikits/PrimaryButton";
import HeaderBanner from "@/components/header-banner";
import { Asterisk } from "lucide-react";
import { useRouter } from "next/navigation";
import i4logogreen from "../../../public/images/i4logogreen.png";
import { nigeriaStates } from "@/lib/ngstates";
import Header from "@/components/landing/header";

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
  const [gender, setGender] = useState("");
  const [step, setStep] = useState(1);
  const lgas = selectedState ? nigeriaStates[selectedState] : [];

  const router = useRouter();

  // if (profileType) {
  //   return <div className="p-6">No user type selected. Redirecting...</div>;
  // }

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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

  const handleLogout = async () => {
    // await logout();
    router.push("/login");
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
        if (step === 1)
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
                <select
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  className="border p-2 w-full text-md capitalize text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
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
            </>
          );
        else
          return (
            <>
              <div>
                <LabelWithRequired
                  label="Any Valid Government ID No."
                  className="block text-sm font-medium text-gray-700 mb-1"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
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
              <div className="flex items-center gap-4 mt-2">
                <div className="">
                  <LabelWithRequired
                    className="block text-sm font-medium text-gray-700"
                    label="State"
                  />

                  <select
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value);
                      setSelectedLga(""); // reset LGA when state changes
                    }}
                    required
                    className="border p-2 w-[240px] mt-1 text-sm capitalize text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  >
                    <option value="">Select State</option>
                    {Object.keys(nigeriaStates).map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="">
                  <label className="block text-sm font-medium">
                    Local Government
                  </label>
                  <select
                    value={selectedLga}
                    onChange={(e) => setSelectedLga(e.target.value)}
                    disabled={!selectedState}
                    className="border p-2 w-[240px] mt-1 text-sm capitalize text-gray-700 text-md border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  >
                    <option value="">Select LGA</option>
                    {lgas.map((lga) => (
                      <option key={lga} value={lga}>
                        {lga}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <LabelWithRequired
                  className="block text-sm font-medium text-gray-700 mb-2"
                  label="Upload any valid document"
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
        if (step === 1)
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
                  className="w-full px-4 py-2 border mt-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                  placeholder="Ministry of Housing"
                  required
                />
              </div>
              <div>
                <LabelWithRequired
                  label="Gender"
                  className="block text-sm font-medium text-gray-700 mb-2"
                />
                <select
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  className="border p-2 w-full text-md mt-2 capitalize text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
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
                  className="w-full px-4 mt-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                  placeholder="Enter government ID"
                  required
                />
              </div>
            </>
          );
        else
          return (
            <>
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
                      className="block text-sm font-medium text-gray-700 mb-2 mt-2"
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
                    <label className="block mt-4 text-sm">
                      Local Government
                    </label>
                    <select
                      disabled={!selectedState}
                      className="border mt-1 text-sm p-2 w-full capitalize text-gray-700 text-md border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
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
        if (step === 1)
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
                <select
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  className="border p-2 w-full text-md capitalize text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <LabelWithRequired
                  label="Any Valid Government ID No."
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
            </>
          );
        else
          return (
            <>
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
                  label="Upload any valid document(NIN, CAC, TIN, drivers license etc)"
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
        if (step === 1)
          return (
            <>
              {/*Section One */}
              <div></div>
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
              <div className="flex items-center gap-4 mt-2">
                <div className="">
                  <LabelWithRequired
                    className="block text-sm font-medium text-gray-700"
                    label="State"
                  />

                  <select
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value);
                      setSelectedLga(""); // reset LGA when state changes
                    }}
                    required
                    className="border p-2 w-[240px] mt-2 text-sm capitalize text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  >
                    <option value="">Select State</option>
                    {Object.keys(nigeriaStates).map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="">
                  <label className="block text-sm font-medium">
                    Local Government
                  </label>
                  <select
                    value={selectedLga}
                    onChange={(e) => setSelectedLga(e.target.value)}
                    disabled={!selectedState}
                    className="border p-2 w-[240px] mt-2 text-sm capitalize text-gray-700 text-md border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  >
                    <option value="">Select LGA</option>
                    {lgas.map((lga) => (
                      <option key={lga} value={lga}>
                        {lga}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Valid Government ID No.
                  </label>
                  <input
                    type="text"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="px-2 py-2 w-[240px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                    placeholder="1234567890"
                    required
                  />
                </div>
                <div>
                  <LabelWithRequired
                    label="Upload any valid document"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  />

                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="w-full h-[40px] px-2 py-2 text-sm border border-gray-300 mt-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent file:mr-4 file:py-1 file:px-1 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-green-700 hover:file:bg-blue-100"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    required
                  />
                  {formData.document && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected: {formData.document.name}
                    </p>
                  )}
                </div>
              </div>
            </>
          );
        else
          return (
            /*Section Two */
            <>
              <div>
                <h3 className="font-semibold mb-4">
                  Contact Person's Information
                </h3>
                <div className="flex gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person's Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-[230px] px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                      placeholder="Enter company name"
                      required
                    />
                  </div>
                  <div>
                    <LabelWithRequired
                      label="Gender"
                      className="block text-sm font-medium text-gray-700"
                    />

                    <select
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                      className="border text-sm px-2 py-3 w-[240px] mt-2 text-md capitalize text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:green-500 focus:border-transparent placeholder:text-gray-200 placeholder:text-sm"
                    placeholder="Enter your address"
                    required
                  />
                </div>
              </div>
            </>
          );
        {
        }

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-between px-32 items-center">
        <Header />
        <button className="text-red-500" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div>
        <div className="relative flex h-full items-center justify-between p-24 py-10">
          <div
            className="absolute inset-0 min-h-screen bg-center opacity-50 bg-repeat bg-blend-multiply -z-10 pointer-events-none"
            style={{ backgroundImage: "url(/images/pattern.png)" }}
          />

          <div className="flex justify-between gap-34">
            <div className="flex flex-col mt-6">
              {/* <p className="text- tracking-widest text-gray-600 uppercase">
                      NICS
                    </p> */}

              <button
                onClick={onBack}
                className=" text-green-600 font-medium flex mb-24"
              >
                ← Back to profiles
              </button>
              <h1 className="text-3xl font-bold leading-tight">
                NESREA <span className="text-green-600">IMPORT</span>
                <br />
                <span className="relative">
                  <span className="text-green-600">CLEARANCE</span> SYSTEM
                  <span className="absolute inset-x-0 bottom-1 h-3 w-full opacity-70 -z-10"></span>
                </span>
                <br />
              </h1>
              <div className="mt-6 block gap-7 leading-8">
                <p className="font-bold">Contact us:</p>
                <p className="text-xs">
                  dg@nesrea.gov.ng | info@nesrea.gov.ng | +2349153993191.
                </p>
                <p className="text-xs">
                  No. 56 Lome Crescent, Wuse Zone 7, Abuja, Nigeria.
                  <br />
                </p>
              </div>
              <div className="flex items-center mt-4">
                <p className="text-[15px] font-semibold mr-2">Powered by</p>{" "}
                <Image
                  src={i4logogreen}
                  alt="Company Logo"
                  className="w-[130px] hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold mb-2 text-black">
                {profileType &&
                  profileType.charAt(0).toUpperCase() +
                    profileType.slice(1)}{" "}
                Registration
              </h1>
              <p className="text-black mb-6">
                Please fill out the form below to register as a{" "}
                {profileType?.toLowerCase()}.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 w-[500px]">
                {getFormFields()}

                {/* <div>
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
                </div> */}

                {step === 1 && (
                  <div className="flex justify-between gap-2">
                    <button className="text-green-600 border-green-600 font-medium rounded-lg px-8 py-2 border-2 bg-transparent text-sm">
                      Save and Continue Later
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-[250px]"
                    >
                      Next
                    </button>
                  </div>
                )}
                {step > 1 && (
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                    >
                      Back
                    </button>
                    <button className="text-green-600 border-green-600 font-medium rounded-lg px-8 py-2 border-2 bg-transparent text-sm">
                      Save and Continue Later
                    </button>
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Proceed to Payment
                    </button>
                  </div>
                )}

                {/* <div className="flex justify-between gap-2">
                  <button className="text-green-600 border-green-600 font-medium rounded-lg px-8 py-2 border-2 bg-transparent text-sm">
                    Save and Continue Later
                  </button>
                  <button className=" text-white bg-green-600 rounded-lg py-2 px-8 font-medium text-sm  border-green-600">
                    Proceed to payment
                  </button>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
