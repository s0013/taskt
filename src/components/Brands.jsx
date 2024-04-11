import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Brands = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Change slide every 2 seconds
    };

    return (
        <div className='w-full py-44 px-4 items-center' id='brands'>
            <div className='max-w-[1240px] mx-auto items-center'>
                <div className='text-center md:text-left p-4'>
                    <p className='text-[#00df9a] font-bold text-center'>RATAN TATA</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>BRANDS BY TATA</h1>
                    <Slider {...settings}>
                        {/* <div>
                            <img
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/TATA-CONSUMER-PRODUCTS_BLUE_LOGO_Feb_13.png/800px-TATA-CONSUMER-PRODUCTS_BLUE_LOGO_Feb_13.pnghttps://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tata_Chemicals_Logo.svg/2560px-Tata_Chemicals_Logo.svg.pnghttps://toppng.com/uploads/preview/tata-chemicals-vector-logo-11574259618jj00vgmkdw.png'
                                alt='Brand 1'
                                className='object-cover h-[300px] sm:h-[400px] lg:h-[500px] w-full'// Set height and width here
                            />
                        </div> */}
                        <div>
                            <img
                                src='https://1000logos.net/wp-content/uploads/2023/08/JLR-Logo-2008.png'
                                alt='Brand 2'
                                className='object-cover h-[300px] sm:h-[300px]  lg:h-[500px] w-full' 
                            />
                        </div>
                        <div>
                            <img
                                src='https://car-logos.b-cdn.net/wp-content/uploads/2023/04/tata-logo-2003-present-scaled.webp'
                                alt='Brand 3'
                                className='object-cover h-[300px] sm:h-[400px] lg:h-[500px] w-full'
                            />
                        </div>
                        
                        <div>
                            <img
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png'
                                alt='Brand 4'
                                className='object-cover h-[300px] sm:h-[400px] lg:h-[500px] w-full'
                            />
                        </div>
                        {/* <div>
                            <img
                                src='https://www.nicepng.com/png/detail/194-1943794_titan-logo-titan-watch-logo-png.png'
                                alt='Brand 5'
                                className='object-cover h-[300px] sm:h-[400px] lg:h-[500px] w-full'
                            />
                        </div> */}
                        {/* Add more <div> elements for additional images */}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Brands;
