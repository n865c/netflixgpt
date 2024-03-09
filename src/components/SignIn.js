import React, {useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { emailch, passwordch } from '../utils/validation'
import { useDispatch, useSelector } from 'react-redux'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser } from '../utils/userSlice'
const SignIn = () => {
    const dispath = useDispatch();
    const navigate = useNavigate();
    const check = useSelector((store) => store.signIncheck.checkSignIn);
    let emailcheck = useSelector((store) => store.signIncheck.email);
    if (check === false)
        emailcheck = "";
    
    const [email, setEmail] = useState(emailcheck);
    
    
    const name = useRef("");
    const [error, setError] = useState("");
    const [showpass, setShow] = useState(false);
    const [errorpass, setErrorpass] = useState("");
    const [isSignUp, setSignUp] = useState(check);
    const password = useRef("");
    const emailchecker = () => {
        const er = emailch(email);
        const pas = passwordch(password.current.value);
        setError(er);
        setErrorpass(pas);
        console.log(er);
        console.log(errorpass)
        if (er || pas)
            return;
        if (isSignUp)
        {
            createUserWithEmailAndPassword(auth, email, password.current.value)
                .then((userCredential) => {
                    
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: name.current.value[0].toUpperCase(),
                    }).then(() => {
                        const { uid, email, photoURL, displayName } = auth.currentUser;
                        dispath(addUser({ uid: uid, email: email, photoURL: photoURL, displayName: displayName }))
                        navigate('/browser')
                    }).catch((error) => {
                        setErrorpass(error.message);
                    });
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorpass(errorCode + " " + errorMessage);
                });
        }
        else
        {
        
            signInWithEmailAndPassword(auth, email, password.current.value)
                .then((userCredential) => {
                    
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        const { uid, email, photoURL, displayName } = auth.currentUser;
                        dispath(addUser({ uid: uid, email: email, photoURL: photoURL, displayName: displayName }));
                        navigate('/browser')
                    }).catch((error) => {
                        setErrorpass(error.message);
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorpass(errorCode + " " + errorMessage);
                });
            
        }
        


    }
    return (
        <div className=''>
            <Header />

            <div className='absolute w-[500px] h-[700px] bg-black bg-opacity-75 top-32 left-1/3 p-20 rounded-lg'>
                <div className='text-3xl font-bold text-white ml-3'>
                    { isSignUp?"Sign Up":"Sign In" }
                </div>

                <div className='flex-col justify-center items-center text-white'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        emailchecker();
                        
                    }}>
                        {isSignUp ? <input type="name" className='mt-14 w-[350px] rounded-md bg-black bg-opacity-60 border border-white p-4 ' placeholder='Name' ref={name}  />:""}
                        <input type="email" className='mt-4 w-[350px] rounded-md bg-black bg-opacity-60 border border-white p-4 ' placeholder='Email address' value={email} onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                         />

                        <div className='text-red-700'>{error}</div>


                        <div className='mt-6 w-[350px] rounded-md bg-black bg-opacity-60 border border-white flex justify-between ' onFocus={() => {
                            
                        }}>
                            
                            <input type={ showpass?("text"): ("password")} className='border-none bg-black bg-opacity-20 p-4 focus:outline-none focus:border-none w-[300px]' placeholder='Password' ref={password}


                            />
                            <div className="p-4 cursor-pointer" onClick={() => {
                                setShow(!showpass);
                            }}>{showpass ? "hide" : "show"}</div>
                        </div>


                        <div className='text-red-700'>{errorpass}</div>
                        <button type="submit" className='bg-red-700 mt-4 p-2 w-[350px] rounded-md font-bold'
                        >{isSignUp?"Sign Up":"Sign In" }</button>
                    </form>
                    {isSignUp ? "" : <div className='flex justify-center items-center mt-4'>
                        Forget password?
                    </div>}
                    {isSignUp ? <div className='mt-5 text-center'>Already register?<Link to="/login"> <span onClick={() => {
                        setSignUp(false);
                    }}>Sign In Now</span></Link></div> : <div> <input type="checkbox" className='mt-10 w-4 h-4 mr-4 focus:accent-white' /><span className='text-lg'>Remember me</span>
                        <div className='mt-3'>New to Netflix?<Link to="/"><span className='hover:cursor-pointer' onClick={() => {
                            setSignUp(true);
                        }} > Sign up now</span></Link></div>
                    </div>}
                </div>

            </div>
            <img className='' src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="Netflix" />
        </div>
    )
}

export default SignIn
