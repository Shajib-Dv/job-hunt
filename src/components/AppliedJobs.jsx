/** @format */

import React, { useEffect, useState } from "react";
import { getAppliedJob } from "../utilities/fakeDB";
import { useLoaderData } from "react-router-dom";
import AppliedJobList from "./AppliedJobList";

const AppliedJobs = () => {
  const [appliedJob, setAppliedJob] = useState([]);
  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    const storedJob = getAppliedJob();
    let remainingJob = [];
    for (const id in storedJob) {
      const remaining = data && data.find((j) => j.id === id);
      remainingJob.push(remaining);
    }
    setAppliedJob(remainingJob);
  }, []);
  // console.log(appliedJob);
  return (
    <>
      <h3 className="text-5xl text-center font-bold my-20">Applied job</h3>
      <div>
        {appliedJob &&
          appliedJob.map((job) => <AppliedJobList key={job.id} job={job} />)}
      </div>
    </>
  );
};

export default AppliedJobs;
