"use client";

import { documentContent } from "@/content/landing";
import Image from "next/image";

// export default function Documents() {
//   return (
//     <div className="bg-[#222222] px-24 py-8 relative overflow-hidden">
//       <h3 className="text-white text-center md:text-2xl">Documents</h3>

//       {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:px-0">
//         {documentContent.map((item) => (
//           <div key={item.id}>
//             <div className="w-[500px] flex items-center justify-center h-[130px] bg-white text-black overflow-hidden">
//               <div className="bg-green-700">
//                 <div>
//                   <Image src={item.icon} alt="document" width={90} />{" "}
//                 </div>
//               </div>
//               <div className="mx-6 bg-white">
//                 <h6>{item.text}</h6>
//                 <p className="text-sm">{item.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div> */}
//       {/* Decorative ellipse images */}
//       <Image
//         src="/images/Ellipse 9.png"
//         alt="decorative ellipse"
//         width={300}
//         height={300}
//         className="pointer-events-none select-none absolute top-0 right-0 opacity-70 z-0"
//         aria-hidden
//       />
//       <Image
//         src="/images/Ellipse 8.png"
//         alt="decorative ellipse"
//         width={350}
//         height={350}
//         className="pointer-events-none select-none absolute bottom-0 left-0 opacity-70 z-0"
//         aria-hidden
//       />

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 relative z-10">
//         {documentContent.map((item) => (
//           <div
//             key={item.id}
//             className="flex bg-white text-black rounded-md overflow-hidden shadow-md"
//           >
//             <div className="bg-green-700 flex items-center justify-center w-[100px]">
//               <Image src={item.icon} alt={item.text} width={50} height={50} />
//             </div>

//             <div className="flex-1 p-4">
//               <h6 className="font-semibold text-base mb-1">{item.text}</h6>
//               <p className="text-sm leading-snug text-gray-700">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { DollarSign, Users, FileText, Home } from "lucide-react";

export default function DocumentsPage() {
  const documentsData = [
    {
      title: "Performa Invoice",
      description:
        "A preliminary bill of sale sent to buyers before goods are shipped, detailing the items, price, and terms for customs and payment purposes.",
      icon: <DollarSign className="w-10 h-10 text-white" />,
    },
    {
      title: "CAC",
      description:
        "A certificate for business registration issued by the Corporate Affairs Commission in Nigeria.",
      icon: <Users className="w-10 h-10 text-white" />,
    },
    {
      title: "Tax Identification Number",
      description:
        "A unique identifier for a business or individual used for tax purposes in Nigeria.",
      icon: <FileText className="w-10 h-10 text-white" />,
    },
    {
      title: "Material Safety Data Sheet (MSDS)",
      description:
        "A document providing safety information on handling, storing, and disposing of chemical substances.",
      icon: <Home className="w-10 h-10 text-white" />,
    },
  ];

  return (
    <main className="bg-green-50 p-6 md:p-10 rounded-t-lg">
      <h1 className="text-center text-3xl font-semibold text-gray-800 mb-10">
        Documents
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  mx-auto justify-center">
        {documentsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
          >
            <div className="h-32 bg-gradient-to-br from-emerald-400 to-green-800 flex items-center justify-center">
              {item.icon}
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
