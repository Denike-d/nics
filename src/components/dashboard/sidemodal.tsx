"use client";

interface SideModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content?: {
    name: string;
    clientType: string;
    totalClearance: string;
    appointDate: string;
  };
}

export default function SideModal({
  isOpen,
  onClose,
  title,
  content,
}: SideModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Overlay (dim background) */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer content */}
      <div
        className={`relative h-full w-full max-w-md bg-white shadow-xl p-6 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {content && (
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Name</span>
              <span>{content.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Client Type</span>
              <span>{content.clientType}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Total Clearance</span>
              <span>{content.totalClearance}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Appointment Date</span>
              <span>{content.appointDate}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
