import Image from "next/image";
import React, { useState } from "react";
import Modal from "../ui/modal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalContent = {
    title: "About Hit-N-Hammer",
    content: `Digitalize Your Idea, Build Your Business with Hit-N-Hammer
Hit-N-Hammer is a premier tech solutions provider dedicated to transforming your vision into reality. We deliver custom digital solutions tailored to your unique business needs. Our services include mobile and web app development, immersive game creation, and cutting-edge frontend development using technologies like React. We craft intuitive UI/UX designs that enhance user experience, alongside innovative business and cloud solutions. From optimizing operations to seamless cloud email migration, we empower your business to thrive in the digital age with secure, scalable, and efficient technologies. Partner with us to unlock your business’s full potential through innovation.`,
  };

  // const bgImg = {
  //   backgroundImage: "url(/hero-bg.svg)",
  //   backgroundSize: "100% auto",
  //   backgroundPosition: "top",
  //   backgroundRepeat: "no-repeat",

  // };

  return (
    <div className="md:pt-28">
      <div className="max-w-[1440px] container flex xl:flex-row flex-col-reverse items-center">
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
          // src="/Image_10.png"
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
