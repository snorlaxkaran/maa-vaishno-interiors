import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('/Screenshot_2024-11-11-19-39-14-58_7352322957d4404136654ef4adb64504.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
      className="relative"
    >
      <div className="bg-[#f3f0eb] text-[#362b24] py-7 px-10 w-full lg:max-w-[46rem] eb-garamond tracking-wide absolute lg:top-1/2 lg:-translate-y-1/2 lg:ml-20 flex flex-col gap-10">
        <p className="text-center uppercase font-[family-name:var(--font-geist-sans)] text-sm font-semibold">
          Interior Design Service
        </p>
        <h1 className="lg:text-7xl text-5xl">
          Stunning interior design services, now within reach.
        </h1>
        <div className="font-[family-name:var(--font-geist-sans)]">
          <Button className="start-0 bg-orange-300 rounded-full text-xl px-7 py-5 text-[#362b24] hover:text-white">
            Contact us
          </Button>
        </div>

        <Image src={"/z1.png"} alt="aas" width={100} height={100} />
      </div>
    </div>
  );
};

export default Hero;
