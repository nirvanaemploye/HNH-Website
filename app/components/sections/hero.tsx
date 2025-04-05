import Image from "next/image";
import React, { useState } from "react";
import Modal from "../ui/modal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalContent = {
    title: "About Hit-N-Hammer",
    content: `Digitalize Your Idea, Build Your Business with [Hit-N-Hammer]

 is a leading technology solutions provider dedicated to helping businesses unlock their full potential through innovative digital solutions. We specialize in crafting custom solutions that cater to your unique needs, enabling your business to thrive in the digital age. Our extensive range of services includes:

Mobile App Development: Tailored mobile applications designed to engage your audience and streamline your operations on iOS and Android platforms.

Web App Development: Cutting-edge, scalable, and secure web applications designed to provide seamless user experiences and drive growth.

Game Development: Building immersive and engaging games that captivate users and bring your ideas to life.

Frontend Development: We create visually stunning and responsive user interfaces using the latest technologies like React to ensure your digital products stand out.

UI/UX Design: Designing user interfaces that are both intuitive and aesthetically pleasing to provide exceptional user experiences.

Business Solutions: Offering innovative solutions to optimize your business processes and improve efficiency.

Cloud Solutions: Empowering your business with cloud technologies to scale and manage your operations with ease.

Cloud Email Migration: Seamless migration of your email services to the cloud for enhanced security, accessibility, and collaboration.`,
  };

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
            Digitalize your Idea with hit-n-hammer
          </h1>
          <p
            className="mt-2 dark:text-[#b7b0b0] text-[#717070] font-normal text-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Digitalize your Idea, Build your Bussiness
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
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
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </div>
  );
};

export default HeroSection;
