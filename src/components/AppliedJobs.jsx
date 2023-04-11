/** @format */

import React, { useEffect, useState } from "react";
import { getAppliedJob } from "../utilities/fakeDB";
import { useLoaderData } from "react-router-dom";
import AppliedJobList from "./AppliedJobList";
import CommonPage from "./CommonPage";

const AppliedJobs = () => {
  const [appliedJob, setAppliedJob] = useState([]);
  const [remaining, setRemaining] = useState([]);
  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    let remainingJob = [];
    const storedJob = getAppliedJob();
    for (const id in storedJob) {
      const remaining = data && data.find((j) => j.id === id);
      remainingJob.push(remaining);
    }
    setRemaining(remainingJob);
    setAppliedJob(remainingJob);
  }, []);

  // console.log(appliedJob);
  const getValue = (value) => {
    const filteredJob =
      remaining && remaining.filter((j) => j.remoteOrOnsite === value);
    setAppliedJob(filteredJob);
  };
  return (
    <>
      <CommonPage>Applied job</CommonPage>
      <div className="text-right my-6">
        <select
          onChange={(e) => getValue(e.target.value)}
          className="select select-success w-full max-w-xs"
        >
          <option disabled selected>
            Filter by
          </option>
          <option>Remote</option>
          <option>Onsite</option>
        </select>
      </div>
      <div>
        {appliedJob &&
          appliedJob.map((job) => <AppliedJobList key={job.id} job={job} />)}
      </div>
    </>
  );
};

export default AppliedJobs;
