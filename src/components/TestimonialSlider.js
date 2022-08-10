import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "../slider.css";

import { Autoplay, Navigation } from "swiper";

import { testimonial } from "../data";

const TestimonialSlider = () => {
  return (
    <Swiper
      className="testimonialSlider"
      navigation={true}
      autoplay={true}
      modules={[Navigation, Autoplay]}
      data-aos="fade-up"
      data-aos-delay="400"
    >
      {testimonial.persons.map((person, index) => {
        const { avatar, name, occupation, message } = person;
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col min-h-[250px]">
              <div className="flex items-center gap-x-5 mb-9">
                <img className="w-16 h-16" src={avatar.type} alt="" />
                <div>
                  <div className="text-xl font-semibold">{name}</div>
                  <div className="text-gray-500">{occupation}</div>
                </div>
              </div>

              <div className="text-lg max-w-[570px]">{message}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
