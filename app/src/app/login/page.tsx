'use client'

import React, { useState } from 'react'
import Styles from './page.module.css'
import Button from '../components/googleButton/Button'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase/init'
// import router from 'next/router'
import { redirect } from 'next/navigation'

const page = () => {

  const [error, setError] = useState('');

  const logInWithGoogle = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // The signed-in user info.
    const user = result.user;
    console.log(user, 'yes, yes, yes, aooohoooo')
    // router.push('/')
    redirect('/')
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    setError(errorMessage)
    console.log(error, "bruh")
    // ...
  });
  }


  return (
   <>
      <h1 className={Styles.title}>Sign up</h1>
      <center>
        <div className={Styles.mainCont}>
          <form className={Styles.form}>
            <input
              type="text"
              name="email"
              placeholder="enter your email"
              className={Styles.input}
                        />
            <input
              type="text"
              name="password"
              placeholder="enter your password"
              className={Styles.input}
              
            />
          </form>
          <button >submit</button>
          <span onClick={logInWithGoogle}><Button></Button></span>
        </div>
        <p>{error}</p>
      </center>
   
   </>
  )
}

export default page