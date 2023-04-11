/** @format */

import React from "react";

const CommonPage = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-32 md:h-60 bg-gradient-to-r from-[#8884fe63] to-[#84d9fe30] rounded ">
      <h1 className="text-4xl  font-bold">{children}</h1>
    </div>
  );
};

export default CommonPage;
