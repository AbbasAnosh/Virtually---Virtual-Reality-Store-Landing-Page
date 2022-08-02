import React from "react";

const Works = () => {
  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl font-bold text-center mb-7">How It Works</h2>
        </div>

        <div className="grid lg:gap-7 md:gap-6 gap-y-4 lg:grid-cols-3 md:grid-cols-2">
          <div
            className="max-w-[360px] bg-[#605978] p-6 pt-10 pb-10 rounded-lg"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-delay="1600"
          >
            <h2 className="text-3xl mb-6">01</h2>
            <h3 className="text-xl mb-6">Register</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              doloremque nulla exercitationem ad dolorem minus!
            </p>
          </div>

          <div
            className="max-w-[360px] bg-[#605978] p-6 pt-10 pb-10 rounded-lg"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-delay="1800"
          >
            <h2 className="text-3xl mb-6">02</h2>
            <h3 className="text-xl mb-6">Choose Device</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              doloremque nulla exercitationem ad dolorem minus!
            </p>
          </div>

          <div
            className="max-w-[360px] bg-[#605978] p-6 pt-10 pb-10 rounded-lg"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-delay="1900"
          >
            <h2 className="text-3xl mb-6">03</h2>
            <h3 className="text-xl mb-6">Checkout</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              doloremque nulla exercitationem ad dolorem minus!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
