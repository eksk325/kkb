import React, { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const welcomeText = "Log in";
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (localStorage.getItem("token") === token) {
      navigate("/home");
    }
  }, []);

  // LOGIN METHOD
  const login = async (e) => {
    e.preventDefault();

    const loginData = {
      email: document.getElementById("userEmail").value,
      password: document.getElementById("userPassword").value,
    };

    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    const json = await response.json();

    if (!response.ok) {
      console.log(json.msg);
      setErrorMessage(json.msg);
    } else {
      console.log(json.msg);
      localStorage.setItem("token", json.token);
      navigate("/home");
    }
  };

  // CREATE ACCOUNT METHOD
  const createAccount = () => {
    navigate("/create-account");
  };

  return (
    <div className={styles.container}>
      <span>{welcomeText}</span>
      <label className={styles.errorMessage}>{errorMessage}</label>
      <form className={styles.loginForm}>
        <input
          type="text"
          placeholder="Email"
          id="userEmail"
          spellCheck="false"
          required
        ></input>
        <input
          type="password"
          placeholder="Password"
          id="userPassword"
          required
        ></input>
        <button className={styles.continueBtn} onClick={login} type="submit">
          Continue
        </button>
      </form>
      <button className={styles.createBtn} onClick={createAccount}>
        Create an account
      </button>
    </div>
  );
}

export default Login;
