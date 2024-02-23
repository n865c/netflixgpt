import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BodyPart1 from './Body/BodyPart1'
import Bodypart2 from './Body/Bodypart2'
import BodyPart3 from './Body/BodyPart3'
import Bodypart4 from './Body/Bodypart4'
import Footer from './Footer'
import SignIn from './SignIn'
import { useDispatch } from 'react-redux'
import { EmailSignUp, SignUp } from '../utils/signInSlice'
import QuestionSection from './Body/QuestionSection'
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, remove } from '../utils/userSlice'
const MainBody = () => {
    const dispath = useDispatch();
    const [email, setEmail] = useState("");
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, photoURL, displayName } = user;
                dispath(addUser({ uid: uid, email: email, photoURL: photoURL, displayName: displayName }));
            } else {
                dispath(remove());
            }
        });
 
    },[])
  return (
      <div className='bg-black'>
          <div className='absolute text-white left-3/4 ml-40 mt-6'>
              <Link to="/login"><button className='bg-red-700 px-2 py-1 rounded-md w-20 ' onClick={() => {
                  dispath(SignUp(false));
              }}>Sign In</button></Link>
          </div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white bg-black bg-opacity-50 w-2/3 p-6'>
              <h1 className=' text-5xl font-extrabold'>Unlimited movies, TV shows and more</h1>
              <h1 className='text-3xl mt-5'>Watch anywhere. Cancel anytime.</h1>
              <h1 className='text-2xl mt-5'>
                  Ready to watch? Enter your email to create or restart your membership.

              </h1>
              <div className='flex justify-between mx-44 mt-4'>
                  <input type="email" className='w-96 p-3 rounded-md bg-black bg-opacity-55 border border-red-700' placeholder="email address" value={email} onChange={(e) => {
                      setEmail(e.target.value);
                      dispath(EmailSignUp(e.target.value));
                  }}  />
                  <Link to="/login">
                      <button className='p-3 text-2xl font-bold bg-red-700 rounded-md w-48' onClick={() => {
                          dispath(SignUp(true));
                      }}>Get started</button>
                  </Link>
              </div>
              
          </div>
          <div className=''>
              <img className='' src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="Netflix" />
          </div>
          <BodyPart1 />
          <Bodypart2 />
          <BodyPart3 />
          <Bodypart4 />
          <QuestionSection/>
          <Footer/>
      </div>
  )
}

export default MainBody
