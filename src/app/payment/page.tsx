"use client";
import { useRouter } from "next/navigation";
import { dashboardRoutes } from "@/components/utils/dashboardRoutes";
import { useEffect, useState } from "react";
import { ProfileType } from "@/components/utils/types";

export default function PaymentPage() {
  const router = useRouter();

  const [userType, setUserType] = useState<ProfileType>(null);

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (!data) return;

    const parsed = JSON.parse(data);
    setUserType(parsed.userType);
  }, []);

  function confirmPayment() {
    if (!userType) return;
    const dashboardUrl = dashboardRoutes[userType];
    router.push(dashboardUrl);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h3 className="text-lg font-semibold">Mock Payment</h3>
        <p className="text-sm text-slate-600 mt-2">
          This simulates payment — integrate Paystack/Flutterwave later.
        </p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={confirmPayment}
            className="px-4 py-2 bg-emerald-600 text-white rounded"
          >
            Pay Now
          </button>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 border rounded"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
