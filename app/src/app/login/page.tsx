import React from 'react'
import Styles from './page.module.css'

const page = () => {
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
          <span></span>
        </div>
        
      </center>
   
   </>
  )
}

export default page