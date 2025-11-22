"use client";

// import React, { useState, useEffect } from "react";
// import {
//   Search,
//   SlidersHorizontal,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import Header from "@/components/dashboard/header";
// import Modal from "@/components/modal";
// import Pagination from "@/components/pagination";

// interface Agent {
//   id: number;
//   name: string;
//   contact: string;
//   nesreaId: string;
//   location: string;
//   image: string;
// }

// const MeetOurAgents: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
//   const [appointedAgent, setAppointedAgent] = useState<Agent | null>(null);
//   const [showRevokeModal, setShowRevokeModal] = useState(false);
//   const [comment, setComment] = useState("");

//   const agents: Agent[] = [
//     {
//       id: 1,
//       name: "Lehrer Howard",
//       contact: "+234-18229344",
//       nesreaId: "NE12345600000",
//       location: "Ikeja, Nigeria",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
//     },
//     {
//       id: 2,
//       name: "Kelvin Perry",
//       contact: "+234-18229344",
//       nesreaId: "NE12345600000",
//       location: "Lekki, Nigeria",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
//     },
//     {
//       id: 3,
//       name: "Tannuel Philips",
//       contact: "+234-18229344",
//       nesreaId: "NE12345612300",
//       location: "Benin, Nigeria",
//       image:
//         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
//     },
//     // Add more agents here
//   ];

//   const itemsPerPage = 20;

//   const totalPages = Math.ceil(agents.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentagents = agents.slice(startIndex, startIndex + itemsPerPage);

//   const handleAppointClick = (agent: Agent) => {
//     setSelectedAgent(agent);
//     setShowModal(true);
//   };

//   const handleRevoke = () => {
//     // alert("Appointment revoked");
//     setAppointedAgent(null);
//     setShowRevokeModal(false);
//   };

//   const handleConfirmAppointment = () => {
//     if (selectedAgent) {
//       setAppointedAgent(selectedAgent); // This agent is now appointed
//       // localStorage.setItem("appointedAgent", JSON.stringify(selectedAgent));
//       setShowModal(false);
//     }
//   };

//   const handleCancelAppointment = () => {
//     setShowModal(false);
//     setSelectedAgent(null);
//   };

//   const handleCancelRevoke = () => {
//     setShowRevokeModal(false);
//   };

//   const handleBackToList = () => {
//     setAppointedAgent(null); // Go back to the list view
//     setSelectedAgent(null);
//   };

//   // useEffect(() => {
//   //   const storedAgent = localStorage.getItem("appointedAgent");
//   //   if (storedAgent) {
//   //     setAppointedAgent(JSON.parse(storedAgent));
//   //   }
//   // }, []);

//   return (
//     <div className="w-full max-w-7xl mx-auto p-6 bg-white">
//       <Header />

//       {/* Show appointed agent details if appointedAgent exists */}
//       {appointedAgent ? (
//         <div>
//           <div className="flex justify-between items-center my-6">
//             <h1 className="text-gray-900 text-lg font-semibold underline-offset-4">
//               Your appointed agent
//             </h1>
//             <button className="bg-gray-400 hover:bg-gray-500 text-white text-sm px-4 py-2 rounded-md transition-colors">
//               Appoint new agent
//             </button>
//           </div>
//           <div className="bg-white rounded-2xl shadow-md p-8">
//             {/* Agent Profile */}
//             <div className="flex flex-col items-center mb-6">
//               <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-100">
//                 <img
//                   src={appointedAgent.image}
//                   alt={appointedAgent.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-bold text-gray-900 mb-4">
//                 {appointedAgent.name}
//               </h2>

//               {/* Agent Details */}
//               <div className="space-y-2 text-center w-full">
//                 <div className="flex justify-center items-center gap-2">
//                   <span className="font-semibold text-gray-700">Contact:</span>
//                   <span className="text-gray-600">
//                     {appointedAgent.contact}
//                   </span>
//                 </div>
//                 <div className="flex justify-center items-center gap-2">
//                   <span className="font-semibold text-gray-700">
//                     NESREA ID:
//                   </span>
//                   <span className="text-gray-600">
//                     {appointedAgent.nesreaId}
//                   </span>
//                 </div>
//                 <div className="flex justify-center items-center gap-2">
//                   <span className="font-semibold text-gray-700">Location:</span>
//                   <span className="text-gray-600">
//                     {appointedAgent.location}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Appointment Details */}
//             <div className="border-2 border-gray-200 rounded-xl p-6 mb-6">
//               <h3 className="text-center font-bold text-gray-900 text-lg mb-4">
//                 Appointment Details
//               </h3>

