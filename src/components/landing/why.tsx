import { whyContent } from "@/content/landing";
// import React from "react";
import Image from "next/image";

// export default function Why() {
//   return (
//     <div className="bg-white pt-2 pb-4 px-20">
//       <h5 className="text-center text-black font-bold text-2xl">
//         Why use NESREA system
//       </h5>
//       <div className="justify-between mx-20 mt-8 flex items-centre ">
//         {whyContent.map((item) => (
//           <div
//             key={item.id}
//             className="bg-black p-4 w-[260px] h-[150px] rounded-tl-[50px] rounded-br-[50px]"
//           >
//             <div>
//               <Image
//                 src={item.icon}
//                 alt="document"
//                 width={30}
//                 className="flex mx-auto"
//               />
//               <div className="mt-4">
//                 <h6 className="text-white">{item.head}</h6>
//                 <p className="text-sm text-white">{item.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Zap, ShieldCheck, Lock } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="group relative bg-white rounded-3xl p-6 overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-100">
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative flex items-start gap-6">
        {/* Icon Container */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>

      {/* Decorative Border */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div> */}
    </div>
  );
};

export default function NESREAFeatures() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Fast Clearance",
      description: "You will save time with online processing",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Certificate Verification",
      description: "Easily Confirm Authenticity",
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: "Secure Systems",
      description: "Your data is protected",
    },
  ];

  return (
    <div className=" bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-8">
      <div className=" mx-auto">
        {/* Section Title */}
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-8">
          Why use{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">
            NICS
          </span>{" "}
          system
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
