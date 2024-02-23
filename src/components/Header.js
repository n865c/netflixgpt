import React from 'react'
import Netflix_LOGO from '../assets/images/Netflix_Logo.png'
const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black to-transparent w-full '>
      <img className="w-44 h-20 ml-32 mt-2"src={ Netflix_LOGO} />
    </div>
  )
}

export default Header
