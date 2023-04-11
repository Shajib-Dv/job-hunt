/** @format */

import React, { createContext, useEffect, useState } from "react";

import Banner from "./Banner";

import JobCategory from "./JobCategory";
import AllJobs from "./AllJobs";

const JobContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <>
      <Banner />
      <JobCategory />
      <div className="my-20">
        <h1 className="text-4xl text-center font-bold">Featured Jobs</h1>
        <p className="text-center font-semibold text-gray-600 py-2">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs &&
            jobs
              .slice(0, showAll ? 4 : 8)
              .map((job) => <AllJobs key={job.id} job={job} />)}
        </div>
        <div className="text-center my-10">
          {showAll && (
            <button
              onClick={() => setShowAll(!showAll)}
              className=" px-3 py-2 text-white font-semibold bg-[#8984FE] rounded-md"
            >
              See All Jobs
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default JobContainer;
