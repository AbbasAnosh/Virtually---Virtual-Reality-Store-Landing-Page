import React from "react";

import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className="mb-20"
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-delay="1800"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 space-y-3 space-x-3 lg:flex lg:justify-between mb-16">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-10">Virtually</h1>
            <div className="flex space-x-8 text-lg">
              <AiFillInstagram />
              <AiFillTwitterCircle />
              <AiFillYoutube />
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-6">Resources</h3>
            <div className="text-white/70 space-y-2">
              <p>About</p>
              <p>Cart</p>
              <p>Store</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-6">Our Users</h3>
            <div className="text-white/70 space-y-2">
              <p>Customers Support</p>
              <p>Guid</p>
              <p>How it Works</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-6">Company</h3>
            <div className="text-white/70 space-y-2">
              <p>Privacy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
        <div className="text-center text-white/70">2022 Virtually Inc.</div>
      </div>
    </footer>
  );
};

export default Footer;
