import styles from "../styles/Home.module.css";

import React from "react";
import { useState, useEffect } from "react";

function Banner() {
  const [greeting, setGreeting] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const [loading, setLoading] = useState(true);

  // Updating the greeting, time, and date every 1 second
  useEffect(() => {
    setInterval(() => {
      const currentDate = new Date();

      // Setting the clock text
      setTime(
        currentDate.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      // Finding out if it's currently morning, afternoon, or evening to assign the appropriate greeting
      const currentHour = currentDate.getHours();
      if (currentHour >= 0 && currentHour < 12) {
        setGreeting("おはよう");
      } else if (currentHour < 18) {
        setGreeting("こんにちは");
      } else {
        setGreeting("こんばんは");
      }

      // Setting the current date
      setDate(currentDate.toLocaleDateString("ko-KR"));

      // After all time components are loaded, set loading to false
      setLoading(false);
    }, 1000);
  });

  return (
    <div>
      {loading ? (
        <div style={({ background: "black" }, { height: "100vh" })}>
          <h1 className={styles.loading}>Loading...</h1>
        </div>
      ) : (
        <div className={styles.banner}>
          <div className={styles.welcome}>{greeting}</div>
          <div className={styles.clock}>{time}</div>
          <div className={styles.date}>{date}</div>
        </div>
      )}
    </div>
  );
}

export default Banner;
