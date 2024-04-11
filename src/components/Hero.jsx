import React, { useState } from 'react';
import legend from '../components/legend.png';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  const [quote] = useState("I don't believe in taking right decisions. I take decisions and then make them right - Ratan Tata");

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-25 lg:py-15" id='hero'>
      <div className="lg:w-1/2 p-4 text-center">
        <div className="mb-2">
          <h1 className="text-2xl lg:text-4xl font-bold">
            A Legend to remember
          </h1>
        </div>
        <div>
          <p className="text-sm lg:text-base mb-4">Mr. RATAN TATA</p>
        </div>
        <p className="text-sm lg:text-base mb-4">
          {quote}
        </p>
        <ScrollLink
               to="main"
                 spy={true}
                 smooth={true}
                 offset={-70} // Adjust the offset as needed
                 duration={500}
                 className="bg-black text-white py-2 px-4 rounded hover:bg-gray-500 transition duration-300"
                  >
                    Quick Intro
                  </ScrollLink>
      </div>
      <div className="lg:w-1/2 p-4">
        <img
          src={legend}
          alt="Legend"
          className="w-full rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
