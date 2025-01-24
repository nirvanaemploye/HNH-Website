import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-[1320px] container flex md:flex-row flex-col-reverse items-center">
      <div>
        <h1 className="sm:text-[60px] text-[45px] sm:leading-[76px] leading-normal font-bold font-serif">
          Empower your business with hit-n-hammer
        </h1>
        <p className="mt-2 text-[#b7b0b0]">
          Driving Innovation, Delivering Results
        </p>
        <button className="bg-primary px-8 py-3 hover:outline rounded-lg mt-4 font-semibold text-base">
          Learn more
        </button>
      </div>
      <Image src="/hero-image.png" width={745} height={808} alt="hero" className="md:w-[745px] w-full" />
    </div>
  );
};

export default HeroSection;
