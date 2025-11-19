"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import OverviewCards from "@/components/dashboard/overviewcards";
import Charts from "@/components/dashboard/charts";
import QuickActions from "@/components/dashboard/quickactions";
import RecentActivities from "@/components/dashboard/recentactivities";
// import IndividualModules from "@/components/modules/IndividualModules";
// import AgentModules from "@/components/modules/AgentModules";
// import CompanyModules from "@/components/modules/CompanyModules";
// import GovernmentModules from "@/components/modules/GovernmentModules";

export default function DashboardPage() {
  const [type, setType] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("userType");
    setType(t);
  }, []);

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-white to-slate-50">
      <div className="flex-1 mr-4">
        <Header />
        <div className="p-4">
          <h2 className="font-bold text-2xl mb-2">Dashboard</h2>
          <p>
            Welcome back Emmanuel Ojo👋! Here's what's happening with your
            system today.
          </p>
          <div className="mt-4">
            <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-2 rounded">
              Your registration is being reviewed — check status in Recent
              Activities
            </div>
          </div>

          {/* Overview cards */}
          <div className="mt-6">
            <OverviewCards />
          </div>

          {/* Main content: charts + quick actions */}
          <div className="flex justify-between mt-6 gap-2 bg-grey-100 items-center ">
            <div>
              <div className="bg-white rounded-xl p-4 shadow">
                <Charts />
              </div>
            </div>

            <div>
              <div className="bg-white h-[320px] rounded-xl px-4 pt-4 shadow flex flex-col gap-2">
                <QuickActions />
              </div>
            </div>
          </div>
        </div>

        {/* Recent activities (table matching image) */}
        <div className="mt-6">
          <RecentActivities />
        </div>
      </div>
      {/* Top alert area */}
    </div>
  );
}
