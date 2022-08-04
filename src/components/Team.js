import React from "react";
import Img1 from "../assets/img2/Team1.jpg";
import Img2 from "../assets/img2/Team2.jpg";
import Img3 from "../assets/img2/Team3.jpg";
import Img4 from "../assets/img2/Team4.jpg";

import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

import { FiArrowUpRight } from "react-icons/fi";
const Team = () => {
  return (
    <section>
      <div className="container mx-auto mb-20">
        <div className="flex justify-between mb-16">
          <h1
            className="text-3xl font-bold"
            data-aos="fade-left"
            data-aos-offset="300"
            delay="1800"
          >
            Our Team
          </h1>
          <p
            className="hidden lg:flex"
            data-aos="fade-up"
            data-aos-offset="300"
            delay="1800"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Placeat, voluptatum?
          </p>
          <button
            className="btn"
            data-aos="fade-right"
            data-aos-offset="300"
            delay="1800"
          >
            See All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
            {/* images */}
            <div
              className="self-start relative"
              data-aos="fade-down"
              data-aos-offset="400"
            >
              <img src={Img1} alt="" className="rounded-lg" />
              <div className="absolute rounded-bl-lg rounded-br-lg items-center justify-center flex flex-col bottom-0 pl-[76px] pr-[76px] bg-[#314D81]/40 backdrop-blure max-w-[300px] min-h-[100px]">
                <h3 className="mb-2 text-lg">Esther Howard</h3>
                <div className="flex space-x-5 mb-2 text-lg">
                  <AiFillInstagram />
                  <AiFillTwitterSquare />
                  <AiFillLinkedin />
                  <AiFillFacebook />
                </div>
                <button className="flex items-center gap-2 text-sm mb-3">
                  View Profile <FiArrowUpRight className="text-medium" />
                </button>
              </div>
            </div>

            <div className="self-end relative" data-aos="fade-up">
              <img src={Img2} alt="" className="rounded-lg" />
              <div className="absolute rounded-bl-lg rounded-br-lg items-center justify-center flex flex-col bottom-0 pl-[76px] pr-[76px] pt-5 bg-[#314D81]/40 backdrop-blure max-w-[300px] min-h-[100px]">
                <h3 className="mb-2 text-lg">Jacob Jones</h3>
                <div className="flex space-x-5 mb-2 text-lg">
                  <AiFillInstagram />
                  <AiFillTwitterSquare />
                  <AiFillLinkedin />
                  <AiFillFacebook />
                </div>
                <button className="flex items-center gap-2 text-sm mb-3">
                  View Profile <FiArrowUpRight className="text-medium" />
                </button>
              </div>
            </div>

            <div
              className="self-start relative"
              data-aos="fade-down"
              data-aos-offset="400"
            >
              <img src={Img3} alt="" className="rounded-lg" />
              <div className="absolute rounded-bl-lg rounded-br-lg items-center justify-center flex flex-col bottom-0 pl-[76px] pr-[76px] pt-5 bg-[#314D81]/40 backdrop-blure max-w-[300px] min-h-[100px]">
                <h3 className="mb-2 text-lg">Guy Hawkins</h3>
                <div className="flex space-x-5 mb-2 text-lg">
                  <AiFillInstagram />
                  <AiFillTwitterSquare />
                  <AiFillLinkedin />
                  <AiFillFacebook />
                </div>
                <button className="flex items-center gap-2 text-sm mb-3">
                  View Profile <FiArrowUpRight className="text-medium" />
                </button>
              </div>
            </div>

            <div className="self-end relative" data-aos="fade-up">
              <img src={Img4} alt="" className="rounded-lg" />
              <div className="absolute rounded-bl-lg rounded-br-lg items-center justify-center flex flex-col bottom-0 pl-[76px] pr-[76px] pt-5 bg-[#314D81]/40 backdrop-blure max-w-[300px] min-h-[100px]">
                <h3 className="mb-2 text-lg">Albert Flores</h3>
                <div className="flex space-x-5 mb-2 text-lg">
                  <AiFillInstagram />
                  <AiFillTwitterSquare />
                  <AiFillLinkedin />
                  <AiFillFacebook />
                </div>
                <button className="flex items-center gap-2 text-sm mb-3">
                  View Profile <FiArrowUpRight className="text-medium" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
