import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div>
          <h1 className='text-3xl font-bold text-[#00df9a]'>TRIBUTE PAGE</h1>
          <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
          <div className='flex justify-between w-3/4'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className='col-span-2 lg:col-span-2 flex justify-end'>
          <p className='text-sm'>&copy; Developed By: @Shraddha Sonawane</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
