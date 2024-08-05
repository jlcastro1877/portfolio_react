import React from "react";
import { Icons } from "./Menu";

const SocialIcons = () => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon, index) => (
        <a
          key={index}
          href={icon.link}
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security best practice
          className="p-6 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-800 duration-300"
          aria-label={icon.name} // Accessibility
        >
          {icon.component} {/* Render the icon component */}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
