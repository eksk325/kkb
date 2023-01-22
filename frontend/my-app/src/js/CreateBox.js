import React, { useState } from "react";
import styles from "../styles/Create.module.css";

function CreateBox() {
  return (
    <div className={styles.createBox}>
      <div className={styles.labels}>
        <label>x</label>
      </div>
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
        <button className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
}

export default CreateBox;
