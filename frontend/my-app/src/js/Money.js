import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

import ExpectedIncome from "./ExpectedIncome";

function Money() {
  const [balance, setBalance] = useState(0);
  const userEmail = localStorage.getItem("email");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/${userEmail}`, {
        method: "GET",
      });

      const json = await response.json();
      console.log(json[0]);

      setBalance(json[0].currentBalance.$numberDecimal);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.table}>blah blah</div>
        </div>
        <div className={styles.right}>
          <div>
            <label className={styles.title}>Current Balance</label>
            <div className={styles.balanceText}>${balance}</div>
          </div>
          <div>
            <label className={styles.title}>Expected Income</label>
            <div>
              <ExpectedIncome />
            </div>
          </div>
          <div>
            <label className={styles.title}>Fixed Expenses</label>
          </div>
          <div>
            <label className={styles.title}>Largest Spending</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Money;
