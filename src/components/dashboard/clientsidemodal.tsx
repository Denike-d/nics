"use client";

import {
  X,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  User,
  Building2,
  FileText,
} from "lucide-react";
import Image from "next/image";
import profil from "../../../public/images/profil.png";

interface SideModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content?: any;
}

const ClientSideModal = ({
  isOpen,
  onClose,
  title,
  content,
}: SideModalProps) => {
  // const [isOpen, setIsOpen] = useState(true);

  function handleApprove() {
    onClose();
  }
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div>
      {/* Side Modal - Takes 1/3 of screen */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 bg-opacity-30 transition-opacity z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed right-0 top-0 h-full w-full md:w-1/2 bg-white shadow-2xl z-50 overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              {/* <h2 className="text-xl font-semibold text-gray-800">
                Client Profile
              </h2> */}
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Client Basic Info */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Image src={profil} alt="profile" className="w-30" />
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-gray-400 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="text-base font-semibold text-gray-900">
                          {content.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-gray-400 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500">User Type</p>
                        <p className="text-base font-semibold text-gray-900">
                          {content.clientType}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-gray-400 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500">Nesrea ID</p>
                        <p className="text-base font-medium text-gray-900">
                          {content.nesreaID}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 pt-2 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Contact Information
                </h3>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href="mailto:a.olamide@ecotech.ng"
                      className="text-base text-blue-600 hover:text-blue-700"
                    >
                      {content.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a
                      href="tel:+2348034567890"
                      className="text-base text-gray-900 hover:text-blue-600"
                    >
                      +234 803 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-base text-gray-900">
                      15 Adeola Odeku Street,
                      <br />
                      Victoria Island, Lagos State,
                      <br />
                      Nigeria
                    </p>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="border-t  pt-2 border-gray-200">
                <h3 className="font-bold mb-2">Clearance Info</h3>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-1">
                      Total Clearances
                    </p>
                    <p className="text-2xl font-bold text-gray-900">3</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-1">Total Payments</p>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full font-bold text-2xl">
                      N300,000
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 space-y-4 rounded-md">
                  <p>
                    <span className="font-semibold  text-gray-700">
                      Clearance ID:
                    </span>{" "}
                    N2374884999EED
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      Date and Time:
                    </span>{" "}
                    25th OCtober, 2025; 12:00pm
                  </p>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-3 pt-2 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Appointment Details
                </h3>

                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Appointment Status
                    </span>
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800  ${getStatusColor(
                        content.status
                      )}`}
                    >
                      {content.status}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">
                        Appointment Date & Time
                      </p>
                      <p className="text-base font-medium text-gray-900">
                        2025-11-15 10:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message from Client */}
              <div className="space-y-2 pt-2 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Message from Client
                </h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    I would like to discuss the environmental clearance
                    application for our new manufacturing facility. We have
                    prepared all necessary documentation and would appreciate
                    guidance on the next steps in the approval process.
                  </p>
                </div>
              </div>

              {/* Last Modified */}
              {/* <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Last Modified:{" "}
                  <span className="font-medium">
                    November 10, 2025, 3:45 PM
                  </span>
                </p>
              </div> */}

              {/* Action Buttons */}

              <div className="flex gap-3 pt-4">
                {content.status === "Pending" && (
                  <>
                    <button
                      onClick={handleApprove}
                      className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-400 transition-colors font-medium"
                    >
                      Accept
                    </button>

                    <button
                      onClick={handleApprove}
                      className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-400 transition-colors font-medium"
                    >
                      Reject
                    </button>
                  </>
                )}
                {content.status === "Approved" && (
                  <button
                    onClick={handleApprove}
                    className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-400 transition-colors font-medium"
                  >
                    Revoke
                  </button>
                )}
                {content.status === "Rejected" && (
                  <button
                    onClick={handleApprove}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-400 transition-colors font-medium"
                  >
                    Delete
                  </button>
                )}
                {content.status === "Revoked" && (
                  <button
                    onClick={handleApprove}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-400 transition-colors font-medium"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ClientSideModal;
