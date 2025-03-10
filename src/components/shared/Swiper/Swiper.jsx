import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./swiper.scss";

const CustomSwiper = ({ slides, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous slide
  // const prevSlide = () =>
  // {
  //     setCurrentIndex((prevIndex) =>
  //         prevIndex === 0 ? slides.length - 1 : prevIndex - 1
  //     );
  // };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Auto slide functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex, autoSlideInterval]);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`swiper-slide ${index === currentIndex ? "active" : ""}`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Pagination (dots) */}
      <div className="swiper-pagination">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`swiper-pagination-bullet ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)} // Navigate to specific slide
          ></span>
        ))}
      </div>
    </div>
  );
};

CustomSwiper.propTypes = {
  slides: PropTypes.array.isRequired,
  autoSlideInterval: PropTypes.number,
};

export default CustomSwiper;
