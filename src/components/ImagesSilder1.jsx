import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
const deviceImages = [
"hbo.png",
  "git.png",
 "figma.png",
  "ok.png",
  "meta.png",
  "shopify.png",
  "starbucks.png",
  "javascript.png",
  "mongodb.png",
  "nodejs.png",
"reactjs.png",
// "PayPal_Logo_2007.png",
// "tailwind.png",
];

const additionalImages = [
  // Add your additional images here
];

function ImagesSilder1() {
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
      <div className="text-center no-underline" style={{ marginBottom: '20px' }}>
        {/* The text content goes here */}
      </div>

      <div
  className="image-slider-container"
  style={{
    display: 'flex',
    overflowX: 'auto',
    width: '100%',
    height: '45px',
    whiteSpace: 'nowrap',
    textDecoration: 'none', // Add this line to explicitly set text-decoration to none
    margin: '0',
    padding: '0',
  }}
>
  {/* Existing images */}
  {deviceImages.map((image, index) => (
    <img
      className='object-fit-cover rounded-2xl image-slider-image'
      key={index}
      src={image}
      alt={`Device ${index + 1}`}
      onMouseOver={handleImageMouseOver}
      onMouseOut={handleImageMouseOut}
      style={{
        animationPlayState: isAnimationPaused ? 'paused' : 'running',
        outline: 'none',
        opacity: '0.9',
        width: 'auto',
        height: '100%',
        marginRight: '5px',
        zIndex: '1',
      }}
    />
  ))}

  {/* Additional images */}
  {additionalImages.map((image, index) => (
    <img
      className='object-fit-cover rounded-2xl image-slider-image'
      key={index}
      src={image}
      alt={`Additional Device ${index + 1}`}
      onMouseOver={handleImageMouseOver}
      onMouseOut={handleImageMouseOut}
      style={{
        animationPlayState: isAnimationPaused ? 'paused' : 'running',
        outline: 'none',
        opacity: '0.9',
        transform: 'scaleX(-1)',
        width: 'auto',
        height: '100%',
        marginRight: '5px',
        zIndex: '2',
        overflow: 'hidden',
      }}
    />
  ))}
</div>
    </div>
  );
}

export default ImagesSilder1;
