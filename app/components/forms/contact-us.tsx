import Image from 'next/image';
import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelope, FaPhone } from "react-icons/fa6";

const ContactUsForm = () => {
  
  return (
    <div
      /* style={{
        boxShadow: "0px 25.42px 38.13px #666AF513,inset 0px 0px 10px #ffffff30",
      }} */
      style={{
        boxShadow: "0px 35.42px 48.13px #666AF521,inset 0px 0px 10px #ffffff30",
      }}
      className="dark:bg-white/5 bg-[#FFFFFF0D] rounded-2xl sm:p-10 p-5 grid md:grid-cols-2 grid-cols-1 gap-24"
    >
      <div>
        <h5 className="capitalize text-primary font-oswald font-semibold text-3xl">
          Get in touch
        </h5>
        <p className="dark:text-[#E1E0E0] text-[#717070] mt-1">
          We are here for you! How can we help?
        </p>
        <form className="sm:mt-14 mt-7 sm:space-y-9 space-y-5">
          <input
            className="w-full h-14 px-4 dark:bg-[#262036] bg-[#FFFFFF0D] border border-primary [box-shadow:0px_4px_20px_#8B68FF25] rounded-lg"
            placeholder="Enter your name"
            type="text"
          />
          <input
            className="w-full h-14 px-4 dark:bg-[#262036] bg-[#FFFFFF0D] border border-primary [box-shadow:0px_4px_20px_#8B68FF25] rounded-lg"
            placeholder="Enter your email address"
            type="email"
          />
          <textarea
            rows={4}
            className="dark:bg-[#262036] bg-[#FFFFFF0D] w-full text-[#898686] p-4 border border-primary [box-shadow:0px_4px_20px_#8B68FF25] rounded-lg"
            placeholder="Go ahead, We are listening..."
          ></textarea>
          <button className="w-full py-4 bg-primary rounded-lg font-semibold sm:text-2xl text-lg">
            Submit
          </button>
        </form>
      </div>
      <div className="md:block hidden">
        <Image
          src="/contact-form-vector.svg"
          alt="contact us"
          width={435}
          height={310}
        />
        <div className="space-y-7 mt-11">
          <div className="flex items-center justify-start gap-4">
            <span className="h-10 w-10 border border-primary text-primary rounded-full flex items-center justify-center">
              <FaMapMarkerAlt />
            </span>
            <p>
              <a
                href="https://www.google.com/maps/dir//Nirvana+Tech+Labs+Nursery+Rd+opp.+Anand+Cinema,+Maruti+Nagar+Society+Bilimora,+Gujarat+396321/@20.7680594,72.9737598,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3be0ee691bdc222d:0x8601d0112c1f6232"
                target="_blank"
              >
                Nirvana Tech Labs
              </a>
            </p>
          </div>
          <div className="flex items-center justify-start gap-4">
            <span className="h-10 w-10 border border-primary text-primary rounded-full flex items-center justify-center">
              <FaPhone />
            </span>
            <p>
              <a href="tel:+91 7861973807">+91 7861973807</a>
            </p>
          </div>
          <div className="flex items-center justify-start gap-4">
            <span className="h-10 w-10 border border-primary text-primary rounded-full flex items-center justify-center">
              <FaEnvelope />
            </span>
            <p>
              <a href="mailto:hitnhammertechnologies0706@gmail.com">
                hitnhammertechnologies0706@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm