/** @format */

import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AppliedJobList = ({ job }) => {
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
      <div className="card mt-4 lg:card-side bg-base-100 p-4 shadow-xl">
        <figure className="md:w-40 md:h-40">
          <img src={companyLogo} alt="Album" />
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
          <div className="flex gap-10 text-gray-500 font-semibold">
            <div className="flex items-center">
              <MapPinIcon className="h-6 w-6 bg-transparent" />
              <p> {location}</p>
            </div>
            <div className="flex items-center">
              <CurrencyDollarIcon className="h-6 w-6 bg-transparent" />
              <p>{salary}</p>
            </div>
          </div>
        </div>
        <div className="text-center my-auto mx-2">
          <Link to={`/jobs/${id}`}>
            <button className="p-2 font-bold rounded outline-none border-none text-white mt-8 bg-[#8885FE]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppliedJobList;
