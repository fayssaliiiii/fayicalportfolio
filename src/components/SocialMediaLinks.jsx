import React from 'react';
import { github } from "../assets";

const SocialMediaLinks = () => {
  return (
    <div className="flex space-x-4">
      {/* <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} color="#0077B5" />
      </a> */}
      <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
        {/* <github size={24} color="#000" /> */}
        <github />
      </a>
      {/* Add more social media icons as needed */}
    </div>
  );
};

export default SocialMediaLinks;
