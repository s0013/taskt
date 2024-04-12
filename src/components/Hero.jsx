import React, { useState } from 'react';
import legend from '../components/legend.png';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  const [quote] = useState("I don't believe in taking right decisions. I take decisions and then make them right - Ratan Tata");

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-25 lg:mt-[100px] sm:mt-1" id='hero'>
     <div className="lg:w-1/2 p-4 text-center mt-40 lg:mt-20">
        <div className="mb-2">
          <h1 className="text-2xl lg:text-4xl font-bold animate-slide-in-left">
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
               offset={-70} 
               duration={500}
               className="bg-black text-white py-2 px-4 rounded hover:bg-gray-500 transition duration-300"
              >
                Quick Intro
              </ScrollLink>
      </div>
      <div className="lg:w-1/2 p-4 relative">
  <div className="glow-border absolute inset-0 border-4 rounded-lg animate-glowing"></div>
  <img
  src={legend}
  alt="Legend"
  className="w-full rounded-lg shadow-2xl animate-slide-in-right hover:scale-125 transition-transform duration-500"
/>


</div>

    </div>
  );
};

export default Hero;
