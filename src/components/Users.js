import React from "react";
import Avatar1 from "../assets/img2/avt1.png";
import Avatar2 from "../assets/img2/avt2.png";
import Avatar3 from "../assets/img2/avt3.png";
import Avatar4 from "../assets/img2/avt4.png";

import { BsFillCircleFill } from "react-icons/bs";

const Users = () => {
  return (
    <div className="flex flex-col justify-center items-center space-x-5 space-y-7">
      <div className="flex -space-x-2 ">
        <div>
          <img className="w-6 h-6 rounded-full" src={Avatar1} alt="" />
        </div>
        <div>
          <img className="w-6 h-6 rounded-full" src={Avatar2} alt="" />
        </div>
        <div>
          <img className="w-6 h-6 rounded-full" src={Avatar3} alt="" />
        </div>
        <div>
          <img className="w-6 h-6 rounded-full" src={Avatar4} alt="" />
        </div>
      </div>
      <div className="flex items-center space-x-2 font-secondary font-sm">
        <BsFillCircleFill className="text-xs text-green-500 animate-pulse" />
        <div>12k+ Reviews</div>
      </div>
    </div>
  );
};

export default Users;
