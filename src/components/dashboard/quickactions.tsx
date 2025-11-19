import { Headset, File, ArrowUpRight } from "lucide-react";
const data = [
  {
    id: 1,
    icon: <ArrowUpRight />,
    text: "Apply for clearance",
  },

  {
    id: 2,
    icon: <File />,
    text: "View Payments",
  },
  {
    id: 3,
    icon: <Headset />,
    text: "Contact Support",
  },
];
export default function QuickActions() {
  return (
    <>
      <p className="text-center font-semibold">Quick Actions</p>
      <div className="flex flex-col gap-3 mt-6">
        {data.map((item) => (
          <div key={item.id}>
            <button className="w-full px-4 py-3 border-none gap-2 rounded flex items-center bg-[#E7F2EC]">
              {" "}
              <div className="text-green-600">{item.icon}</div>
              <p className="text-sm">{item.text}</p>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
