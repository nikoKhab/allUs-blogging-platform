"use client"
import { useRef, useState } from "react";
import Styles from "./page.module.css";
import Button from "../components/googleButton/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase/init";

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

          <Button />
        </div>
      </center>
    </>
  );
};

export default Page;
