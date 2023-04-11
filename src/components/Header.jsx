/** @format */

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="md:w-4/5 mx-auto">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <h2 className="text-3xl font-bold ">Job-Hunter</h2>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="font-semibold text-gray-600 items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#9576FF]" : ""
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/statistic"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#9576FF]" : ""
                  }
                >
                  Statistic
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/jobs"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#9576FF]" : ""
                  }
                >
                  Applied Jobs
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#9576FF]" : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <a
                href="#"
                className="inline-block md:hidden w-full px-4 py-2 text-center text-white bg-[#9576FF] rounded-md shadow "
              >
                Start Applying
              </a>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <button className="font-semibold p-3 text-white bg-[#9576FF] rounded-md shadow ">
            Start Applying
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
