import React from "react";
import Grid from "./(components)/grid";
import Hero from "./(components)/hero";
import Separation from "./(components)/separation";

const page = () => {
  return (
    <div className="flex flex-col">
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
    </div>
  );
};

export default page;
