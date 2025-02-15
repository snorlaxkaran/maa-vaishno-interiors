import Image from "next/image";

const Separation = () => {
  return (
    <div className="bg-[#E0DFAF] text-[#362b24] ">
      <div className=" max-w-6xl mx-auto m-4 grid grid-cols-1 eb-garamond md:grid-cols-2 ">
        <h1 className="md:text-5xl text-3xl my-16 mx-4">
          Our interior design services are tailored to your space, style, and
          budget.
        </h1>
        <Image
          alt="svg"
          width={100}
          height={100}
          unoptimized
          src={"/package-bg.png"}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Separation;
