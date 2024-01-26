import React from "react";
import bgImage from "../assets/background-img.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedinIn,
  FaRegEnvelope,
  FaRegFilePdf,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={bgImage}
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Mingson Leung
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Front-End Developer",
                2000,
                "UX Designer",
                2000,
                "Tech Enthusiast",
                2000,
                "Sushi Chef",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              speed={50}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://github.com/mingsonleung"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer" size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/mingsonleung/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="cursor-pointer" size={25} />
            </a>
            <a
              href="/Resume_MingsonLeung.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegFilePdf className="cursor-pointer" size={25} />
            </a>
            <a href="#contact">
              <FaRegEnvelope className="cursor-pointer" size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
