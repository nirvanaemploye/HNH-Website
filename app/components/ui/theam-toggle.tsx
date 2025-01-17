import React from "react";

const TheamToggle = () => {
  return (
    <div className="p-1 border-2 border-white/40 rounded-full">
      <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-full"></div>
              <p className="text-xs font-semibold pr-2 text-primary" >Dark</p>
      </div>
    </div>
  );
};

export default TheamToggle;
