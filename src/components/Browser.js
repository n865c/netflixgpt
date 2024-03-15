import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
const Browser = () => {
    const user = useSelector((store) => store.user);
    const handleuser = () => {
        
        signOut(auth).then(() => {
        console.log(auth.currentUser);  
           
        }).catch((error) => {
            alert("unable to  sign out  ");
        });
    }
    return (
  <>
           {user&& 
           
           <div className='absolute right-28 z-40'>
                <div className='mt-8 flex gap-5'>
                <div className='bg-white font-bold p-2 w-10 text-center rounded-full'>{user.photoURL}</div>
                <button className='bg-red-600 rounded-md p-2 text-white'onClick={handleuser}>Sign Out</button>
                </div>
            </div>}
            <MainContainer/>
            <SecondContainer/>
            
        </>
  )
}

export default Browser
