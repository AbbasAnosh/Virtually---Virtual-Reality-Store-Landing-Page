import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const Question = () => {
  const [arrow, setArrow] = useState(false);

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="lg:flex lg:space-x-10 ">
          <div data-aos="fade-up" data-aos-offset="300" data-aos-delay="1800">
            <h1 className="text-3xl font-bold mb-10">
              Frequently Asked Question
            </h1>
            <button className="btn mb-6">Ask More</button>
          </div>

          <div data-aos="fade-up" data-aos-offset="300" data-aos-delay="2000">
            <div className="border-b mb-6">
              <h3 className="text-xl flex items-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <MdOutlineKeyboardArrowUp className="text-2xl cursor-pointer" />
              </h3>

              <p className="text-[#7C7C7C] mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur repudiandae accusamus aut voluptatibus expedita eius
                dolore iure optio animi dicta?
              </p>
            </div>
            <div className="border-b mb-6">
              <h3 className="text-xl flex items-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <MdOutlineKeyboardArrowUp className="text-2xl cursor-pointer" />
              </h3>

              <p className="text-[#7C7C7C] mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur repudiandae accusamus aut voluptatibus expedita eius
                dolore iure optio animi dicta?
              </p>
            </div>
            <div className="border-b mb-6">
              <h3 className="text-xl flex items-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <MdOutlineKeyboardArrowUp className="text-2xl cursor-pointer" />
              </h3>

              <p className="text-[#7C7C7C] mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur repudiandae accusamus aut voluptatibus expedita eius
                dolore iure optio animi dicta?
              </p>
            </div>
            <div className="border-b">
              <h3 className="text-xl flex items-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <MdOutlineKeyboardArrowUp className="text-2xl cursor-pointer" />
              </h3>

              <p className="text-[#7C7C7C] mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur repudiandae accusamus aut voluptatibus expedita eius
                dolore iure optio animi dicta?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
