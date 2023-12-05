import React from "react";
import {Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);





const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        {/* <h2 className={styles.sectionHeadText}>Overview.</h2> */}
        <h2 className={`${styles.sectionHeadText} underline-custom`}>
  Overview.
</h2>

      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello, I am Fayssal, a seasoned software developer with expertise in TypeScript and JavaScript, specializing in renowned frameworks like React, Node.js, and Three.js. My proficiency spans across developing dynamic user interfaces, robust backend solutions, and innovative browser extensions. I am not merely a developer; I am a problem solver. My approach involves close collaboration with clients, delving deep into their requirements to craft tailor-made solutions.
My extensive experience in frontend and backend technologies enables me to create efficient, scalable, and user-friendly applications. I thrive on tackling diverse challenges, delivering high-quality results through my adaptability and quick learning skills. Whether you require intuitive UI designs, powerful backend functionalities, or cutting-edge browser extensions, I am here to transform your ideas into functional, impactful software solutions.
In addition to my individual expertise, I have had the privilege of working with Extpower, a leading company specializing in building browser extensions. During my tenure, I collaborated closely with talented full-stack developers and software engineers, further honing my skills and contributing to the development of innovative extensions.
Let's collaborate and turn your visions into reality. Together, we can create software solutions that not only meet but exceed your expectations.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 shadow-md'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};





export default SectionWrapper(About, "about");