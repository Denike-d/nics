"use client";

import PrimaryButton from "@/components/landing/uikits/PrimaryButton";
import { userType } from "@/content/user-type";
import { useState } from "react";
import RegistrationForm from "./forms";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import nesrea from "../../../public/images/nesrea.png";
import type { ProfileType } from "@/components/utils/types";
import rectangle from "../../../public/images/rectangle.png";
import curve from "../../../public/images/curve.png";
import Header from "@/components/landing/header";
import HeaderBanner from "@/components/header-banner";

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
      <div>
        <Header />
        {/* <h3 className="font-bold text-xl text-black text-center mt-2">
          User Type Selection
        </h3> */}
        <div className="bg-gradient-to-br from-gray-50 to-emerald-50/30">
          <div className="">
            {" "}
            <p className="text-xl text-white py-4 font-semibold text-center bg-gradient-to-br from-emerald-600 to-green-700 ">
              Please select a user type to proceed
            </p>
          </div>

          <div className="">
            <div className="gap-6 w-full max-w-6xl p-8 mx-auto grid md:grid-cols-2 lg:grid-cols-4 justify-center">
              {userType.map((profile) => (
                <div
                  key={profile.id}
                  className={`bg-white shadow-md rounded-2xl flex-1 min-w-0 h-[420px] flex flex-col transform ease-out hover:scale-105 hover:shadow-lg cursor-pointer transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="p-4 w-full">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-emerald-600">{profile.icon}</div>
                      </div>
                      <h2 className="text-md font-bold text-gray-800">
                        {profile.title}
                      </h2>
                    </div>
                    <p className="text-gray-800 mb-6  mt-4 text-sm">
                      {profile.description}
                    </p>
                    <div className="text-sm text-black mb-4">
                      <p className="text-sm">
                        Registration Fee: <br />
                        <span className="text-md font-bold text-green-600">
                          {profile.fee}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="p-4 -mt-4">
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
                    <button
                      title="Choose Profile"
                      onClick={() =>
                        handleCardClick(
                          profile.id.toLocaleLowerCase() as ProfileType
                        )
                      }
                      className="w-full py-3 px-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]"
                    >
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import { useState } from "react";
// import { Check, User, Users, Building2, Landmark } from "lucide-react";
// import Header from "@/components/landing/header";
// import type { ProfileType } from "@/components/utils/types";
// import { useRouter } from "next/navigation";
// import RegistrationForm from "./forms";

// interface UserType {
//   id: string;
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   fee: string;
//   eligibility: string[];
// }

// const UserTypeCard: React.FC<{ userType: UserType }> = ({ userType }) => {
//   const [selectedProfile, setSelectedProfile] = useState<ProfileType>(null);

//   const handleCardClick = (profileType: ProfileType) => {
//     setSelectedProfile(profileType);
//   };

//   const handleBack = () => {
//     setSelectedProfile(null);
//   };

//   if (selectedProfile) {
//     return (
//       <RegistrationForm profileType={selectedProfile} onBack={handleBack} />
//     );
//   }
//   return (
//     <div>
//       <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200">
//         {/* Accent bar */}
//         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

//         <div className="p-6">
//           {/* Icon */}
//           <div className="flex items-center gap-2">
//             <div className="w-6 h-6 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//               <div className="text-emerald-600">{userType.icon}</div>
//             </div>

//             {/* Title & Description */}
//             <h3 className="text-md font-bold text-gray-900 mb-2">
//               {userType.title}
//             </h3>
//           </div>
//           <p className="text-sm text-gray-600 mb-4 leading-relaxed">
//             {userType.description}
//           </p>

//           {/* Fee */}
//           <div className="mb-5 pb-5 border-b border-gray-100">
//             <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
//               Registration Fee
//             </p>
//             <p className="text-md font-bold text-green-600">{userType.fee}</p>
//           </div>

//           {/* Eligibility */}
//           <div className="mb-6">
//             <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
//               Eligibility
//             </p>
//             <ul className="space-y-2.5">
//               {userType.eligibility.map((item, index) => (
//                 <li key={index} className="flex items-start gap-2.5">
//                   <div className="mt-0.5 flex-shrink-0">
//                     <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
//                       <Check
//                         className="w-3 h-3 text-emerald-600"
//                         strokeWidth={3}
//                       />
//                     </div>
//                   </div>
//                   <span className="text-sm text-gray-700 leading-snug">
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Button */}
//           <button
//             onClick={() =>
//               handleCardClick(userType.id.toLocaleLowerCase() as ProfileType)
//             }
//             className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]"
//           >
//             Select
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function NICSUserSelection() {
//   const userTypes: UserType[] = [
//     {
//       id: "individual",
//       icon: <User size={28} strokeWidth={2} />,
//       title: "Individual",
//       description: "For individuals importing non-commercial items",
//       fee: "₦35,000",
//       eligibility: [
//         "Importing for personal use (non-commercial)",
//         "Must have valid identification (NIN or international passport)",
//       ],
//     },
//     {
//       id: "agent",
//       icon: <Users size={28} strokeWidth={2} />,
//       title: "Agent",
//       description: "For licensed agents handling clearance for others",
//       fee: "₦35,000",
//       eligibility: [
//         "Must have a valid identification (NIN or international passport)",
//         "Authorized to act on behalf of client or organization",
//       ],
//     },
//     {
//       id: "organization",
//       icon: <Building2 size={28} strokeWidth={2} />,
//       title: "Organization",
//       description:
//         "For private or corporate businesses importing goods for commercial use",
//       fee: "₦35,000",
//       eligibility: [
//         "Must be a legally registered company in Nigeria with CAC/TIN",
//         "Imports are strictly for business or resale purposes",
//       ],
//     },
//     {
//       id: "government",
//       icon: <Landmark size={28} strokeWidth={2} />,
//       title: "Government",
//       description: "For government agencies importing official items",
//       fee: "No fee",
//       eligibility: [
//         "Must be an official government body with an agency ID",
//         "Imports are for public or institutional use only",
//       ],
//     },
//   ];

//   return (
//     <div>
//       <Header />
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 pb-8 to-emerald-50/30 px-4">
//         <div className="max-w-5xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-4">
//             {/* <p className="text-lg text-gray-600 mb-8">
//               NESREA Import Clearance System
//             </p> */}
//             <h2 className="text-xl font-semibold text-gray-800 bg-gradient-to-br from-emerald-600 pb-8 to-green-700 ">
//               Select a user type
//             </h2>
//           </div>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {userTypes.map((userType) => (
//               <UserTypeCard key={userType.id} userType={userType} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
