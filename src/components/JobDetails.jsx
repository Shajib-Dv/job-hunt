/** @format */

import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../utilities/fakeDB";

const JobDetails = () => {
  const jobId = useParams();
  const [job, setJob] = useState({});
  const jobs = useLoaderData();

  useEffect(() => {
    const newJob = jobs && jobs.find((job) => job.id === jobId.jobId);
    setJob(newJob);
  }, []);

  const {
    id,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    salary,
    jobTitle,
    contactInformation,
    location,
  } = job;

  const handleAddToDb = (id) => {
    if (jobs) {
      addToDb(id);
    }
  };
  return (
    <>
      <h2 className="text-5xl font-bold py-10 text-center">Job details</h2>
      <div className="md:flex my-20">
        <div className="md:w-3/5 space-y-3 font-semibold px-4 md:px-10">
          <p>
            <span className="font-bold">Description: </span>
            {jobDescription}
          </p>
          <p>
            <span className="font-bold">Job Responsibility: </span>
            {jobResponsibility}
          </p>
          <p className="font-bold">Educational Requirements:</p>
          <p>{educationalRequirements}</p>
          <p className="font-bold">Experiences:</p>
          <p>{experiences}</p>
        </div>
        <div className="bg-[#F4F2FF] rounded p-4 space-y-2 text-black md:w-2/5">
          <h2 className="text-2xl font-bold">Job Details</h2>
          <hr />
          <div className="flex items-center gap-2 font-semibold">
            <CurrencyDollarIcon className="h-6 w-6 text-[#8984FE] " />
            <p className="font-bold"> Salary:</p>
            <p className="text-gray-500"> {salary}</p>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <CalendarIcon className="h-6 w-6 text-[#8984FE] " />
            <p className="font-bold"> Job Title:</p>
            <p className="text-gray-500"> {jobTitle}</p>
          </div>
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <hr />
          <div className="flex items-center gap-2 font-semibold">
            <PhoneIcon className="h-6 w-6 text-[#8984FE] " />
            <p className="font-bold"> Phone:</p>
            <p className="text-gray-500"> {contactInformation?.phone}</p>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <EnvelopeIcon className="h-6 w-6 text-[#8984FE] " />
            <p className="font-bold"> Email:</p>
            <p className="text-gray-500"> {contactInformation?.email}</p>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <MapPinIcon className="h-6 w-6 text-[#8984FE] " />
            <p className="font-bold">Address:</p>
            <p className="text-gray-500"> {location}</p>
          </div>
          <button
            onClick={() => handleAddToDb(id)}
            className="w-full px-3 py-2 text-white font-semibold bg-[#8984FE] rounded-md"
          >
            Apply Now
          </button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default JobDetails;
