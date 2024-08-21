import React from 'react';
import { FaCopyright } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <section className='bg-black w-full text-white p-3 flex justify-center items-center gap-4'>
        <FaCopyright className='size-6 text-white' />
        <h1 className='text-white text-center font-semibold text-lg'>Copyright 2024, SK,All Rights Reserved</h1>
      </section>

      <div className='bg-red-500 text-black p-3 rounded-full hover:gb-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
        <FaArrowUp className='w-[35px] h-[35px]' />
        </Link>
      </div>
    </>
  )
}

export default Footer