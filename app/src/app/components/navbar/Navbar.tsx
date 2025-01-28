'use client'
import React from 'react'
import styles from  "./Navbar.module.css"
import Link from 'next/link'

interface Props{
  loggedIn: boolean,
}

const Navbar = (props: Props) => {
  return (
    <>
    {
      props.loggedIn?
      <div id={styles.main}>
        <h1>
          <Link href={'/signup'}>sign up</Link>
          <Link href={'/login'}>login</Link>
        </h1>
      </div>
      :
      <div id={styles.main}></div>
    }
    
    </>

  )
}

export default Navbar