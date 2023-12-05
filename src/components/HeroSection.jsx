import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
const deviceImages = [
    "uiy.jpg",
    "nice.jpg",
    "bulb.png",
    "okkk.jpg",
    "project-img3.png",
    '/a.jpeg',
    "thumb1.jpg",
    "shopify.jpeg",
    '/aaa.jpeg',
    "thumb2.jpg",
    "yes.png",
    "code.png",
    "thumb3.jpg",
    "thumb4.jpg",
    '/iptv1.jpeg',
    '/aq.jpeg',
    '/ll.jpeg',
    '/c.jpeg',
    '/b.jpeg',
    '/aq.jpeg',
    '/cciptv.jpeg',
    '/ aqsdf.jpeg',
    '/cenema.jpeg',
    '/ert.jpeg',
    "azertrt.jpg",
    '/ch.jpeg',
    "aaa.jpg",
  "fer.jpg",
  "pppppppppp.jpg",
  "ta.jpg",
    '/iptv12.jpeg',
    '/iptv55.jpeg',
    '/iptv87.jpeg',
    '/yeeeeeeeee.jpeg',
    '/pptv.jpeg',
    '/real.jpeg',
    '/tttes.jpeg',
];

const additionalImages = [
"uiy.jpg",
  "nice.jpg",
  "bulb.png",
  "okkk.jpg",
  "project-img3.png",
  '/a.jpeg',
  "thumb1.jpg",
  "shopify.jpeg",
  '/aaa.jpeg',
  "thumb2.jpg",
  "yes.png",
  "code.png",
  "thumb3.jpg",
  "thumb4.jpg",
  '/iptv1.jpeg',
  '/aq.jpeg',
  '/ll.jpeg',
  '/c.jpeg',
  '/b.jpeg',
  '/aq.jpeg',
  '/cciptv.jpeg',
  '/ aqsdf.jpeg',
  '/cenema.jpeg',
  '/ert.jpeg',
  "azertrt.jpg",
  '/ch.jpeg',
  "aaa.jpg",
"fer.jpg",
"pppppppppp.jpg",
"ta.jpg",
  '/iptv12.jpeg',
  '/iptv55.jpeg',
  '/iptv87.jpeg',
  '/yeeeeeeeee.jpeg',
  '/pptv.jpeg',
  '/real.jpeg',
  '/tttes.jpeg',
//   '/t.jpeg',
//   '/sd.jpeg',
//   '/s.jpeg',
//   '/ppp.jpeg',
//   '/oplm.jpeg',
];

function ImageSlider() {
  // const { t } = useTranslation();
  const [isAnimationPaused, setAnimationPaused] = useState(false);

  const handleImageMouseOver = () => {
    setAnimationPaused(true);
  };

  const handleImageMouseOut = () => {
    setAnimationPaused(false);
  };

  return (
    <div>
      <div className="text-center" style={{ marginBottom: '20px' }}>
        <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] underline-custom text-center">
          Latest ProjecTs
          <br className='sm:block hidden' />
        </p>
      </div>

      <div className="image-slider-container">
        {/* Existing images */}
        {deviceImages.map((image, index) => (
          <img
            className='w-full h-full object-cover rounded-2xl image-slider-image'
            key={index}
            src={image}
            alt={`Device ${index + 1}`}
            onMouseOver={handleImageMouseOver}
            onMouseOut={handleImageMouseOut}
            style={{
              animationPlayState: isAnimationPaused ? 'paused' : 'running',
              outline: 'none',
              opacity: '0.5',
              zIndex: '1', 
            }}
          />
        ))}

        {/* Additional images */}
        {additionalImages.map((image, index) => (
          <img
            className='w-full h-full object-cover rounded-2xl image-slider-image'
            key={index}
            src={image}
            alt={`Additional Device ${index + 1}`}
            onMouseOver={handleImageMouseOver}
            onMouseOut={handleImageMouseOut}
            style={{
              animationPlayState: isAnimationPaused ? 'paused' : 'running',
              outline: 'none',
              opacity: '0.9',
              transform: 'scaleX(-1)', // Flip the additional images horizontally
              zIndex: '2', // Ensure additional images are above the existing images
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
