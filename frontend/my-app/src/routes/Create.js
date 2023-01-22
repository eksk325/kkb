import React, { useState } from "react";
import styles from "../styles/Create.module.css";
import piggy from "../images/piggy.png";
import { set } from "lodash";
import { useNavigate } from "react-router-dom";

function Create() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const createAccount = async (e) => {
    e.preventDefault();

    const accountData = {
      name: document.getElementById("newUserName").value,
      email: document.getElementById("newUserEmail").value,
      password: document.getElementById("newUserPassword").value,
    };

    console.log(accountData);

    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(accountData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    const json = await response.json();

    if (!response.ok) {
      console.log(json.msg);
      setErrorMessage(json.msg);
    } else {
      console.log(json.msg);
      navigate("/");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.createBox}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>Create a new account</span>
          <label
            style={{
              paddingTop: "15px",
              color: "rgb(224, 75, 75)",
              fontSize: "14px",
            }}
          >
            {errorMessage}
          </label>
          <form className={styles.createForm} onSubmit={createAccount}>
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
        <div>
          <img src={piggy} alt="piggy" className={styles.piggy}></img>
        </div>
      </div>
    </div>
  );
}

export default Create;
