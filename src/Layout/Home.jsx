/** @format */

import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div className="h-[calc(100vh - 200px)]">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
