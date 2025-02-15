import React from "react";

import Image from "next/image";

import Hero from "./_components/hero";
import Grid from "./_components/grid";
import Separation from "./_components/separation";
import Gallery from "./_components/gallery";

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
      <Hero />
      <section
        className="max-w-6xl overflow-hidden
       flex mx-auto flex-col"
      >
        <div className="text-center my-10 text-3xl font-medium">
          Our Approach to Serving You
        </div>
        <Grid />
      </section>
      <div>
        <Separation />
      </div>
      <div className="mx-auto max-w-6xl my-20 w-full p-4 md:p-0">
        <div className="text-center text-3xl font-medium">
          Get to know our Founder & Co. Founder
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10">
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
      <Gallery />
    </div>
  );
};

export default page;
