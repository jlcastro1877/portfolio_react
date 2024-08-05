import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar /> {/* Renders the Navbar component */}
      <div name="about" className="w-full h-[52rem] bg-[#3d6462] text-white">
        {/* Main container with background color and text color */}
        <div className="flex flex-col justify-center items-center w-full h-full">
          {/* Flexbox container to center content */}
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            {/* Grid layout with two columns */}
            <div className="sm:text-right pb-8 pl-4">
              {/* Title section */}
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                About {/* Heading text */}
              </p>
            </div>
            <div></div> {/* Empty div for grid layout spacing */}
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-02 gap-12 py-10">
            {/* Grid layout for content */}
            <div className="sm:center text-[20px] font-bold">
              {/* Description section */}
              <p>
                I have a Bachelor's degree in Computer Science and an MBA in
                Project Management (PMI). I recently completed a bootcamp in
                Full Stack Web Development and am now focused on pursuing a role
                as a Full Stack Web Developer.
              </p>
            </div>
          </div>
        </div>
        <Footer /> {/* Renders the Footer component */}
      </div>
    </>
  );
};

export default About;
