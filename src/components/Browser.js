import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
const Browser = () => {
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();
    const handleuser = () => {
        
        signOut(auth).then(() => {
        console.log(auth.currentUser);  
           
        }).catch((error) => {
            alert("unable to  sign out  ");
        });
    }
    return (
  <>
            {user?<div className='flex justify-between'>
                <div></div>
                <div className='mr-32 mt-8 z-30 flex gap-10'>
                <div className='bg-neutral-950 text-white p-2 rounded-full'>{user.photoURL}</div>
                <button className='bg-red-600 rounded-md p-2 text-white'onClick={handleuser}>Sign Out</button>
                </div>
            </div >:""}
        </>
  )
}

export default Browser
