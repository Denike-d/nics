"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/dashboard/header";
import Modal from "@/components/modal";
import { useRouter } from "next/navigation";

interface Agent {
  id: number;
  fullName: string;
  nesreaId: string;
  location: string;
  phone: string;
  picture: string;
}

export default function AgentsPage() {
  const agents: Agent[] = Array.from({ length: 32 }, (_, i) => ({
    id: i + 1,
    fullName: "Luke Michael",
    nesreaId: `NES2345677`,
    location: "Lagos, Nigeria",
    phone: "+234 810 000 00",
    picture:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  }));

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [appointedAgent, setAppointedAgent] = useState<Agent | null>(null);
  const [showRevokeModal, setShowRevokeModal] = useState(false);

  const [comment, setComment] = useState("");

  const itemsPerPage = 6;

  const totalPages = Math.ceil(agents.length / itemsPerPage);

  const router = useRouter();

  const currentItems = agents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
      router.push("/dashboard/agentmanagemt");
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
    <div>
      <Header />
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Agent List</h1>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentItems.map((agent) => (
            <div
              key={agent.id}
              className="p-5 bg-white shadow-md rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              <img
                src={agent.picture}
                alt={agent.fullName}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
              />
              <h2 className="text-md font-medium text-gray-700 text-center">
                {agent.fullName}
              </h2>
              <p className="text-gray-600 text-sm mt-1 text-center">
                NESREA ID: {agent.nesreaId}
              </p>
              <p className="text-gray-500 text-sm mt-1 text-center">
                {agent.location}
              </p>
              <p className="text-gray-500 text-sm mt-1 text-center">
                {agent.phone}
              </p>
              <p className="text-gray-500 text-sm mt-1 text-center">
                {agent.location}
              </p>

              <button
                onClick={() => handleAppointClick(agent)}
                className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
              >
                Appoint Agent
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>

          <div className="text-gray-700 font-semibold">
            Page {currentPage} of {totalPages}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      {/* Appointment Confirmation Modal */}
      {selectedAgent && showModal && (
        <Modal isOpen={showModal} onClose={handleCancelAppointment}>
          <div className="text-center mb-6">
            <h3 className="text-md font-medium text-gray-900">
              You are about to appoint {selectedAgent.fullName} as your agent.
            </h3>
            <span className="mt-4 text-gray-700 block">
              Do you want to proceed?
            </span>
          </div>
          <div className="flex justify-center mb-4">
            <input
              value={comment}
              type="text"
              placeholder="Write a message to the agent"
              className="p-2 border border-gray-300 w-[500px] h-[50px] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              onChange={(e) => setComment(e.target.value)}
            />
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
}
