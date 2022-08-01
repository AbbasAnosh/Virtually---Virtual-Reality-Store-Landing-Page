import React, { useState } from "react";

// import components
import Users from "../components/Users";

import ModalVideo from "react-modal-video";
import "../modalVideo.scss";

// import icons
import { BsPlayCircleFill } from "react-icons/bs";

// import image
// import Img from "../assets/img/banner-img.png";

import Img from "../assets/img2/VR-banner1.jpg";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div>
            <h1
              className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Explore Every <br /> Ride with VR Experience
            </h1>
            <p
              className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              doloribus inventore harum cumque blanditiis minima.
            </p>

            <div
              className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <button className="btn">Get it now</button>
              <a
                className="border-b-2 border-transparent hover:border-white transition ease-out"
                href="##"
              >
                Explore Device
              </a>
            </div>
            {/* <Users /> */}
          </div>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="NOk_M1Ib5F0"
            onClose={() => setIsOpen(false)}
          />
          <div className="relative" data-aos="fade-up" data-aos-delay="800">
            <img className="rounded-lg" src={Img} alt="" />
            <div className="absolute rounded-br-lg bottom-0 right-0 pt-28 pl-56 lg:pl-64 pb-10 pr-10 bg-white/20 backdrop-blure max-w-[500px] min-h-[30px]">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              >
                <div className="flex flex-row items-center space-x-4">
                  <BsPlayCircleFill className="text-4xl text-white/80 hover:text-white hover:scale-110 transition" />
                  <h3 className="text-base">Watch Video</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
