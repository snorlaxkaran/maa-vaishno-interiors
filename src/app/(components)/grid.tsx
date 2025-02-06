import Image from "next/image";
import React from "react";

const Grid = () => {
  return (
    <div className="flex-col flex space-y-28 p-4 py-14">
      <div className="md:grid md:grid-cols-[1fr_4fr_3fr] flex flex-col text-center md:text-left md:space-y-0 space-y-10 md:space-x-6">
        <p className="eb-garamond text-4xl">01</p>
        <div className="max-w-lg flex flex-col gap-4">
          <h2 className="text-3xl eb-garamond tracking-wider">
            Match with a Reliable Designer in Jaipur and Get Inspired.
          </h2>
          <p className="leading-6">
            With 10 years of experience, 1,000+ designs, and a strong presence
            in Jaipur, we’ll help you refine your style, find inspiration, and
            bring your design dreams to life for your unique space.
          </p>
        </div>
        <div className="grid grid-flow-col grid-rows-3 gap-1 max-h-64">
          <div className="row-span-3 bg-black w-52 rounded-l overflow-hidden">
            <Image
              src={
                "/Screenshot_2024-11-11-19-39-14-58_7352322957d4404136654ef4adb64504.jpg"
              }
              className="w-full h-full object-cover"
              width={100}
              height={100}
              alt="image 1"
              unoptimized
            />
          </div>
          <div className="col-span-2 bg-black  rounded-r overflow-hidden">
            <Image
              src={"/IMG_20241112_014747.jpg"}
              className="h-full w-full object-cover"
              width={100}
              height={100}
              alt="image 1"
              unoptimized
            />
          </div>
          <div className="col-span-2 row-span-2 bg-black  rounded-r  overflow-hidden">
            <Image
              src={"/IMG_20241112_014645.jpg"}
              className="h-full w-full object-cover"
              width={100}
              height={100}
              alt="image 1"
              unoptimized
            />
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-[1fr_4fr_3fr] flex flex-col text-center md:text-left md:space-y-0 space-y-10 md:space-x-6">
        <p className="eb-garamond text-4xl">02</p>
        <div className="max-w-lg flex flex-col gap-4">
          <h2 className="text-3xl eb-garamond tracking-wider">
            Collaborate 1:1 with your designer to create your perfect space.
          </h2>
          <p className="leading-6">
            Let your designer guide you to a design that meets your functional
            needs and suits your unique style. See it come to life with a 3D
            rendering of the design in your actual space.
          </p>
        </div>
        <div className=" bg-black rounded-md max-h-64 overflow-hidden">
          <Image
            src={"/IMG-20241005-WA0017.jpg"}
            className="w-full h-full object-cover"
            width={100}
            height={100}
            alt="image 1"
            unoptimized
          />
        </div>
      </div>
      <div className="md:grid md:grid-cols-[1fr_4fr_3fr] flex flex-col text-center md:text-left md:space-y-0 space-y-10 md:space-x-6">
        <p className="eb-garamond text-4xl">03</p>
        <div className="max-w-lg flex flex-col gap-4">
          <h2 className="text-3xl eb-garamond tracking-wider">
            Elevate Your Space with Effortless Design
          </h2>
          <p className="leading-6">
            Our experts source from 100+ premium brands to craft stunning
            staircase railings and windows. With Maa Vaishno Interiors’
            proprietary platform, enjoy a seamless experience, a simple
            checkout, and our price guarantee—ensuring you never overpay.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className=" bg-black rounded-l-md max-h-52 overflow-hidden">
            <Image
              src={"/IMG_20241112_014633.jpg"}
              className="w-full h-full object-cover"
              width={100}
              height={100}
              alt="image 1"
              unoptimized
            />
          </div>
          <div className=" bg-black rounded-r-md max-h-52 overflow-hidden">
            <Image
              src={"/IMG-20241225-WA0063.jpg"}
              className="w-full h-full object-cover"
              width={100}
              height={100}
              alt="image 1"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
