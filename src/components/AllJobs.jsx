/** @format */

import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const AllJobs = ({ job }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    location,
    fulltimeOrParttime,
    salary,
  } = job;
  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-64" src={companyLogo} alt="company logo" />
        </figure>
        <div className="card-body gap-0">
          <h2 className="card-title font-bold">{jobTitle}</h2>
          <p className="text-gray-500 font-semibold">{companyName}</p>
          <div className="flex gap-2 w-3/5 my-2">
            <p className="border border-[#8885FE] px-3 py-2 text-[#7876fb] font-bold">
              {fulltimeOrParttime}
            </p>
            <p className="border border-[#8885FE] px-3 py-2 text-[#7876fb] font-bold">
              {remoteOrOnsite}
            </p>
          </div>
          <div className="flex justify-between text-gray-500 font-semibold">
            <div className="flex items-center">
              <MapPinIcon className="h-6 w-6 bg-transparent" />
              <p> {location}</p>
            </div>
            <div className="flex items-center">
              <CurrencyDollarIcon className="h-6 w-6 bg-transparent" />
              <p>{salary}</p>
            </div>
          </div>
          <div>
            <button className="p-2 font-bold rounded outline-none border-none text-white mt-8 bg-[#8885FE]">
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllJobs;
