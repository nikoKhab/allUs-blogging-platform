"use client"
import { useRef, useState } from "react";
import Styles from "./page.module.css";
import Button  from "../components/googleButton/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase/init";
import { redirect } from "next/dist/server/api-utils";
import { provider } from '@/app/firebase/init'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";



const Page = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  
  const [userSignUpForm, setUserSignUpForm] = useState({
    userEmail: "",
    userPassword: ""
  });

  const createUser = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      setUserSignUpForm({
        userEmail: email,
        userPassword: password,
      });

      //firebase function
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("it did work bro");
          console.log(user);
          redirect('/')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage, error);
          console.log("BRUH");
        });
    } else {
      console.log("Please fill out both fields");
    }
  };

  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  auth.useDeviceLanguage()

  const authenticateUserWithGoogle = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user, 'yes, yes, yes, aooohoooo')
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
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
              ref={emailRef}
            />
            <input
              type="text"
              name="password"
              placeholder="enter your password"
              className={Styles.input}
              ref={passwordRef}
            />
          </form>
          <button onClick={createUser}>submit</button>

          <span onClick={authenticateUserWithGoogle}><Button /></span>
        </div>
      </center>
    </>
  );
};

export default Page;

