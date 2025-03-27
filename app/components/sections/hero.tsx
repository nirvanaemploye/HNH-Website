import Image from "next/image";
import React from "react";

const HeroSection = () => {

  // const bgImg = {
  //   backgroundImage: "url(/hero-bg.svg)",
  //   backgroundSize: "100% auto",
  //   backgroundPosition: "top",
  //   backgroundRepeat: "no-repeat",
    
  // };

  return (
    <div className="md:pt-28">
      <div className="max-w-[1320px] container flex md:flex-row flex-col-reverse items-center">
        <div>
          <h1
            className="sm:text-[60px] text-[45px] sm:leading-[65px] leading-normal font-bold font-serif"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Empower your business with hit-n-hammer
          </h1>
          <p
            className="mt-2 dark:text-[#b7b0b0] text-[#717070] font-normal text-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Driving Innovation, Delivering Results
          </p>
          <button
            className="bg-primary px-8 py-3 hover:outline rounded-lg mt-8 font-semibold text-base text-white"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Learn More
          </button>
        </div>
        <Image
          src="/hero-image.png"
          width={745}
          height={808}
          alt="hero"
          className="md:w-[745px] w-full"
          data-aos="fade-up"
          data-aos-duration="1500"
        />
      </div>
    </div>
  );
};

export default HeroSection;
