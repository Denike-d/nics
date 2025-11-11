import { Users, CircleDotDashed, Banknote, Files } from "lucide-react";

export default function OverviewCards() {
  const cards = [
    { title: "Total Clients", value: 1200, icon: <Users /> },
    { title: "Pending Applications", value: 24, icon: <CircleDotDashed /> },
    { title: "Clearance payments", value: "₦1,200,000", icon: <Banknote /> },
    { title: "Certificates Issued", value: 980, icon: <Files /> },
  ];
  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((c) => (
        <div key={c.title} className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center gap-2">
            <div className="text-white bg-green-700 p-1.5 rounded-full items-center">
              {c.icon}
            </div>
            <div>
              <div className="text-xs text-slate-500 text-semibold">
                {c.title}
              </div>
              <div className="text-2xl font-bold mt-2">{c.value}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
