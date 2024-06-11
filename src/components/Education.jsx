import React from "react";
import EducationItem from "./EducationItem";

const data_education = [
  {
    title: "University of California - San Diego",
    location: "La Jolla, CA",
    year: "September 2020 - December 2023",
    major: "Bachelor of Science (B.S.) Design & Interaction",
    minor: "Computer Science",
    gpa: "3.7/4.0",
    awards: "Regent Scholarship (Merit-based)",
  },
];

const data_certs = [
  // Reusing EducationItem component to handle this case
  {
    title: "CompTIA A+, Network+, Security+",
    year: "Active: May 2024 - May 2027",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    year: "Active: Feb 2024 - Feb 2027",
  },
];

const Education = () => {
  return (
    <div
      id="education"
      className="max-w-[1040px] min-h-screen m-auto md:pl-20 p-4 py-16">
      <h1 className="mb-4 text-4xl font-bold text-center text-[#001b5e]">
        Education
      </h1>
      {data_education.map((item, idx) => (
        <EducationItem key={idx} {...item} />
      ))}
      <h1 className="mb-4 text-4xl font-bold text-center text-[#001b5e]">
        Certifications
      </h1>
      {data_certs.map((item, idx) => (
        <EducationItem key={idx} {...item} />
      ))}
    </div>
  );
};

export default Education;
