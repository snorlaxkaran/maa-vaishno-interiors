import React from "react";
import Grid from "./(components)/grid";
import Hero from "./(components)/hero";
import Separation from "./(components)/separation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="flex flex-col">
      <nav className="max-w-6xl mx-auto w-full flex justify-between items-center p-4 lg:p-0 lg:py-1">
        <div className="flex gap-1 items-center">
          <Image src={"/z1.svg"} alt="aas" width={50} height={50} />
          <p className="text-sm text-slate-600">Maa Vaishno Interiors</p>
        </div>
        <Button variant={"outline"} className="bg-transparent">
          Get in touch
        </Button>
      </nav>
      <Hero />
      <section
        className="max-w-6xl overflow-hidden
       flex mx-auto flex-col"
      >
        <div className="text-center my-10 text-xl font-semibold">
          Our Approach to Serving You.
        </div>
        <Grid />
      </section>
      <div>
        <Separation />
      </div>
    </div>
  );
};

export default page;
