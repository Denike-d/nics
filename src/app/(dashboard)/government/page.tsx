"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import OverviewCards from "@/components/dashboard/overviewcards";
import Charts from "@/components/dashboard/charts";
import QuickActions from "@/components/dashboard/quickactions";
import RecentActivities from "@/components/dashboard/recentactivities";

export default function DashboardPage() {
  const [type, setType] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("userType");
    setType(t);
  }, []);

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-white to-slate-50">
      <div className="">
        <Header />
        <div className="p-4">
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

          {/* Modules area determined by user type (exact modules from image are placed here) */}
          {/* <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12">
            {type === "individual" && <IndividualModules />}
            {type === "agent" && <AgentModules />}
            {type === "company" && <CompanyModules />}
            {type === "government" && <GovernmentModules />}
            {!type && (
              <div className="p-6 bg-white rounded shadow">
                No user type selected. Please complete onboarding flow.
              </div>
            )}
          </div>
        </div> */}

          {/* Recent activities (table matching image) */}
          <div className="mt-6">
            <RecentActivities />
          </div>
        </div>
        {/* Top alert area */}
      </div>
    </div>
  );
}
