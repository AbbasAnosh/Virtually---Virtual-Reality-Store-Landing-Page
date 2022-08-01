import React from "react";

const Works = () => {
  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl font-bold text-center mb-7">How It Works</h2>
        </div>

        <div className="grid gap-y-4 lg:grid-cols-3 md:grid-cols-2">
          <div className="">
            <h2 className="">01</h2>
            <h3>Register</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              doloremque nulla exercitationem ad dolorem minus!
            </p>
          </div>

          <div>
            <h2>02</h2>
            <h3>Choose Device</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              doloremque nulla exercitationem ad dolorem minus!
            </p>
          </div>

          <div>
            <h2>03</h2>
            <h3>Checkout</h3>
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
