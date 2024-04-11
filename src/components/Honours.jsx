import React from 'react'

const Honours = () => {
    return (
        <div className='w-full bg-white  py-32 px-4' id='honours'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 items-center'>
          <img className='w-48 md:w-[300px] lg:w-[400px] mx-auto my-4 block' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/The_President%2C_Smt._Pratibha_Devisingh_Patil_presenting_the_Padma_Vibhushan_to_Shri_Ratan_Naval_Tata_at_Civil_Investiture-II_Ceremony%2C_at_Rashtrapati_Bhavan%2C_in_New_Delhi_on_May_10%2C_2008.jpg/330px-thumbnail.jpg'} alt='Ratan Tata' />

            <div className='text-center md:text-left p-4'>

              <p className='text-[#00df9a] font-bold'>RATAN TATA</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Honours</h1>
              <p className='text-sm md:text-base lg:text-lg mb-4 text-justify'>
              Ratan Tata received the Padma Bhushan in 2000 and Padma Vibhushan in 2008, the third and second highest civilian honours awarded by the Government of India. Along with national civilian honours, Tata has also received various state civilian honours like 'Maharashtra Bhushan' in 2006 for his huge work in public administration in Maharashtra and 'Assam Baibhav' in 2021 for his exceptional contribution towards furthering cancer care in Assam.
              </p>
             
            </div>
           
    
    
          </div>
        </div>
      );
    };

export default Honours