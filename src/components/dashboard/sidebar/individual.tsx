"use client";

import {
  LayoutDashboard,
  Users,
  CheckCircle,
  FileBadge2,
  Wallet,
  FileText,
  HelpCircle,
  Settings,
  LogOut,
  CircleUserRound,
} from "lucide-react";
import Image from "next/image";
import nesrea from "../../../../public/images/nesrea.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard size={18} />,
  },
  {
    name: "Agent Management",
    href: "/dashboard/agent-management",
    icon: <Users size={18} />,
  },
  {
    name: "Clearance",
    href: "/dashboard/clearance",
    icon: <CheckCircle size={18} />,
  },
  {
    name: "Certificates",
    href: "/dashboard/certificates",
    icon: <FileBadge2 size={18} />,
  },
  { name: "Payments", href: "/dashboard/payment", icon: <Wallet size={18} /> },
  // { name: "Invoices", href: "/invoices", icon: <FileText size={18} /> },
  {
    name: "Support",
    href: "/dashboard/support",
    icon: <HelpCircle size={18} />,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: <CircleUserRound size={18} />,
  },

  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <Settings size={18} />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed bg-white h-screen border-r border-gray-200 flex flex-col items-start px-6 pt-6 shadow-[4px_0px_10px_rgba(0,0,0,0.1)] ">
      {/* Logo */}
      <div className="w-full flex justify-center">
        <Image
          src={nesrea}
          width={80}
          height={80}
          alt="Logo"
          className="mb-6"
        />
      </div>

      {/* Navigation */}
      <nav className="w-full space-y-2 mt-6">
        {navItems.map((item) => {
          const currentPath =
            pathname && pathname.length > 0 ? pathname : "/dashboard";

          const isActive =
            item.href === "/dashboard"
              ? currentPath === "/dashboard"
              : currentPath.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-sm transition
                ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-green-100"
                }
              `}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Logout */}
      <button className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-sm text-red-500 hover:bg-red-50">
        <LogOut size={18} />
        Log Out
      </button>
    </aside>
  );
}
