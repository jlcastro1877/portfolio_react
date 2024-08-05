import React from "react";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menu";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
        >
          <span>© 2024 All rights reserved.</span>
          <span>Jorge Castro</span>
          <SocialIcons Icons={Icons} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
