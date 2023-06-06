import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CustomableCarousel = () => (
  <Carousel
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    swipeable={true}
    autoPlay={true}
    infiniteLoop={true}
  >
    <div
      style={{
        height: "120px",
        lineHeight: "120px",
        textAlign: "center",
        background: "#f0f0f0",
      }}
    >
      <h3>1</h3>
    </div>
    <div
      style={{
        height: "120px",
        lineHeight: "120px",
        textAlign: "center",
        background: "#f0f0f0",
      }}
    >
      <h3>2</h3>
    </div>
    <div
      style={{
        height: "120px",
        lineHeight: "120px",
        textAlign: "center",
        background: "#f0f0f0",
      }}
    >
      <h3>3</h3>
    </div>
  </Carousel>
);

export default CustomableCarousel;
