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
            navigate('/login')
        }).catch((error) => {
            alert("unable to  sign out ");
        });
    }
    return (
  <>
            {user?<div className=''>
                <button className='bg-red-600 text-white 'onClick={handleuser}>Sign Out</button>
                <img src={ user.photoURL} />
            </div >:""}
        </>
  )
}

export default Browser