//               <div className="space-y-3">
//                 <div className="flex items-start gap-3">
//                   <span className="font-semibold text-gray-700 min-w-fit">
//                     Status:
//                   </span>
//                   <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-sm font-medium">
//                     Pending
//                   </span>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <span className="font-semibold text-gray-700 min-w-fit whitespace-nowrap">
//                     Date and Time:
//                   </span>
//                   <span className="text-gray-600">
//                     31st October 2025; 10:O0pm
//                   </span>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <span className="font-semibold text-gray-700 min-w-fit">
//                     Comment: {appointedAgent.name} is yet to accept your request
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Revoke Button */}
//             <div className="flex justify-center">
//               <button
//                 onClick={() => setShowRevokeModal(true)}
//                 className="bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md"
//               >
//                 Revoke Appointment
//               </button>
//             </div>
//           </div>
//           {showRevokeModal && (
//             <Modal isOpen={showRevokeModal} onClose={handleCancelRevoke}>
//               <div className="text-center mb-6">
//                 <h3 className="text-md font-medium text-gray-900">
//                   Are you sure you want to revoke {appointedAgent.name} as your
//                   agent.
//                 </h3>
//               </div>
//               <div className="flex items-center justify-center gap-4">
//                 <button
//                   onClick={handleRevoke}
//                   className="px-6 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
//                 >
//                   Yes, I want to
//                 </button>
//                 <button
//                   onClick={handleCancelRevoke}
//                   className="px-6 py-2.5 border-2 border-red-600 text-red-600 text-sm font-medium rounded-lg hover:bg-red-50 transition-colors"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </Modal>
//           )}
//         </div>
//       ) : (
//         <>
//           {/* Header + Search + Filters */}
//           <div className="flex items-center justify-between mb-6 mt-4">
//             <h2 className="text-xl font-semibold text-gray-800">
//               Meet our agents
//             </h2>
//             <div className="flex items-center gap-3">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 />
//               </div>
//               <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
//                 <SlidersHorizontal className="w-4 h-4 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Agents Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//             {currentagents.map((agent) => (
//               <div
//                 key={agent.id}
//                 className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
//               >
//                 <img
//                   src={agent.image}
//                   alt={agent.name}
//                   className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
//                 />
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-start justify-between gap-2 mb-2">
//                     <div className="flex-1 min-w-0">
//                       <p className="text-sm font-semibold text-gray-800 truncate">
//                         Name: <span className="font-normal">{agent.name}</span>
//                       </p>
//                       <p className="text-sm text-gray-800 truncate">
//                         <span className="font-semibold">Contact:</span>{" "}
//                         {agent.contact}
//                       </p>
//                     </div>
//                     <button
//                       onClick={() => handleAppointClick(agent)}
//                       className="px-3 py-2 bg-green-600 text-white text-xs font-medium rounded hover:bg-emerald-700 transition-colors whitespace-nowrap flex-shrink-0"
//                     >
//                       Appoint Agent
//                     </button>
//                   </div>
//                   <div className="space-y-0.5">
//                     <p className="text-sm text-gray-800 truncate">
//                       <span className="font-semibold">NESREA ID:</span>{" "}
//                       {agent.nesreaId}
//                     </p>
//                     <p className="text-sm text-gray-800 truncate">
//                       <span className="font-semibold text-sm">Location:</span>{" "}
//                       {agent.location}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Pagination */}
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={setCurrentPage}
//           />
//         </>
//       )}

//       {/* Appointment Confirmation Modal */}
//       {selectedAgent && showModal && (
//         <Modal isOpen={showModal} onClose={handleCancelAppointment}>
//           <div className="text-center mb-6">
//             <h3 className="text-md font-medium text-gray-900">
//               You are about to appoint {selectedAgent.name} as your agent.
//             </h3>
//             <span className="mt-4 text-gray-700 block">
//               Do you want to proceed?
//             </span>
//           </div>
//           <div className="flex justify-center mb-4">
//             <input
//               value={comment}
//               type="text"
//               placeholder="Write a message to the agent"
//               className="p-2 border border-gray-300 w-[500px] h-[50px] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               onChange={(e) => setComment(e.target.value)}
//             />
//           </div>
//           <div className="flex items-center justify-center gap-4">
//             <button
//               onClick={handleConfirmAppointment}
//               className="px-6 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
//             >
//               Yes, I want to
//             </button>
//             <button
//               onClick={handleCancelAppointment}
//               className="px-6 py-2.5 border-2 border-red-600 text-red-600 text-sm font-medium rounded-lg hover:bg-red-50 transition-colors"
//             >
//               Cancel
//             </button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default MeetOurAgents;

