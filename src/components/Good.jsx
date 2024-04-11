import React from 'react';
import { Link } from 'react-scroll';

const Good = () => {
  return (
    <div className="flex justify-center items-center h-[10vh] bg-cyan-50 ">
      <Link to="brands" smooth={true} duration={500} className="block">
        <button className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white font-bold py-2 px-4 rounded m-2">Brands</button>
      </Link>
      <Link to="quotes" smooth={true} duration={500} className="block">
        <button className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white font-bold py-2 px-4 rounded m-2">Quotes</button>
      </Link>
    </div>
  );
};

export default Good;
