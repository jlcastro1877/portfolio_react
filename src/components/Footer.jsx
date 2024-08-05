import React from "react";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menu";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer container */}
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        {/* Inner container with responsive flexbox layout and padding */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
          text-center pt-2 text-gray-400 text-sm pb-8"
        >
          {/* Grid layout for footer content */}
          <span>© 2024 All rights reserved.</span>
          <span>Jorge Castro</span>
          <SocialIcons Icons={Icons} /> {/* Renders social media icons */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
