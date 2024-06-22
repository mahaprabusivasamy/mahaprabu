import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import imgh0 from "../../assets/imgh0.jpg"
import imgh1 from "../../assets/imgh1.jpg"
import imgh2 from "../../assets/imgh2.jpg"

const images = [
  {
    src: imgh0,
    description: 'This is the first image'
  },
  {
    src: imgh1,
    description: 'This is the second image'
  },
  {
    src: imgh2,
    description: 'This is the third image'
  }
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image.src} alt={`Slide ${index + 1}`} />
          <div className="description-box">
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageSlider;
