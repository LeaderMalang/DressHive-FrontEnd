import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const FaqElement = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-2 border-gray-700 p-4 my-2">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{question}</h2>
        <button onClick={toggleOpen} className="text-gray-700 focus:outline-none">
          {isOpen ? (
            <IoIosArrowUp size={20} style={{ fill: 'text-gray-700' }} />
          ) : (
            <IoIosArrowDown size={20} style={{ fill: 'text-gray-700' }} />
          )}
        </button>
      </div>
      {isOpen && <p className="mt-2 text-left">{answer}</p>}
    </div>
  );
};

export default FaqElement;
