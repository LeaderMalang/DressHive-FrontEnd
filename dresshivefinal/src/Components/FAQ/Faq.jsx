import React from 'react';
import FaqElement from './FaqElement.jsx';

const faqs = [
  {
    question: "What is Lorem Ipsum?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    question: "Why do we use it?",
    answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    question: "How do we use it?",
    answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    question: "When do we use it?",
    answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  // Add more FAQs as needed
];

const FAQ = () => {
  return (
    <>
      <div className='mt-6 text-gray-700'>
        <div className="container mx-auto p-4 w-8/12">
          <div className="relative mb-16">
            <h1 className="text-4xl font-medium text-gray-700 relative text-center">Frequently Asked Questions</h1>
            <div className="absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 w-[8%] h-1 bg-red-600"></div>
          </div>
          {faqs.map((faq, index) => (
            <FaqElement key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
