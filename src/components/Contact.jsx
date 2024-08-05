import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div
        name="contact"
        className="w-full h-[52rem] bg-[#3d6462] flex justify-center items-center p-4"
      >
        <form
          method="POST"
          action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">
              Contact
            </p>
            <p className="text-gray-300 py-4"></p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Send e-mail
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
