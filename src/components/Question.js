import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const questions = [
  {
    state: false,
    question: "Lorem ipsum, dolor sit amet consectetur adipisicing ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea a possimus porro nisi possimus porro nisi !",
    id: 1,
  },
  {
    state: false,
    question: "Lorem ipsum, dolor sit amet consectetur adipisicing ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea a possimus porro nisi possimus porro nisi !",
    id: 2,
  },
  {
    state: false,
    question: "Lorem ipsum, dolor sit amet consectetur adipisicing ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea a possimus porro nisi possimus porro nisi !",
    id: 3,
  },
  {
    state: false,
    question: "Lorem ipsum, dolor sit amet consectetur adipisicing ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea a possimus porro nisi possimus porro nisi !",
    id: 4,
  },
];
const Question = () => {
  const [questionsList, setQuestionsList] = useState(questions);
  const show = (id) => {
    let updatedQuestion = [];
    questionsList.map((question) => {
      if (question.id === id) {
        question.state = !question.state;
      }
      updatedQuestion.push(question);
    });
    setQuestionsList(updatedQuestion);
  };

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="lg:flex lg:space-x-20 ">
          <div data-aos="fade-up" data-aos-offset="300" data-aos-delay="1800">
            <h1 className="text-3xl font-bold mb-10">
              Frequently Asked Question
            </h1>
            <button className="btn mb-6">Ask More</button>
          </div>

          <div data-aos="fade-up" data-aos-offset="300" data-aos-delay="2000">
            {questionsList.map((question) => (
              <div className="border-b mb-6 ">
                <h3 className="text-xl flex items-center">
                  {question.question}
                </h3>

                <MdOutlineKeyboardArrowDown
                  onClick={() => show(question.id)}
                  className="text-2xl cursor-pointer lg:ml-[600px] lg:mt-[-25px] mb-6"
                />
                {question.state && (
                  <p className="text-[#7C7C7C] mb-4">{question.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
