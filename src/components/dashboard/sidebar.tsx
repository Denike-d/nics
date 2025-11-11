// import { useEffect, useState } from "react";

// export const modulesByUserType = {
//   individual: [
//     "Dashboard",
//     "Clearance",
//     "Certificates",
//     "Payments",
//     "Invoice",
//     "Support",
//     "Settimgs",
//   ],
//   agent: ["Agent Selection", "Clearance", "Invoices", "Payments"],
//   company: ["Profile", "Employees", "Reports", "Payments"],
//   government: ["Analytics", "Compliance", "Tax", "Subsidies"],
// };

// export default function Sidebar() {
//   const [type, setType] = useState<string | null>(null);
//   useEffect(() => setType(localStorage.getItem("userType")), []);

//   const modules = type
//     ? modulesByUserType[type as keyof typeof modulesByUserType]
//     : [];

//   return (
//     <aside className="w-64 bg-white border-r h-screen p-4 sticky top-0">
//       <div className="mb-6">
//         <div className="text-xs text-slate-500">Navigation</div>
//       </div>
//       <nav className="flex flex-col gap-2">
//         {modules.map((items) => (
//           <button
//             key={items}
//             className="text-left px-3 py-2 rounded hover:bg-slate-50"
//           >
//             {m}
//           </button>
//         ))}
//       </nav>
//     </aside>
//   );
// }

export default function Sidebar() {
  const type =
    typeof window !== "undefined" && localStorage.getItem("userType");

  const menuItems = {
    individual: ["Overview", "Payments", "Requests", "Notifications"],
    agent: ["Dashboard", "Clients", "Commissions", "Approvals"],
    company: ["Analytics", "Employees", "Invoices", "Compliance"],
    government: [
      "Public Requests",
      "Regulations",
      "Submissions",
      "Stakeholders",
    ],
  };

  return (
    <aside className="w-64 shadow min-h-screen p-4 space-y-4 border-r border-grey-300 ">
      <h2 className="font-bold capitalize">{type} Menu</h2>
      <ul className="space-y-2">
        {menuItems[type as keyof typeof menuItems]?.map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
