/** @format */

import React from "react";
import Lottie from "lottie-react";
import client from "../../public/client.json";

const Banner = () => {
  return (
    <>
      <div className="card lg:card-side bg-base-100 my-20">
        <div className="w-1/2 card-body">
          <h1 className="text-7xl font-bold">
            One Step Closer To Your{" "}
            <span className="text-[#917BFF]">Dream Job</span>
          </h1>
          <p className="py-4 text-gray-600 font-semibold">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div>
            <button className="btn bg-[#917BFF]">Get Started</button>
          </div>
        </div>
        <figure className="w-1/2">
          <Lottie animationData={client} loop={true} />
        </figure>
      </div>
    </>
  );
};

export default Banner;
