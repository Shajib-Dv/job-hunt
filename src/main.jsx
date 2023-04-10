/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import Home from "./Layout/Home";
import JobContainer from "./components/JobContainer";
import Statistic from "./components/Statistic";
import AppliedJobs from "./components/AppliedJobs";
import Blog from "./components/Blog";

import JobDetails from "./components/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <JobContainer />,
      },
      {
        path: "statistic",
        element: <Statistic />,
      },
      {
        path: "jobs",
        element: <AppliedJobs />,
      },
      {
        path: "jobs/:jobId",
        element: <JobDetails />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
