import React from "react";

import TestimonialSlider from "./TestimonialSlider";

import { testimonial } from "../data";

const Testimonial = () => {
  const { image, title } = testimonial;
  return (
    <section className="section mb-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-2">
          <div className="lg:max-w-[50%]">
            <h2
              className="text-3xl font-bold mb-9"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {title}
            </h2>

            <TestimonialSlider />
          </div>

          <div className="order-1" data-aos="fade-down" data-aos-delay="400">
            <img className="rounded-lg" src={image.type} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
