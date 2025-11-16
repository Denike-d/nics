"use client";

import { useState } from "react";
import SideModal from "@/components/dashboard/sidemodal";

type ItemDetails = {
  description: string;
  features?: string[];
  foundedYear?: number;
  headquarters?: string;
  [key: string]: any;
};

type Item = {
  id: number;
  title: string;
  details: ItemDetails;
};
export default function HomePage() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const items: Item[] = [
    {
      id: 1,
      title: "Cowrywise",
      details: {
        description: "Cowrywise helps users save and invest automatically.",
        features: ["Automated savings", "Mutual funds"],
        headquarters: "Lagos",
      },
    },
    {
      id: 2,
      title: "PiggyVest",
      details: {
        description: "PiggyVest offers flexible saving and investment options.",
        features: ["Flex", "Investify", "Target savings"],
      },
    },
    {
      id: 3,
      title: "Kuda Bank",
      details: {
        description: "Kuda is a digital bank offering zero-fee transfers.",
        features: ["Free transfers", "Budgeting"],
      },
    },
  ];

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Digital Savings Platforms</h1>

      {items.map((item) => (
        <a
          href="#"
          key={item.id}
          onClick={(e) => {
            e.preventDefault();
            setSelectedItem(item);
          }}
          className="block text-blue-600 hover:underline"
        >
          {item.title}
        </a>
      ))}

      <SideModal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title || ""}
        content={selectedItem?.details || null}
      />
    </main>
  );
}
