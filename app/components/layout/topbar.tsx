import React from "react";
import { FiPhone } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import DarkMode from "./DarkMode";

const Topbar = () => {
  return (
    <div className="border-b border-white/28 py-2 px-9 md:flex hidden items-center justify-between">
      <p>what&apos;s the next . . .</p>
      <div className="flex items-center justify-end gap-5">
        <div className="flex space-x-1">
          <FiPhone className="text-xl" />
          <p className="font-semibold text-xs ">
            <a href="tel:+91 97222 78859">+91 97222 78859</a>
          </p>
        </div>
        <div className="flex space-x-1">
          <FiPhone className="text-xl" />
          <p className="font-semibold text-xs ">
            <a href="tel:+91 97222 78859">+91 97222 78859</a>
          </p>
        </div>
        <div className="flex space-x-1">
          <IoIosMail className="text-xl" />
          <p className="font-semibold text-xs">
            <a href="mailto:nirvanatechlabs@gmail.com">
              nirvanatechlabs@gmail.com
            </a>
          </p>
        </div>
        <div className="flex space-x-1">
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
