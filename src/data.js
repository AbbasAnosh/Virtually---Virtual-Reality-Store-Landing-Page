import Avatar1 from "../src/assets/img2/avt1.png";
import Avatar2 from "../src/assets/img2/avt2.png";
import Avatar3 from "../src/assets/img2/avt3.png";
import TestimonialImg from "../src/assets/img2/TestimonialImage.jpg";

export const testimonial = {
  title: "What people are saying about us",
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1 />,
      name: "Amelia Charlotte",
      occupation: "Enterprise Architect",
      message:
        "“There are as many applications for VR as you can think of, it’s restricted by your imagination.”",
    },
    {
      avatar: <Avatar2 />,
      name: "	Emma Sophia",
      occupation: "Data Scientist",
      message:
        "“VR is a way to escape the real world into something more fantastic. It has the potential to be the most social technology of all time .”",
    },
    {
      avatar: <Avatar3 />,
      name: "	Michael Ryan",
      occupation: "Eevops Engineer",
      message:
        "“Life is not a problem to be solved, but a reality to be experienced .”",
    },
  ],
};
