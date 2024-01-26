import React from "react";
import ProjectItem from "./ProjectItem";
import rollingImg from "../assets/rollingImg.png";
import philosophyImg from "../assets/philosophyImg.png";
import portfolioImg from "../assets/portfolioImg.png";
import fitnessPalImg from "../assets/fitnessPalImg.png";
import foodBoxImg from "../assets/foodBoxImg.png";
import placeholder from "../assets/placeholder.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1040px] min-h-screen m-auto md:pl-20 p-4 py-16"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8"></p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={rollingImg}
          title="TFT Rolling Statistics"
          tech="HTML, CSS, JavaScript"
          moreInfoRedirect="GitHub Repo"
          moreInfoLink="https://github.com/mingsonleung/tft-rolling-statistics"
        />
        <ProjectItem
          img={philosophyImg}
          title="Philosophical Chatbot"
          tech="React JS, CSS, HTML, OpenAI API"
          moreInfoRedirect="GitHub Repo"
          moreInfoLink="https://github.com/mingsonleung/philosophical-chatbot-dalle"
        />
        <ProjectItem
          img={portfolioImg}
          title="Portfolio Website"
          tech="Vite, React JS, Tailwind, HTML"
          moreInfoRedirect="GitHub Repo"
          moreInfoLink="https://github.com/mingsonleung/portfolio-site"
        />
        <ProjectItem
          img={fitnessPalImg}
          title="MyFitnessPal Redesign"
          tech="Figma, Adobe Photoshop, Google Sheets"
          moreInfoRedirect="Case Study (PDF)"
          moreInfoLink="/MyFitnessPalRedesign.pdf"
        />
        <ProjectItem
          img={foodBoxImg}
          title="FoodBox Kiosk Prototype"
          tech="Figma, Adobe InDesign, Inkscape, CAD"
          moreInfoRedirect="Case Study (PDF)"
          moreInfoLink="/FoodBoxPrototype.pdf"
        />
      </div>
    </div>
  );
};

export default Projects;
