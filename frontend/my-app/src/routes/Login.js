import React from "react";
import logo from "../images/logo.png";
import styles from "../styles/Login.module.css";

function Login() {
  const welcomeText = "Log in";
  const errorMessage = " ";
  return (
    <div className={styles.container}>
      <span>{welcomeText}</span>
      <label className={styles.errorMessage}>{errorMessage}</label>
      <form className={styles.loginForm}>
        <input
          type="text"
          placeholder="Email"
          name="userEmail"
          spellCheck="false"
          required
        ></input>
        <input
          type="password"
          placeholder="Password"
          name="userPassword"
          required
        ></input>
        <button className={styles.continueBtn}>Continue</button>
        <button className={styles.createBtn}>Create an account</button>
      </form>
    </div>
  );
}

export default Login;
