import { whyContent } from "@/content/landing";
import React from "react";
import Image from "next/image";

export default function Why() {
  return (
    <div className="bg-white pt-2 pb-4 px-20">
      <h5 className="text-center text-black font-bold text-2xl">
        Why use NESREA system
      </h5>
      <div className="justify-between mx-20 mt-8 flex items-centre ">
        {whyContent.map((item) => (
          <div
            key={item.id}
            className="bg-black p-4 w-[260px] h-[150px] rounded-tl-[50px] rounded-br-[50px]"
          >
            <div>
              <Image
                src={item.icon}
                alt="document"
                width={30}
                className="flex mx-auto"
              />
              <div className="mt-4">
                <h6 className="text-white">{item.head}</h6>
                <p className="text-sm text-white">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
