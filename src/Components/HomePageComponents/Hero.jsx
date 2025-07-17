import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-800 w-full">
      <div className="w-10/12 mx-auto flex justify-between items-center p-8 text-white">
        {/* The Left side */}
        <div className="flex flex-col gap-4 w-1/2">
          <h2 className="font-bold text-5xl ">
            Your learning path to endless growth
          </h2>
          <p>Your learning path to endless growth</p>
          <div className="space-x-6 ">
            <button className=" px-6 py-2   font-semibold rounded bg-gradient-to-tr from-[#fff] to-[#fff] text-[#446e40]">
              Explore courses
            </button>
            <button className="px-6 py-2 rounded bg-gradient-to-tr from-[#446e40] to-[#83D47B] ">
              Register now
            </button>
          </div>
        </div>
        {/*  The Right side*/}
        <div className="w-1/2 ">
          <img src="/hero-image.svg" alt="hero image" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
