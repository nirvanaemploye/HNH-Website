import React from "react";

const Topbar = () => {
  return (
    <div className="border-b border-white/28 py-2 px-9 sm:flex hidden items-center justify-between">
      <p>what&apos;s the next . . .</p>
      <div className="flex items-center justify-end gap-5">
        <p className="font-semibold text-xs">
          <a href="tel:+91 97222 78859">+91 97222 78859</a>
        </p>
        <p className="font-semibold text-xs">
          <a href="tel:+91 97222 78859">+91 97222 78859</a>
        </p>
        <p className="font-semibold text-xs">
          <a href="mailto:nirvanatechlabs@gmail.com">
            nirvanatechlabs@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Topbar;
