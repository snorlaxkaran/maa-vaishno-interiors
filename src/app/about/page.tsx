import Image from "next/image";
import React from "react";

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

const AboutUS = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-2xl py-10 text-center font-medium">About us</div>
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
  );
};

export default AboutUS;
