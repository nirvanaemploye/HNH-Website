import PortfolioItems from "@/app/components/sections/portfolio-items";
import Image from "next/image";
import React from "react";



const PortfolioPage = () => {
  return (
    <div className="pt-[150px] container max-w-[1320px] space-y-32">
      <div className="flex md:flex-row flex-col gap-16 items-center">
        <Image
          src="/portfolio-hero.png"
          width={650}
          height={294}
          className="md:w-[650px] w-full"
          alt="about us"
        />
        <div>
          <h3 className="font-serif sm:text-8xl text-5xl">Portfolio</h3>
          <p className="sm:text-xl text-lg text-[#E1E0E0] mt-5">
            Our company offers a comprehensive range of services tailored to
            meet the diverse needs of our clients. From innovative digital
            solutions to traditional marketing strategies, we provide a complete
            suite of services designed to help businesses thrive in today&apos;s
            competitive landscape. Our expertise spans across areas such as web
            development, mobile app development, graphic design, content
            creation, social media management, SEO optimization, and more.
          </p>
        </div>
      </div>
      <div>
        <h3 className="font-serif text-primary font-bold sm:text-5xl text-4xl border-b-2 border-dashed border-white uppercase w-fit mx-auto mb-16">
          OUR PORTFOLIO
        </h3>
        <PortfolioItems />
      </div>
    </div>
  );
};

export default PortfolioPage;
