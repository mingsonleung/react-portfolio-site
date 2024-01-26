import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    title: "UC San Diego | La Jolla, CA",
    year: "September 2021 - October 2023",
    role: "Lead Technician - ITS Service Desk",
    details:
      "Assisting UCSD students, staff, and affiliates with support requests by phone, email, and chat. Troubleshooting network, account, software, and outage issues. Continuously improving documentation and procedures on our internal Confluence knowledge base. Hiring and training 15+ new staff each academic quarter.",
  },
  {
    title: "UC San Diego | La Jolla, CA",
    year: "March 2023 - June 2023",
    role: "Instructional Assistant - Introduction to Python (COGS 18)",
    details:
      "Facilitated student understanding of Python through structured office hours and interactive coding labs. Assisted professor with grading tasks, providing prompt and accurate feedback on labs, homework, and exams. Collaborated with educational staff to optimize and streamline learning materials.",
  },
  {
    title: "Zen Ramen & Sushi | Elk Grove, CA",
    year: "June 2020 - August 2021",
    role: "IT Specialist & Restaurant Manager",
    details:
      "Implementing and managing third-party software integrations including food delivery and pickup services. Installing, maintaining, and troubleshooting Point of Sale (POS) system, ensuring minimal downtime. Supervising and training team members, maintaining high performance during peak service hours. Leveraging graphic design skills to develop key customer-facing materials.",
  },
  {
    title: "Apple Inc. | Elk Grove, CA",
    year: "July 2019 - April 2020",
    role: "Technical Support Tier 1 Advisor",
    details:
      "Providing in-depth technical support for Apple products, resolving complex issues via phone. Specialized in iOS, iPadOS, watchOS, tvOS, macOS. Prioritizing customer satisfaction by delivering swift and quality resolutions. Facilitating effective communication with other advisors, departments, and management.",
  },
];

const Work = () => {
  return (
    <div
      id="work"
      className="max-w-[1040px] min-h-screen m-auto md:pl-20 p-4 py-16"
    >
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
