/** @format */

import React from "react";

import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from "recharts";

const data = [
  { name: "Assignment 1", value: 60 },
  { name: "Assignment 2", value: 59 },
  { name: "Assignment 3", value: 60 },
  { name: "Assignment 4", value: 60 },
  { name: "Assignment 5", value: 60 },
  { name: "Assignment 6", value: 60 },
  { name: "Assignment 7", value: 57 },
  { name: "Assignment 8", value: 60 },
];

const Statistic = () => {
  return (
    <main className="py-20">
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <h1 className="text-center text-xl font-bold mt-5">
        Last 7 Assignments Analytics
      </h1>
    </main>
  );
};

export default Statistic;
