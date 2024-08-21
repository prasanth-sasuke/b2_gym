import React, { useState } from 'react'
import { FaXmark ,FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const Header = () => {

  const [isMenuOpen,setIsMenuOpen] = useState(false);

  const toggleMenu= () =>{
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    {
      link:'Home',path:'hero'
    },
    {
      link:'About',path:'about'
    },
    {
      link:'service',path:'service'
    }
    ,
    {
      link:'Team',path:'team'
    }
    ,
    {
      link:'Contact',path:'contact'
    }
  ]
  return (
   <nav className='w-full flex bg-black justify-between items-center gap-1 lg:px-16 py-4 px-6 sticky top-0 z-50'>
    <h1 className='text-white md:text-4xl text-3xl font-bold'>B2 <span className='text-red-500 italic'>FITNESS</span></h1>
    <ul className='lg:flex justify-center items-center gap-10 hidden'>
      {navItems.map(({link,path})=>(
        <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-white'
        to={path} spy={true} offset={-100} smooth={true}
        >{link}</Link>
      ))}
    </ul>

      <button className='bg-red-600 hover:bg-blue-900 text-white px-10 py-3 rounded-full font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex  hidden'>BOOK NOW</button>


      <div className='flex justify-center items-center items-center lg:hidden mt-3 ' onClick={toggleMenu}>
        {isMenuOpen ? <FaXmark className='text-white text-
        3xl cursor-pointer '/>:<FaBars className='text-white text-3xl cursor-pointer'/>}
      </div>

      <div className={`${isMenuOpen?'flex':'hidden'} w-full h-fit bg-black p-4 absolute top-[72px] left-0`} onClick={closeMenu}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {navItems.map(({link,path})=>(
              <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-white w-full text-center' to={path} spy={true} offset={-100} smooth={true} >{link}</Link>
          ))}
        </ul>
      </div>
   </nav>
  )
}

export default Header