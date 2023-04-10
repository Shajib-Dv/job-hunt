/** @format */

import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="md:w-4/5 mx-auto">
        <Header />
        <div className="h-[calc(100vh - 200px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
