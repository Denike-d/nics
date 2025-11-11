"use client";

import { useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function ChartsSection() {
  const [year, setYear] = useState("2023");

  // Client distribution donut chart
  const clientData = {
    labels: ["Individual 40%", "Company 60%"],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["#8BA48A", "#4A674A"],
        borderWidth: 0,
      },
    ],
  };

  // Monthly clearance activity bar chart
  const monthlyData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Clearances",
        data: [12, 20, 18, 15, 22, 19, 15, 18, 16, 14, 10, 8],
        backgroundColor: "#8BA48A",
        borderRadius: 8,
        categoryPercentage: 0.9,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <section className="mt-2">
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold text-xl">Charts</h2>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        >
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
        </select>
      </div>

      <div className="flex gap-8 items-center">
        {/* Doughnut */}
        <div className="w-[200px]">
          <h3 className="text-sm font-medium mb-2">Client Distribution</h3>
          <Doughnut data={clientData} />
        </div>

        {/* Bar chart */}
        <div className="w-[420px]">
          <h3 className="text-sm font-medium mb-2">
            Monthly Clearance Activity
          </h3>
          <Bar data={monthlyData} options={barOptions} />
        </div>
      </div>
    </section>
  );
}
