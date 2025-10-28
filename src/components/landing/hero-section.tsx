"use client";

import React from "react";
import Eclipse from "../../../public/images/Eclipse.png";
import { heroContent } from "@/content/landing";
import Image from "next/image";
import Pana from "../../../public/images/pana.png";
import port from "../../../public/images/port.jpg";
import PrimaryButton from "./uikits/PrimaryButton";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const MotionImage = motion(Image);
// export default function HeroSection() {
//   return (
//     <section className="flex bg-green-50 h-screen">
//       <div className="flex mx-auto items-center ">
//         <div className="items-center mx-auto text-black relative z-10">
//           <div className="mt-2 items-center">
//             <h5 className="font-bold text-[35px]">
//               Get Your Import <br /> Clearance in Record Time
//             </h5>
//             <p className="">
//               We ensure compliance with environmental standards <br /> for a
//               safer and cleaner Nigeria
//             </p>
//             <div className="flex mt-8 gap-6 items-center">
//               <PrimaryButton
//                 title="Sign up"
//                 href="/signup"
//                 className="text-white w-[130px]"
//               />
//               <PrimaryButton
//                 title="Log in"
//                 href="/login"
//                 className="bg-transparent border-2 border-green-700 text-green-700 w-[130px]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* <div>
//           {heroContent.map((item) => (
//             <div className="mt-2">
//               <div
//                 key={item.id}
//                 className={`flex items-center w-60 text-sm gap-4 bg-white shadow-lg p-2 rounded-[15px]`}
//               >
//                 <div>
//                   <Image
//                     width={item.id === 3 ? 40 : 60}
//                     src={item.image}
//                     alt="cert"
//                   />
//                 </div>
//                 <div className="">
//                   <p className="font-bold font-sm">{item.number}</p>
//                   <p className="font-sm">{item.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div> */}
//       </div>
//       <div
//         className="hidden md:block w-1/2 bg-cover top-0 bg-center"
//         style={{ backgroundImage: "url('/images/container.jpg')" }}
//       ></div>
//     </section>
//   );
// }

import {
  TrendingUp,
  TrendingDown,
  Package,
  DollarSign,
  Clock,
  Users,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  isPositive,
  icon,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <span className="text-gray-500 text-sm font-medium">{title}</span>
        <div className="text-gray-400">{icon}</div>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="flex items-center gap-1 text-sm">
        {isPositive ? (
          <TrendingUp className="w-4 h-4 text-emerald-500" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-500" />
        )}
        <span className={isPositive ? "text-emerald-500" : "text-red-500"}>
          {change}
        </span>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-[90vh] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95"></div>
      </div>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="text-center mb-16">
          {/* <div className="inline-block mb-8">
            <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center shadow-xl">
              <div className="w-10 h-10 border-4 border-white transform rotate-45"></div>
            </div>
          </div> */}

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">
              Import
            </span>{" "}
            <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">
              Clearance
            </span>{" "}
            in Record Time
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            We ensure compliance with environmental standards <br /> for a safer
            and cleaner Nigeria
          </p>

          <div className="flex items-center justify-center gap-4">
            <PrimaryButton
              title="Sign up"
              href="/signup"
              className="bg-gradient-to-r from-green-600 to-green-800 text-white px-8 py-3.5 rounded-lg hover:from-green-800 hover:to-green-700 transition-all flex items-center gap-2 shadow-lg shadow-purple-500/30"
            />
            <PrimaryButton
              title="Log in"
              href="/login"
              className="bg-transparent border-2 border-green-700 text-green-700 w-[130px]"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
