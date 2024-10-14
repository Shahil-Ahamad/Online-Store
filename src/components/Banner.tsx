import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow Component
const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-600 text-white w-12 h-12 rounded-full cursor-pointer z-10 flex items-center justify-center text-2xl"
      onClick={onClick}
    >
      &gt;
    </div>
  );
};

// Custom Prev Arrow Component
const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-600 text-white w-12 h-12 rounded-full cursor-pointer z-10 flex items-center justify-center text-2xl"
      onClick={onClick}
    >
      &lt;
    </div>
  );
};

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="banner-container rounded-md shadow-xl ml-4 mt-4 mb-4 mr-4" style={{ height: '450px', width: '450' }}>
      <Slider {...settings}>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/524/773/non_2x/summer-sale-extra-wide-banner-vector.jpg"
            alt="Banner 1"
            className="rounded-md w-full h-full object-fit"  style={{ height: '450px', width: '450' }}
          />
        </div>
        <div>
          <img
            src="banner.jpg"
            alt="Banner 2"
            className="rounded-md w-full  object-fit"  style={{ height: '450px', width: '450' }}
          />
        </div>
        <div>
          <img
            src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg"
            alt="Banner 3"
            className="rounded-md w-full  object-fit"  style={{ height: '450px', width: '450' }}
          />
        </div>
      </Slider>
    </div>
  );
};
