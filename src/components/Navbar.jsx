

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SocialMediaLinks from "./SocialMediaLinks";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
// import { slideIn } from "../utils/motion";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
//   const variants = {
//     visible:{opacity:1, x:100, 
//     transition:{ staggerChildren: 0.2},
// },
//     hidden:{opacity:0},
// }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"} scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        > 
          <img
            src="/src/assets/company/fa.jpeg"
            alt="image"
            className="w-12 h-12 rounded-full object-cover"
          />
   
  <p className='text-white text-[18px] font-bold cursor-pointer flex '>
    Fayssal &nbsp;
    <span className='sm:block hidden'> | Boukadour</span>
  </p>

          {/* <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Fayssal &nbsp;
            <span className='sm:block hidden'> | Boukadour</span>
          </p> */}
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-9'>
          {navLinks.map((nav) => (
            <motion.li 
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>
                {nav.icon && <FontAwesomeIcon icon={nav.icon} className="mr-2" />}
                {nav.title}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>
                    {nav.icon && <FontAwesomeIcon icon={nav.icon} className="mr-2" />}
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <SocialMediaLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
