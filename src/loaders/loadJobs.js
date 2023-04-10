/** @format */

const loadJobs = async () => {
  const res = await fetch("data.json");
  const data = await res.json();
  return data;
};

export { loadJobs };
