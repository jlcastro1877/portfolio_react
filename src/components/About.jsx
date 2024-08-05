import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div name="about" className="w-full h-[52rem] bg-[#3d6462] text-white">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-08 gap-12 py-10">
            <div className="sm:justify text-4xl font-bold">
              <p>
                I have a Bachelor's degree in Computer Science and an MBA in
                Project Management (PMI). I recently completed a bootcamp in
                Full Stack Web Development and am now focused on pursuing a role
                as a Full Stack Web Developer.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
