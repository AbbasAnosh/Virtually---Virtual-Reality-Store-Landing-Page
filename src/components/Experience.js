import React from "react";

import Img1 from "../assets/img2/exp-1.jpg";
import Img2 from "../assets/img2/exp-2.jpg";

import { BiGame } from "react-icons/bi";
import { RiGamepadLine } from "react-icons/ri";

const Experience = () => {
  return (
    <section className="mb-12 lg:mb-24 md:mt-24">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row">
          <div className="flex-1 flex space-x-6 items-center lg:space-x-12">
            {/* images */}
            <div
              className="self-start relative"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <img src={Img1} alt="" className="rounded-lg" />
              <div className="absolute bottom-0 p-2 bg-white/20 backdrop-blure rounded-b-lg lg:max-w-[300px] lg:min-h-[100px]">
                <BiGame className="text-4xl mb-4" />
                <h3 className="mb-2">Premium Quality</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, architecto! Voluptatem, tempore!
                </p>
              </div>
            </div>
            <div
              className="self-end relative"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img src={Img2} alt="" className="rounded-lg" />
              <div className="absolute bottom-0 p-2 bg-white/20 backdrop-blure rounded-b-lg lg:max-w-[300px] lg:min-h-[100px]">
                <RiGamepadLine className="text-4xl mb-4" />
                <h3 className="mb-2">Premium Quality</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, architecto! Voluptatem, tempore!
                </p>
              </div>
            </div>
          </div>
          {/* text */}
          <div
            className="flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h2 className="text-3xl font-bold mb-6">
              The Advantages of <br /> Our VR That We <br /> Offer So Far
            </h2>
            <p className="font-secondary mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              illum minus asperiores aliquid dolore deserunt maiores ipsa iure.
              Hic, nam!
            </p>
            <button className="btn">Get it now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
