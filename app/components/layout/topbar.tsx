import React from "react";
import { FiPhone } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="border-b dark:border-[#FFFFFF47] border-[#B7B0B099] py-2 px-9 md:flex hidden items-center justify-between">
      <p className="text-sm font-normal dark:text-[#FFFFFF] text-[#171616]">
        what&apos;s the next . . .
      </p>
      <div className="flex items-center justify-end gap-5">
        <div className="flex space-x-1 ">
          <FiPhone className="text-lg text-[#8B68FF]" />
          <p className="font-medium text-xs leading-5 ">
            <a href="tel:+91 97222 78859">+91 97222 78859</a>
          </p>
        </div>
        <div className="flex space-x-1">
          <FiPhone className="text-lg text-[#8B68FF]" />
          <p className="font-medium text-xs leading-5">
            <a href="tel:+91 7861973807">+91 7861973807</a>
          </p>
        </div>
        <div className="flex space-x-1">
          <IoIosMail className="text-lg text-[#8B68FF]" />
          <p className="font-medium text-xs leading-5">
            <a href="mailto:hitnhammertechnologies0706@gmail.com">
              hitnhammertechnologies0706@gmail.com
            </a>
          </p>
        </div>
        {/* <div className="flex space-x-1">
          <DarkMode />
        </div> */}
      </div>
    </div>
  );
};

export default Topbar;
