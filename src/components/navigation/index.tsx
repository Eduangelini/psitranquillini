'use client'

import React from 'react'
import LogoIcon from '../Icons/LogoIcon'

const NavBar = () => {
  return (
    <nav className='relative flex justify-around py-6'>
      <LogoIcon />
      <div className='flex items-center gap-10 max-md:hidden'>
        <ul className='flex gap-10 cursor-pointer'>
          <li className='hover:text-blue-700 font-medium text-base'>Home</li>
          <li className='hover:text-blue-700 font-medium text-base'>Livros</li>
          <li className='hover:text-blue-700 font-medium text-base'>Blog</li>
        </ul>
        <button className='border-none bg-blue-500 text-white p-2 border-black rounded-md font-medium hover:bg-blue-700'>
          Agendar uma consulta
        </button>
      </div>
    </nav>
  )
}

export default NavBar