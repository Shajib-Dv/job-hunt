/** @format */

import React from "react";
import {
  BeakerIcon,
  CalculatorIcon,
  LightBulbIcon,
  SpeakerWaveIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";

const JobCategory = () => {
  return (
    <>
      <div className="text-center my-6">
        <h2 className="text-4xl font-bold py-2">Job Category List</h2>
        <p className="text-gray-600 font-semibold">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 my-6">
          <div className="w-4/5 mx-auto bg-slate-100 rounded p-4 shadow-lg">
            <CalculatorIcon className="h-12 w-12 text-[#8984FE] pl-4" />
            <h4 className=" font-bold">Account & Finance</h4>
            <small>300 Jobs Available</small>
          </div>

          <div className="w-4/5 mx-auto bg-slate-100 rounded p-4 shadow-lg">
            <LightBulbIcon className="h-12 w-12 text-[#8984FE] pl-4" />
            <h4 className=" font-bold">Creative Design</h4>
            <small>150+ Jobs Available</small>
          </div>

          <div className="w-4/5 mx-auto bg-slate-100 rounded p-4 shadow-lg">
            <SpeakerWaveIcon className="h-12 w-12 text-[#8984FE] pl-4" />
            <h4 className=" font-bold">Marketing & Sales</h4>
            <small>200+ Jobs Available</small>
          </div>

          <div className="w-4/5 mx-auto bg-slate-100 rounded p-4 shadow-lg">
            <CpuChipIcon className="h-12 w-12 text-[#8984FE] pl-4" />
            <h4 className=" font-bold">Engineering Job</h4>
            <small>100+ Jobs Available</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCategory;
