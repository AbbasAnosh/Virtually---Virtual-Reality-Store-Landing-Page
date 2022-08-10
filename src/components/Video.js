import React, { useState } from "react";

// import modal video
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";

// import icons
import { BsPlayCircleFill } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#534686]/30 lg:mr-32 py-6 lg:rounded-tr-3xl lg:rounded-br-3xl">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between">
          <div
            className="flex -space-x-20 md:mb-6 mb-7"
            data-aos="fade-right"
            data-aos-offset="350"
          >
            <div className="z-10">
              <h1 className="text-3xl text-black bg-[#FFFFFF] w-40 h-40 rounded-full pt-14">
                85K +
              </h1>
            </div>
            <div className="bg-[#5CF3E1] w-40 h-40 rounded-full"></div>
          </div>

          <div className="flex items-center flex-col  md:mb-7 mb-7">
            <div className="mb-6">
              <h5
                className="text-xl text-center font-semibold lg:mb-3"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                The first million words are the hardest
              </h5>
            </div>

            <div>
              <button
                className="flex btn flex-row items-center gap-2"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Subscribe Now <BsArrowUpRight />
              </button>
            </div>
          </div>
          {/* modal video */}
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="i4Zt3JZejbg"
            onClose={() => setIsOpen(false)}
          />
          {/* video */}
          <div
            className="bg-videoBg bg-no-repeat rounded-3xl bg-cover w-[270px] h-[180px] flex items-center justify-center"
            data-aos="fade-left"
            data-aos-offset="350"
          >
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
              <BsPlayCircleFill className="text-4xl text-white/80 hover:text-white hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
