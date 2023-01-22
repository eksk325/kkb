import React, { useState } from "react";
import styles from "../styles/Create.module.css";
import piggy from "../images/piggy.png";

function Create() {
  const backText = "<  go back to login page";
  return (
    <div className={styles.container}>
      <div className={styles.createBox}>
        <div>
          <span>Create a new account</span>

          <form className={styles.createForm}>
            <input
              type="text"
              placeholder="Name"
              id="newUserName"
              spellCheck="false"
              required
            ></input>
            <input
              type="text"
              placeholder="Email"
              id="newUserEmail"
              spellCheck="false"
              required
            ></input>
            <input
              type="password"
              placeholder="Password"
              id="newUserPassword"
              required
            ></input>
            <button className={styles.submitBtn}>Next</button>
          </form>
        </div>
        <div>
          <img src={piggy} alt="piggy" className={styles.piggy}></img>
        </div>
      </div>
    </div>
  );
}

export default Create;
