import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Navbar from "./Navbar";

function ErrorPage() {
  return (
    <div name="home" className="w-full h-screen bg-[#3d6462]">
      <Navbar />
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#8892b0] py-4 max-w-[700px]">Erro 404!</p>
      </div>
    </div>
  );
}

export default ErrorPage;
