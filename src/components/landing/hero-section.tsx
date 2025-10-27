"use client";

import React from "react";
import Eclipse from "../../../public/images/Eclipse.png";
import { heroContent } from "@/content/landing";
import Image from "next/image";
import Pana from "../../../public/images/pana.png";
import port from "../../../public/images/port.jpg";
import PrimaryButton from "./uikits/PrimaryButton";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const MotionImage = motion(Image);
export default function HeroSection() {
  return (
    <section className="flex bg-green-50 h-screen">
      <div className="flex mx-auto items-center ">
        <div className="items-center mx-auto text-black relative z-10">
          <div className="mt-2 items-center">
            <h5 className="font-bold text-[35px]">
              Get Your Import <br /> Clearance in Record Time
            </h5>
            <p className="">
              We ensure compliance with environmental standards <br /> for a
              safer and cleaner Nigeria
            </p>
            <div className="flex mt-8 gap-6 items-center">
              <PrimaryButton
                title="Sign up"
                href="/signup"
                className="text-white w-[130px]"
              />
              <PrimaryButton
                title="Log in"
                href="/login"
                className="bg-transparent border-2 border-green-700 text-green-700 w-[130px]"
              />
            </div>
          </div>
        </div>

        {/* <div>
          {heroContent.map((item) => (
            <div className="mt-2">
              <div
                key={item.id}
                className={`flex items-center w-60 text-sm gap-4 bg-white shadow-lg p-2 rounded-[15px]`}
              >
                <div>
                  <Image
                    width={item.id === 3 ? 40 : 60}
                    src={item.image}
                    alt="cert"
                  />
                </div>
                <div className="">
                  <p className="font-bold font-sm">{item.number}</p>
                  <p className="font-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <div
        className="hidden md:block w-1/2 bg-cover top-0 bg-center"
        style={{ backgroundImage: "url('/images/container.jpg')" }}
      ></div>
    </section>
  );
}
