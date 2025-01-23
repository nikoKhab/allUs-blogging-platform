import Styles from "./page.module.css";
import Button from "../components/googleButton/Button";
const Page = () => {
  return (
    <>
      <h1 className={Styles.title}>Sign up</h1>

      <center>
        <div className={Styles.mainCont}>

          <form className={Styles.form}>
            <input type="text" name="email" placeholder="enter your email" className={Styles.input}/>
            <input type="text" name="password" placeholder="enter your password" className={Styles.input}/>
            <button type="submit">submit</button>
          </form>

          <Button></Button>

        </div>
      </center>
    </>
  );
};

export default Page;
