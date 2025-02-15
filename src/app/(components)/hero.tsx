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
      <div className="absolute inset-0 bg-gray-900/55">
        <div className="flex items-center justify-center min-h-screen">
          <div className="space-y-2 max-w-6xl w-full">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Elevate your Space with Glass Railings
            </h1>
            <p className="text-slate-300">
              Discover the perfect blend of elegance and durability with premium
              glass railing systems. Designed to enhance any space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
