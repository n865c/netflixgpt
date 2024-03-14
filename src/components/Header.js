import React, { useEffect } from 'react'
import Netflix_LOGO from '../assets/images/Netflix_Logo.png'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
const Header = () => {
  const loacation=useLocation();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  console.log(loacation);
  useEffect(()=>{
    if(!user&&loacation.pathname==="/browser")
    {
          navigate("/");
    }
  },[])
  return (
   <>
   
    <div className='absolute bg-gradient-to-b from-black to-transparent w-full'>
      <img className="w-44 h-20 ml-32 mt-2 "src={ Netflix_LOGO} />
    </div>
    {user&&<div className='absolute text-white left-80 mt-8 flex gap-5 font-bold'>
      <div>Home</div>
      <div>TV shows</div>
      <div>Movies</div>
      <div>New & popular</div>
      <div>My Lists</div>
      <div>Browse my Language</div>
      
    </div>}
    </>
    
  )
}

export default Header
