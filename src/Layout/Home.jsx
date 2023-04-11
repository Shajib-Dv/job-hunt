/** @format */

import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="">
        <Header />
        <div className="min-h-[90vh]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
