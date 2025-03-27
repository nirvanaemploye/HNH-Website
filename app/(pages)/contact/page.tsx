"use client";
import { useTheme } from "@/app/components/context/themeContext";
import ContactUsForm from "@/app/components/forms/contact-us";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  const { theme } = useTheme();

  const bgDark = {
    backgroundImage: "url(/Home-page-dark.svg)",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  const bgLight = {
    backgroundImage: "url(/Home-page-light.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="dark:text-white dark:bg-[#170C3F] md:pb-32"
      style={theme === "dark" ? bgDark : bgLight}
    >
      <div className="pt-[250px] container max-w-[1320px] space-y-32">
        <div className="flex md:flex-row flex-col gap-16 items-center">
          <Image
            data-aos="fade-up"
            data-aos-duration="500"
            src="/contact-hero.png"
            width={650}
            height={294}
            className="md:w-[650px] w-full"
            alt="about us"
          />
          <div>
            <h3
              className="font-serif sm:text-8xl text-4xl md:text-left text-center borderFont"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span
                className={
                  theme === "dark" ? "text-gradient" : "text-gradient1"
                }
              >
                Cont
              </span>
              <span>act Us</span>
            </h3>
            <p
              className="sm:text-xl text-lg dark:text-[#E1E0E0] text-[#717070] mt-5 md:text-left text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Our company offers a comprehensive range of services tailored to
              meet the diverse needs of our clients. From innovative digital
              solutions to traditional marketing strategies, we provide a
            </p>
          </div>
        </div>
        <ContactUsForm />
        {/* <div className="w-full h-[370px] rounded-[20px]"> */}
        <iframe
          className="w-full h-[370px] rounded-[20px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.4947052039125!2d72.97331871070132!3d20.768008314312034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ee691bdc222d%3A0x8601d0112c1f6232!2sNirvana%20Tech%20Labs!5e1!3m2!1sen!2sin!4v1727870729215!5m2!1sen!2sin"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ContactPage;
