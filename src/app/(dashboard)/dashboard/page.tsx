"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import OverviewCards from "@/components/dashboard/overviewcards";
import Charts from "@/components/dashboard/charts";
import QuickActions from "@/components/dashboard/quickactions";
import RecentActivities from "@/components/dashboard/recentactivities";
// import IndividualModules from "@/components/modules/IndividualModules";
// import AgentModules from "@/components/modules/AgentModules";
// import CompanyModules from "@/components/modules/CompanyModules";
// import GovernmentModules from "@/components/modules/GovernmentModules";

export default function DashboardPage() {
  const [type, setType] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("userType");
    setType(t);
  }, []);

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-white to-slate-50">
      <div className="flex-1 mr-4">
        <Header />
        <div className="p-4">
          <div className="mt-4">
            <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-2 rounded">
              Your registration is being reviewed — check status in Recent
              Activities
            </div>
          </div>

          {/* Overview cards */}
          <div className="mt-6">
            <OverviewCards />
          </div>

          {/* Main content: charts + quick actions */}
          <div className="flex justify-between mt-6 gap-2 bg-grey-100 items-center ">
            <div>
              <div className="bg-white rounded-xl p-4 shadow">
                <Charts />
              </div>
            </div>

            <div>
              <div className="bg-white h-[320px] rounded-xl px-4 pt-4 shadow flex flex-col gap-2">
                <QuickActions />
              </div>
            </div>
          </div>

          {/* Modules area determined by user type (exact modules from image are placed here) */}
          {/* <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12">
            {type === "individual" && <IndividualModules />}
            {type === "agent" && <AgentModules />}
            {type === "company" && <CompanyModules />}
            {type === "government" && <GovernmentModules />}
            {!type && (
              <div className="p-6 bg-white rounded shadow">
                No user type selected. Please complete onboarding flow.
              </div>
            )}
          </div>
        </div> */}

          {/* Recent activities (table matching image) */}
          <div className="mt-6">
            <RecentActivities />
          </div>
        </div>
        {/* Top alert area */}
      </div>
    </div>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";
// import Sidebar from "@/components/dashboard/sidebar";
// import Header from "@/components/dashboard/header";
// import { useRouter } from "next/navigation";

// import ProfileType from "@/app/user-type/page";
// // import OverviewCards from "@/components/OverviewCards";
// // import IndividualOverviewCards from "@/components/cards/IndividualOverviewCards";
// // import AgentOverviewCards from "@/components/cards/AgentOverviewCards";
// // import CompanyOverviewCards from "@/components/cards/CompanyOverviewCards";
// // import GovernmentOverviewCards from "@/components/cards/GovernmentOverviewCards" from "@/components/OverviewCards";
// // import Charts from "@/components/Charts";
// // import QuickActions from "@/components/QuickActions";
// // import RecentActivities from "@/components/RecentActivities";
// // import IndividualModules from "@/components/modules/IndividualModules";
// // import AgentModules from "@/components/modules/AgentModules";
// // import CompanyModules from "@/components/modules/CompanyModules";
// // import GovernmentModules from "@/components/modules/GovernmentModules";

// export default function DashboardPage() {
//   // const [type, setType] = useState<string | null>(null);

//   const router = useRouter();

//   // useEffect(() => {
//   //   const stored = localStorage.getItem("formData");
//   //   if (!stored) {
//   //     router.push("/"); // fallback if no data found
//   //     return;
//   //   }

//     // const { userType } = JSON.parse(stored);

//   //   switch (userType) {
//   //     case "individual":
//   //       router.push("/dashboard");
//   //       break;
//   //     case "agent":
//   //       router.push("/dashboard/agent");
//   //       break;
//   //     case "government":
//   //       router.push("/dashboard/government");
//   //       break;
//   //     case "company":
//   //       router.push("/dashboard/company");
//   //       break;

//   //     default:
//   //       router.push("/dashboard/individual");
//   //   }
//   // }, [router]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
//       <div className="p-6">
//         <Header />

//         {/* Top alert area */}
//         <div className="mt-4">
//           <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-2 rounded">
//             Your registration is being reviewed
//           </div>
//         </div>

//         {/* Overview cards */}
//         {/* <div className="mt-6">
//           {type === "individual" && <IndividualOverviewCards />}
//           {type === "agent" && <AgentOverviewCards />}
//           {type === "company" && <CompanyOverviewCards />}
//           {type === "government" && <GovernmentOverviewCards />}
//         </div> */}

//         {/* Main content: charts + quick actions */}
//         {/* <div className="grid grid-cols-12 gap-6 mt-6">
//           <div className="col-span-8">
//             <div className="bg-white rounded-xl p-4 shadow">
//               <Charts />
//             </div>
//           </div>

//           <div className="col-span-4">
//             <div className="bg-white rounded-xl p-4 shadow flex flex-col gap-4">
//               <QuickActions />

//               small client distribution card that appears in image
//               <div className="p-3 bg-slate-50 rounded">
//                 <div className="text-sm font-medium">Client Type</div>
//                 <div className="text-xs text-muted-foreground">
//                   Distribution
//                 </div>
//               </div>
//             </div>
//           </div> */}
//       </div>

//       {/* Modules area determined by user type (exact modules from image are placed here) */}
//       <div className="mt-6 grid grid-cols-12 gap-6">
//         {/* <div className="col-span-12">
//             {type === "individual" && <IndividualModules />}
//             {type === "agent" && <AgentModules />}
//             {type === "company" && <CompanyModules />}
//             {type === "government" && <GovernmentModules />}
//             {!type && (
//               <div className="p-6 bg-white rounded shadow">
//                 No user type selected. Please complete onboarding flow.
//               </div>
//             )}
//           </div> */}
//       </div>

//       {/* Recent activities (table matching image) */}
//       <div className="mt-6">{/* <RecentActivities /> */}</div>
//     </div>
//     // </div>
//   );
// }
