import React from "react";

// import testimonials data
import { testimonialsData } from "../data";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      className="mySwiper"
    >
      {testimonialsData.map((slide, index) => {
        // destructure slide
        const { image, message, name, web } = slide;
        return (
          // slide
          <SwiperSlide
            key={index}
            className="bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[60px] flex items-start gap-x-[30px] shadow-xl"
          >
            {/* avatar image */}
            <img src={image} alt="" />
            {/* text */}
            <div>
              <div className="text-lg text-primary font-bold">{name}</div>
              <div className="mb-4 font-semibold text-accent-primary">
                {web}
              </div>
              <p className="max-w-[640px]">{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
