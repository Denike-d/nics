"use client";
import type { ReactNode } from "react";
import Sidebar from "@/components/dashboard/sidebar/agent";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full ml-68 mr-8 mb-6">{children}</main>
    </div>
  );
}
