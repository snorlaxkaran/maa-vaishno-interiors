import React from "react";

import Hero from "./_components/hero";
import Grid from "./_components/grid";
import Separation from "./_components/separation";
import Gallery from "./_components/gallery";
import AboutUS from "./about/page";

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
      <div className="mx-auto max-w-6xl my-20 w-full p-4 md:p-0" id="about">
        <div className="text-center text-3xl font-medium">
          Get to know our Founder & Co. Founder
        </div>
        <AboutUS />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
    </div>
  );
};

export default page;
