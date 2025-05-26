import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  const videos = [
    {
      id: 1,
      src: "/videos/nature.mp4",
    },
    {
      id: 2,
      src: "/videos/nature.mp4",
    },
    {
      id: 3,
      src: "/videos/nature.mp4",
    },
  ];

  return (
    <div className="slider-container max-w-4xl mx-auto py-10">
      <Slider {...settings}>
          {videos.map((vid)=>{
            return (
              <div key={vid.id}>
                <video
                  className="w-full h-auto rounded-md "
                  src={vid.src}
                  controls
                />
              </div>
            );
          })}
        
      </Slider>
    </div>
  );
}

export default SimpleSlider;
