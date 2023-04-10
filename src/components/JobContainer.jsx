/** @format */

import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

import JobCategory from "./JobCategory";
import AllJobs from "./AllJobs";

const JobContainer = () => {
  const jobs = useLoaderData();
  console.log(jobs);
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
        <div className="text-black grid grid-cols-1 md:grid-cols-3 gap-8">
          {jobs && jobs.map((job) => <AllJobs key={job.id} job={job} />)}
        </div>
      </div>
    </>
  );
};

export default JobContainer;
