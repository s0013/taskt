import React from 'react';
// import CC from './cc.png';

const Career = () => {
  return (
    <div className='w-full  py-40 px-4' id='career'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 items-center'>
        <div className='text-center md:text-left p-4'>
          <p className='text-[#00df9a] font-bold'>RATAN TATA</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Career</h1>
          <div className="max-w-4xl bg-white shadow-lg rounded-lg p-6 my-4 mx-auto relative">
          <div className="glow-border absolute inset-0 border-4 rounded-lg animate-glowing"></div>
          <div className="bg-gradient-morph-pink-red-white rounded-lg p-6 transform transition-transform hover:scale-105">
          <p className='text-sm md:text-base lg:text-lg mb-4 text-justify'>
            Ratan Tata, an iconic figure in Indian business, transformed the Tata Group during his 21-year tenure as chairman. He focused on innovation, streamlined operations, and led strategic acquisitions like Tetley, Jaguar Land Rover, and Corus, making Tata a global business with a majority of sales from brands. He is also known for conceptualizing the Tata Nano, a car affordable to the average Indian consumer, and for his investments in startups like Snapdeal, Teabox, and CashKaro.com. His leadership saw tremendous growth in revenues and profits, with Tata Motors rolling out electric vehicles and Tata Group expanding internationally. Despite controversies over his succession, Tata's legacy remains one of pioneering vision and transformative leadership.
          </p>
          <p className='text-sm md:text-base lg:text-lg mb-4 text-justify'>
            Beyond business, Ratan Tata is known for his philanthropy and social initiatives. He has donated a significant portion of his wealth to charitable causes, focusing on education, healthcare, and rural development. His vision extends beyond business success, aiming to create a positive impact on society and the environment. Ratan Tata's legacy is one of leadership, innovation, and social responsibility, inspiring generations of entrepreneurs and business leaders in India and around the world.
          </p>
        </div>
        </div>
        </div>
        <img className='w-48 md:w-[300px] lg:w-[400px] mx-auto my-4 img-zoom-out' src={'https://www.dice.com/binaries/medium/content/gallery/dice/insights/2019/06/shutterstock_714589963.jpg'} alt='Ratan Tata' />

   
      </div>
    </div>
  );
};

export default Career;