"use client";

import { Users, CircleDotDashed, Banknote, Files } from "lucide-react";
import { Search, SlidersHorizontal } from "lucide-react";
import Header from "@/components/dashboard/header";
import Pagination from "@/components/pagination";
import { useState } from "react";
import SideModal from "@/components/dashboard/clientsidemodal";

import Link from "next/link";
import AgentSideModal from "@/components/dashboard/agentsidemodal";

export default function OverviewCards() {
  const cards = [
    { title: "Pending", value: 0, icon: <Users /> },
    { title: "Accepted", value: 0, icon: <CircleDotDashed /> },
    { title: "Rejected", value: 0, icon: <Banknote /> },
    { title: "Revoked", value: 0, icon: <Files /> },
  ];

  interface Activity {
    id: number;
    name: string;
    clientType: string;
    totalClearance: string;
    appointmentDate: string;
    nesreaID: string;
    status: "Rejected" | "Approved" | "Pending";
  }

  const [activities] = useState<Activity[]>([
    {
      id: 1,
      name: "Esther Hownard",
      clientType: "Agent",
      totalClearance: "1",
      appointmentDate: "11th Oct, 2025 - 7:55pm",
      status: "Pending",
      nesreaID: "NES-23494-hhr",
    },
    {
      id: 2,
      name: "John Paul",
      clientType: "Agent",
      totalClearance: "1",
      appointmentDate: "11th Oct, 2025 - 7:55pm",
      status: "Pending",
      nesreaID: "NES-23494-hhr",
    },
    {
      id: 3,
      name: "M$N Enterprise",
      clientType: "Agent",
      totalClearance: "3",
      appointmentDate: "11th Oct, 2025 - 7:55pm",
      status: "Approved",
      nesreaID: "NES-23494-hhr",
    },

    {
      id: 4,
      name: "Esther Hownard",
      clientType: "Agent",
      totalClearance: "1",
      appointmentDate: "11th Oct, 2025 - 7:55pm",
      status: "Pending",
      nesreaID: "NES-23494-hhr",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All Activities");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = activities.slice(startIndex, startIndex + itemsPerPage);

  const [selectedRow, setSelectedRow] = useState<Activity | undefined>(
    undefined
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Rejected":
        return "text-red-600 bg-red-50";
      case "Approved":
        return "text-green-600 bg-green-50";
      case "Pending":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div>
      <Header />
      <div className="px-4">
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold mb-4">Appointment Overview</p>
            <Link
              href="./agent-management/agentlist"
              // onClick={() => handleAppointClick(agent)}
              className="px-3 py-2 bg-green-600 text-white text-xs font-medium rounded hover:bg-emerald-700 transition-colors whitespace-nowrap flex-shrink-0"
            >
              Appoint Agent
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6 mt-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">Pending</span>
                <div className="bg-yellow-100 p-2 rounded-full">
                  <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">0</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">Approved</span>
                <div className="bg-green-100 p-2 rounded-full">
                  <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">0</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">Rejected</span>
                <div className="bg-red-100 p-2 rounded-full">
                  <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">0</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">Revoked</span>
                <div className="bg-orange-100 p-2 rounded-full">
                  <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">0</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto bg-white">
          {/* Header */}
          <div className="flex items-center justify-between py-8">
            <h2 className="text-xl font-semibold text-gray-800">Agent List</h2>

            <div className="flex items-center gap-3">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filter Button */}
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <span className="text-sm text-gray-700">Filter</span>
                <SlidersHorizontal className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                    S/N
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                    Nesrea ID
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                    Total Clearance
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                    Appointment Date
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {activities.map((activity) => (
                  <tr
                    key={activity.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {activity.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {activity.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {activity.clientType}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {activity.totalClearance}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {activity.appointmentDate}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          activity.status
                        )}`}
                      >
                        {activity.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {/* <SideModal
                      isOpen={!!selectedItem}
                      onClose={() => setSelectedItem(null)}
                      title={selectedItem?.title || ""}
                      content={selectedItem?.details || ""}
                    /> */}
                      <button
                        className="text-sm text-green-600 hover:text-green-700 font-medium hover:underline"
                        onClick={() => setSelectedRow(activity)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <AgentSideModal
              isOpen={!!selectedRow}
              onClose={() => setSelectedRow(undefined)}
              title={selectedRow?.name}
              content={selectedRow}
            />
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
