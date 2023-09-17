import React from "react";
import EducationItem from "./EducationItem";

const data = [
  {
    title: "University of California - San Diego",
    location: "La Jolla, CA",
    year: "September 2020 - December 2023",
    major: "Bachelor of Science (B.S.) Design & Interaction",
    minor: "Computer Science",
    gpa: "3.7/4.0",
    awards: "Regent Scholarship (Merit-based)",
  },
  {
    title: "Franklin High School",
    location: "Elk Grove, CA",
    year: "August 2016 - May 2020",
    major: "",
    minor: "",
    gpa: "",
    awards: "",
  },
];

const Education = () => {
  return (
    <div id="education" className="max-w-[1040px] min-h-screen m-auto md:pl-20 p-4 py-16">
      <h1 className="mb-4 text-4xl font-bold text-center text-[#001b5e]">
        Education
      </h1>
      {data.map((item, idx) => (
        <EducationItem key={idx} {...item} />
      ))}
    </div>
  );
};

export default Education;