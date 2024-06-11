import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    title: "UC San Diego | La Jolla, CA",
    year: "September 2021 - October 2023",
    role: "Lead Technician - ITS Service Desk",
    details: "",
  },
  {
    title: "UC San Diego | La Jolla, CA",
    year: "March 2023 - June 2023",
    role: "Instructional Assistant - Introduction to Python (COGS 18)",
    details: "",
  },
  {
    title: "Zen Ramen & Sushi | Elk Grove, CA",
    year: "June 2020 - August 2021",
    role: "IT Specialist & Restaurant Manager",
    details: "",
  },
  {
    title: "Apple Inc. | Elk Grove, CA",
    year: "July 2019 - April 2020",
    role: "Technical Support Tier 1 Advisor",
    details: "",
  },
];

const Work = () => {
  return (
    <div
      id="work"
      className="max-w-[1040px] min-h-screen m-auto md:pl-20 p-4 py-16">
      <h1 className="mb-4 text-4xl font-bold text-center text-[#001b5e]">
        Work
      </h1>
      {data.map((item, idx) => (
        <WorkItem key={idx} {...item} />
      ))}
    </div>
  );
};

export default Work;
