/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

const JobContainer = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <>
      <Banner />
    </>
  );
};

export default JobContainer;
