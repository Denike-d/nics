"use client";
import type { ReactNode } from "react";
import Sidebar from "@/components/dashboard/sidebar/individual";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full ml-66 mb-6">{children}</main>
    </div>
  );
}
