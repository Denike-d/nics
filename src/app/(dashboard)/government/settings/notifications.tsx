"use client";

import { useState } from "react";

type NotificationRow = {
  label: string;
  email: boolean;
  inApp: boolean;
};

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState<NotificationRow[]>([
    { label: "All System Updates", email: false, inApp: true },
    { label: "Document related Updates", email: false, inApp: false },
    { label: "Client appointment update", email: true, inApp: false },
    { label: "Appointment Updates", email: false, inApp: true },
    { label: "Clearance Updates", email: true, inApp: false },
    { label: "Registration Updates", email: false, inApp: true },
  ]);

  const toggle = (index: number, field: "email" | "inApp") => {
    const updated = [...notifications];
    updated[index][field] = !updated[index][field];
    setNotifications(updated);
  };

  return (
    <div className="">
      <div className="mt-2 overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-left text-sm text-gray-700 border-b">
              <th className="font-medium">Notification Type</th>
              <th className="py-3 font-medium">Email</th>
              <th className="py-3 font-medium">In-App</th>
            </tr>
          </thead>

          <tbody>
            {notifications.map((item, index) => (
              <tr key={index}>
                <td className="py-4 text-sm text-gray-800">{item.label}</td>

                {/* Email Toggle */}
                <td className="py-4">
                  <button
                    onClick={() => toggle(index, "email")}
                    className={`relative inline-flex h-5 w-10 items-center rounded-full transition ${
                      item.email ? "bg-green-500" : "bg-gray-400"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        item.email ? "translate-x-5" : "translate-x-1"
                      }`}
                    />
                  </button>
                </td>

                {/* In-App Toggle */}
                <td className="py-4">
                  <button
                    onClick={() => toggle(index, "inApp")}
                    className={`relative inline-flex h-5 w-10 items-center rounded-full transition ${
                      item.inApp ? "bg-green-500" : "bg-gray-400"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        item.inApp ? "translate-x-5" : "translate-x-1"
                      }`}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
