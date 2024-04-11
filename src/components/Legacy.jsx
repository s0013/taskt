import React from 'react';
import LegacyImage from '../components/l1.png'; // Make sure this path is correct

const Legacy = () => {
    return (
        <div className='w-full py-44 px-4 items-center' id='legacy'>
            <div className='max-w-[1240px] mx-auto items-center'>
                <div className='text-center md:text-left p-4'>
                    <p className='text-[#00df9a] font-bold text-center'>RATAN TATA</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>Legacy</h1>
                    <p className='text-sm md:text-base lg:text-lg mb-4 text-justify'>
                        Ratan Tata's legacy is defined by his transformative leadership and visionary approach to business. During his tenure as chairman of the Tata Group, he spearheaded numerous initiatives that propelled the conglomerate into a global powerhouse. Under his stewardship, the Tata Group expanded its presence across diverse industries, including automotive, steel, telecommunications, and hospitality. Tata's commitment to innovation was evident in groundbreaking projects like the Tata Nano, the world's cheapest car at the time, which aimed to provide affordable transportation to millions of people in India. Beyond business, Tata's legacy also includes his philanthropic efforts, with significant contributions to education, healthcare, and rural development. His commitment to corporate social responsibility set a benchmark for ethical business practices in India and beyond.
                    </p>
                    <p className='text-sm md:text-base lg:text-lg mb-4 text-justify'>
                        Another aspect of Ratan Tata's legacy lies in his role as a mentor and inspiration to future generations of entrepreneurs and business leaders. His leadership style, characterized by a blend of humility, integrity, and strategic foresight, continues to inspire individuals worldwide. Tata's emphasis on responsible capitalism and sustainable business practices has had a lasting impact on the corporate world, influencing companies to prioritize social and environmental considerations alongside financial goals. His legacy serves as a testament to the power of principled leadership and serves as a guiding light for those striving to make a positive impact on society through their work.
                    </p>
                </div>
            </div>
            <img className='w-48 md:w-[300px] lg:w-[400px] mx-auto mt-[-1.75rem] mb-[0.25rem]' src={LegacyImage} alt='Ratan Tata' />

        </div>
    );
};

export default Legacy;
