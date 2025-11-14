"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/dashboard/header";
import Modal from "@/components/modal";
import Pagination from "@/components/pagination";

interface Agent {
  id: number;
  name: string;
  contact: string;
  nesreaId: string;
  location: string;
  image: string;
}

const MeetOurAgents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [appointedAgent, setAppointedAgent] = useState<Agent | null>(null);
  const [showRevokeModal, setShowRevokeModal] = useState(false);

  const agents: Agent[] = [
    {
      id: 1,
      name: "Lehrer Howard",
      contact: "+234-18229344",
      nesreaId: "NE12345600000",
      location: "Ikeja, Nigeria",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      name: "Kelvin Perry",
      contact: "+234-18229344",
      nesreaId: "NE12345600000",
      location: "Lekki, Nigeria",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      name: "Tannuel Philips",
      contact: "+234-18229344",
      nesreaId: "NE12345612300",
      location: "Benin, Nigeria",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    },
    // Add more agents here
  ];

  const itemsPerPage = 20;

  const totalPages = Math.ceil(agents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentagents = agents.slice(startIndex, startIndex + itemsPerPage);

  const handleAppointClick = (agent: Agent) => {
    setSelectedAgent(agent);
    setShowModal(true);
  };

  const handleRevoke = () => {
    // alert("Appointment revoked");
    setAppointedAgent(null);
    setShowRevokeModal(false);
  };

  const handleConfirmAppointment = () => {
    if (selectedAgent) {
      setAppointedAgent(selectedAgent); // This agent is now appointed
      // localStorage.setItem("appointedAgent", JSON.stringify(selectedAgent));
      setShowModal(false);
    }
  };

  const handleCancelAppointment = () => {
    setShowModal(false);
    setSelectedAgent(null);
  };

  const handleCancelRevoke = () => {
    setShowRevokeModal(false);
  };

  const handleBackToList = () => {
    setAppointedAgent(null); // Go back to the list view
    setSelectedAgent(null);
  };

  // useEffect(() => {
  //   const storedAgent = localStorage.getItem("appointedAgent");
  //   if (storedAgent) {
  //     setAppointedAgent(JSON.parse(storedAgent));
  //   }
  // }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-white">
      <Header />

      {/* Show appointed agent details if appointedAgent exists */}
      {appointedAgent ? (
        <div>
          <div className="flex justify-between items-center my-6">
            <h1 className="text-gray-900 text-lg font-semibold underline-offset-4">
              Your appointed agent
            </h1>
            <button className="bg-gray-400 hover:bg-gray-500 text-white text-sm px-4 py-2 rounded-md transition-colors">
              Appoint new agent
            </button>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8">
            {/* Agent Profile */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-100">
                <img
                  src={appointedAgent.image}
                  alt={appointedAgent.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {appointedAgent.name}
              </h2>

              {/* Agent Details */}
              <div className="space-y-2 text-center w-full">
                <div className="flex justify-center items-center gap-2">
                  <span className="font-semibold text-gray-700">Contact:</span>
                  <span className="text-gray-600">
                    {appointedAgent.contact}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <span className="font-semibold text-gray-700">
                    NESREA ID:
                  </span>
                  <span className="text-gray-600">
                    {appointedAgent.nesreaId}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <span className="font-semibold text-gray-700">Location:</span>
                  <span className="text-gray-600">
                    {appointedAgent.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="border-2 border-gray-200 rounded-xl p-6 mb-6">
              <h3 className="text-center font-bold text-gray-900 text-lg mb-4">
                Appointment Details
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-700 min-w-fit">
                    Status:
                  </span>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-sm font-medium">
                    Pending
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-700 min-w-fit whitespace-nowrap">
                    Date and Time:
                  </span>
                  <span className="text-gray-600">
                    31st October 2025; 10:O0pm
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-700 min-w-fit">
                    Comment: {appointedAgent.name} is yet to accept your request
                  </span>
                </div>
              </div>
            </div>

            {/* Revoke Button */}
            <div className="flex justify-center">
              <button
                onClick={() => setShowRevokeModal(true)}
                className="bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md"
              >
                Revoke Appointment
              </button>
            </div>
          </div>
          {showRevokeModal && (
            <Modal isOpen={showRevokeModal} onClose={handleCancelRevoke}>
              <div className="text-center mb-6">
                <h3 className="text-md font-medium text-gray-900">
                  Are you sure you want to revoke {appointedAgent.name} as your
                  agent.
                </h3>
              </div>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handleRevoke}
                  className="px-6 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Yes, I want to
                </button>
                <button
                  onClick={handleCancelRevoke}
                  className="px-6 py-2.5 border-2 border-red-600 text-red-600 text-sm font-medium rounded-lg hover:bg-red-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </Modal>
          )}
        </div>
      ) : (
        <>
          {/* Header + Search + Filters */}
          <div className="flex items-center justify-between mb-6 mt-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Meet our agents
            </h2>
            <div className="flex items-center gap-3">
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
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <SlidersHorizontal className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {currentagents.map((agent) => (
              <div
                key={agent.id}
                className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">
                        Name: <span className="font-normal">{agent.name}</span>
                      </p>
                      <p className="text-sm text-gray-800 truncate">
                        <span className="font-semibold">Contact:</span>{" "}
                        {agent.contact}
                      </p>
                    </div>
                    <button
                      onClick={() => handleAppointClick(agent)}
                      className="px-3 py-2 bg-green-600 text-white text-xs font-medium rounded hover:bg-emerald-700 transition-colors whitespace-nowrap flex-shrink-0"
                    >
                      Appoint Agent
                    </button>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm text-gray-800 truncate">
                      <span className="font-semibold">NESREA ID:</span>{" "}
                      {agent.nesreaId}
                    </p>
                    <p className="text-sm text-gray-800 truncate">
                      <span className="font-semibold text-sm">Location:</span>{" "}
                      {agent.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}

      {/* Appointment Confirmation Modal */}
      {selectedAgent && showModal && (
        <Modal isOpen={showModal} onClose={handleCancelAppointment}>
          <div className="text-center mb-6">
            <h3 className="text-md font-medium text-gray-900">
              You are about to appoint {selectedAgent.name} as your agent.
            </h3>
            <span className="mt-4 text-gray-700 block">
              Do you want to proceed?
            </span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleConfirmAppointment}
              className="px-6 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Yes, I want to
            </button>
            <button
              onClick={handleCancelAppointment}
              className="px-6 py-2.5 border-2 border-red-600 text-red-600 text-sm font-medium rounded-lg hover:bg-red-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MeetOurAgents;
