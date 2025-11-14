"use client";

import { useState } from "react";
import SideModal from "@/components/dashboard/sidemodal";

interface Item {
  id: number;
  title: string;
  details: string;
}

export default function HomePage() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const items: Item[] = [
    {
      id: 1,
      title: "Cowrywise",
      details: "Cowrywise helps users save and invest automatically.",
    },
    {
      id: 2,
      title: "PiggyVest",
      details: "PiggyVest offers flexible saving and investment options.",
    },
    {
      id: 3,
      title: "Kuda Bank",
      details: "Kuda is a digital bank offering zero fees on transfers.",
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
        content={selectedItem?.details || ""}
      />
    </main>
  );
}
