import React, { useState } from "react";

import "../styles/carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <section>
      <h3 id="art">ILLUSTRATIONS & ART PORTFOLIO</h3>

      <div className="carousel">
        <div className="carouselContainer">
          {data.map((item, idx) => {
            return (
              <div class="image-container">
                <img
                  src={item.src}
                  alt={item.alt}
                  key={idx}
                  className={slide === idx ? "slide" : "slide slide-hidden"}
                />
                <div className="overlay">
                  <div className="text">{item.name}</div>
                  <div className="text">{item.description}</div>
                </div>
              </div>
            );
          })}

          <button className="arrow arrow-left" onClick={prevSlide}>
            &#x2770;
          </button>
          <button className="arrow arrow-right" onClick={nextSlide}>
            &#x2771;
          </button>
          <span className="indicators">
            {data.map((_, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={
                    slide === idx ? "indicator" : "indicator indicator-inactive"
                  }
                ></button>
              );
            })}
          </span>
        </div>
      </div>
    </section>
  );
};
