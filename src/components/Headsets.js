import React from "react";

import Users from "./Users";

import Headset1 from "../assets/img/headset-1.png";
import Headset2 from "../assets/img/headset-2.png";
import Headset3 from "../assets/img/headset-3.png";
import Headset4 from "../assets/img/headset-4.png";

const Headsets = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h2
            className="text-3xl mb-6 font-bold"
            data-aos="fade-down"
            data-aos-offset="300"
          >
            Various Kinds of VR <br /> Variants That We Offer
          </h2>
          <button
            className="hidden lg:btn"
            data-aos="fade-down"
            data-aos-offset="300"
          >
            See All
          </button>
        </div>
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1000"
          >
            <img src={Headset1} alt="" />
            <div className="absolute flex justify-between bottom-0 bg-white/20 backdrop-blure max-w-[400px] min-h-[150px] p-6">
              <div>
                <div className="mb-7">
                  <h3>VR Rare Edition</h3>
                </div>
                <div className="text-xl">$106.58</div>
              </div>

              <div>
                <Users />
              </div>
            </div>
          </div>
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1300"
          >
            <img src={Headset2} alt="" />
            <div className="absolute flex justify-between bottom-0 bg-white/20 backdrop-blure max-w-[400px] min-h-[150px] p-6">
              <div>
                <div className="mb-7">
                  <h3>VR Rare Edition</h3>
                </div>
                <div className="text-xl">$106.58</div>
              </div>

              <div>
                <Users />
              </div>
            </div>
          </div>

          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1600"
          >
            <img src={Headset3} alt="" />
            <div className="absolute flex justify-between bottom-0 bg-white/20 backdrop-blure max-w-[400px] min-h-[150px] p-6">
              <div>
                <div className="mb-7">
                  <h3>VR Rare Edition</h3>
                </div>
                <div className="text-xl">$106.58</div>
              </div>

              <div>
                <Users />
              </div>
            </div>
          </div>

          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1900"
          >
            <img src={Headset4} alt="" />
            <div className="absolute flex justify-between bottom-0 bg-white/20 backdrop-blure max-w-[400px] min-h-[150px] p-6">
              <div>
                <div className="mb-7">
                  <h3>VR Rare Edition</h3>
                </div>
                <div className="text-xl">$106.58</div>
              </div>

              <div>
                <Users />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
