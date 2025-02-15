import React from "react";
import Grid from "./(components)/grid";
import Hero from "./(components)/hero";
import Separation from "./(components)/separation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const data = [
  {
    fullName: "Kartik Barman",
    imageUrl: "/kartik2.jpg",
    roles: "Founder",
    contact: "+91 7976252910",
  },
  {
    fullName: "Yuvraj Rathore",
    imageUrl: "/yuvi2.jpg",
    roles: "Co-Founder",
    contact: "+91 9772648034",
  },
];

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
          Our Approach to Serving You
        </div>
        <Grid />
      </section>
      <div>
        <Separation />
      </div>
      <div className="mx-auto max-w-6xl my-20 w-full">
        <div className="text-center text-3xl font-medium">
          Get to know our Founder & Co. Founder
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-10">
          {data.map((person) => (
            <div className="flex items-center gap-5" key={person.imageUrl}>
              <Image
                src={person.imageUrl}
                width={100}
                height={100}
                alt={person.fullName}
                className="rounded-full"
              />
              <div>
                <h2 className="text-xl font-semibold">{person.fullName}</h2>
                <p className="text-lg">{person.roles}</p>
                <p className="text-sm">{person.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
