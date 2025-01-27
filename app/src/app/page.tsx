"use client";

import Link from "next/link";

import { auth } from "@/app/firebase/init";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";


export default function Home() {
  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      localStorage.setItem("userUid", uid);
    } else {
      localStorage.setItem("userUid", false);
      
    }
  });
  const userUid = localStorage.getItem("userUid");

  const logUserOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("yo");
        localStorage.clear();
        document.location.reload()
      })
      .catch((error) => {
        // console.log(error)
      });
  };

  return (
    <>
      {userUid ? (
        <>
          <h1>home</h1>
          <button onClick={logUserOut}>log out</button>
        </>
      ) : <h1>please sign up, or log in</h1>}
    </>
  );
}
