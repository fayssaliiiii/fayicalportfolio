import { motion } from "framer-motion";
import { styles } from "../styles";
import React, { useState, useEffect } from 'react';
import { fadeIn } from '../variants';

const Hero = () => {
  const images = ["/nice.jpg", "/fer.jpg", "/okkk.jpg"];
  images.forEach((image) => {
    const img = new Image();
    img.src = image;
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
        <div className='hero-image-container xl:flex xl:max-w-none object-cover absolute inset-0'>
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`IPTV Image ${index + 1}`}
            className='w-full h-screen object-cover absolute top-0 left-0'
            style={{
              opacity: index === currentImageIndex ? 0.1 : 0,
              zIndex: index === currentImageIndex ? 1 : 0,
            }}
            variants={fadeIn('down', index + 1.5)}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <motion.h1 variants={fadeIn('down', 3)} initial="hidden" animate="show" exit="hidden" className={`${styles.heroHeadText} text-white`}>
            HI, AM<span className='text-[#915EFF]'> FAYICAL</span>
          </motion.h1>
          <motion.p variants={fadeIn('down', 4)} initial="hidden" animate="show" exit="hidden" className={`${styles.heroSubText} mt-2 text-white-100 uppercase tracking-wider`}>
            an IT professional specializing in developing Chrome extensions, UIs,<br className='sm:block hidden' />
          </motion.p>
          <motion.p variants={fadeIn('down', 5)} initial="hidden" animate="show" exit="hidden" className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            I excel in creating standard Chrome extensions My programming expertise includes JavaScript, jQuery, HTML/CSS/tailwind CSS, API integration, and Vue. As a skilled web developer and Chrome extension developer, I'm dedicated to delivering high-quality solutions.
          </motion.p>
        </div>
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex flex-col items-center'>
        <a href="https://fayssaliiiii.github.io/checkoutPage/" target="_blank" rel="noopener noreferrer">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
