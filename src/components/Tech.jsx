import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
   <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] underline-custom text-center">
  Some Skills
</h2>


      <p  className="text-custom-color text-custom-color mt-4 text-secondary text-[17px] leading-[30px]">
      In the dynamic world of technology, my passion burns brightly, driving my relentless pursuit 
      of knowledge and innovation. Each line of code, every algorithm tackled, fuels my curiosity and determination. Challenges are not obstacles but gateways to inspiration, spurring me to unravel complexities and harness the transformative power of technology. With dedication etched in late-night coding sessions, 
      I strive to create impactful solutions. Technology isn't merely a career; it's my calling, compelling me to shape a future where innovation knows no bounds.
      </p>
      {technologies.map((technology) => (
       <div className='w-20 h-20' key={technology.name}>
       <BallCanvas icon={technology.icon} />
     </div>
     
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
