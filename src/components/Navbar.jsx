import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div  className={`flex justify-between items-center h-24 text-white ${nav ? 'bg-black bg-opacity-75' : 'bg-black bg-opacity-50'}  w-full top-0 z-0`}>
      <h1 className='w-full text-3xl font-bold text-white mx-5 animate-slide-in-left '>TRIBUTE SITE</h1>
      <ul className='hidden md:flex mr-5'>
        <li className="hover:text-gray-300 cursor-pointer p-4"><Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
        <li className="hover:text-gray-300 cursor-pointer p-4"><Link to="main" spy={true} smooth={true} offset={50} duration={500}>Intro</Link></li>
        <li className="hover:text-gray-300 cursor-pointer p-4"><Link to="career" spy={true} smooth={true} offset={50} duration={500}>Career</Link></li>
        <li className="hover:text-gray-300 cursor-pointer p-4"><Link to="honours" spy={true} smooth={true} offset={50} duration={500}>Honours</Link></li>
        <li className="hover:text-gray-300 cursor-pointer p-4"><Link to="awards" spy={true} smooth={true} offset={50} duration={500}>Awards</Link></li>
        <li className="hover:text-gray-300 cursor-pointer p-4"><Link to="legacy" spy={true} smooth={true} offset={50} duration={500}>Legacy</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] text-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-black m-4'>TRIBUTE SITE</h1>
        <li className='p-4 border-b border-gray-600'><Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to="main" spy={true} smooth={true} offset={50} duration={500}>Intro</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to="career" spy={true} smooth={true} offset={50} duration={500}>Career</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to="honours" spy={true} smooth={true} offset={50} duration={500}>Honours</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to="legacy" spy={true} smooth={true} offset={50} duration={500}>Legacy</Link></li>
        {nav && <li onClick={handleNav} className='p-4'><AiOutlineClose size={20} /></li>}
      </ul>
    </div>
  );
};

export default Navbar;
