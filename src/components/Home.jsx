import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Navbar from "./Navbar";
import deved from "../assets/profile_picture.jpeg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#3d6462]">
      <Navbar />

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/* <img class="object-center sm:object-left" src={deved} /> */}
        <div>
          <img class="object-fit: contain h-48 w-96 " src={deved}></img>
        </div>

        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          Jorge Castro
        </h2>
        <p className="text-white py-4 max-w-[700px]">
          With over 20 years of experience in software development and ERP
          implementation, I specialize in translating complex business
          requirements into effective technological solutions. My background
          includes four years of developing robust financial applications using
          C# in the Forex industry, as well as significant experience as a QA
          Engineer, ensuring the highest standards of quality through meticulous
          testing and validation
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
