"use client";
import PrimaryButton from "@/components/landing/uikits/PrimaryButton";
import { userType } from "@/content/user-type";
import { useState } from "react";
import RegistrationForm from "./forms";
import { Check } from "lucide-react";
import Image from "next/image";
import rectangle from "../../../public/images/rectangle.png";
import curve from "../../../public/images/curve.png";
import HeaderBanner from "@/components/header-banner";

export type ProfileType =
  | "Agent"
  | "Government"
  | "Individual"
  | "Company"
  | null;

export default function ProfileType() {
  const [selectedProfile, setSelectedProfile] = useState<ProfileType>(null);

  const handleCardClick = (profileType: ProfileType) => {
    setSelectedProfile(profileType);
  };

  const handleBack = () => {
    setSelectedProfile(null);
  };

  if (selectedProfile) {
    return (
      <RegistrationForm profileType={selectedProfile} onBack={handleBack} />
    );
  }

  return (
    <>
      <div className="bg-[url('/images/rectangle.png')] bg-cover">
        <HeaderBanner />
        <h3 className="font-bold text-xl text-black text-center mt-2">
          Choose your user type
        </h3>
        <div className="">
          <div className="gap-6 w-full max-w-7xl p-8 grid md:grid-cols-2 lg:grid-cols-4 justify-center">
            {userType.map((profile) => (
              <div
                key={profile.id}
                className={`bg-[#E7F2EC] shadow-md rounded-2xl flex-1 min-w-0 h-[420px] flex flex-col transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg cursor-pointer`}
              >
                <div className="bg-[url('/images/curve.png')] bg-cover p-4 w-full bg-no-repeat bg-top rounded-b-lg">
                  {/* <Image src={rectangle} className="w-full" alt="rectangle" /> */}
                  <h2 className="text-xl font-bold mb-2 text-black">
                    {profile.title}
                  </h2>
                  <p className="text-black mb-6 text-sm">
                    {profile.description}
                  </p>
                  <div className="text-sm text-black mb-4">
                    <p className="text-sm">
                      Registration Fee: <br />
                      <span className="text-[20px] font-bold">
                        {profile.fee}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">
                    Eligibility:
                  </h3>
                  <ul className="space-y-2">
                    {profile.eligibility.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-900 mt-4">
                Required Document:
              </h3>
              <ul className="space-y-2">
                {profile.requiredDocs.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div> */}
                <div className="mt-auto mx-4 mb-4">
                  <PrimaryButton
                    href=""
                    title="Choose Profile"
                    onClick={() => handleCardClick(profile.id as ProfileType)}
                    className="text-white bottom w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
