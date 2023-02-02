import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import FixedExpenses from "./FixedExpenses";
import ExpectedIncome from "./ExpectedIncome";
import InfoCard from "./InfoCard";
import Records from "./Records";

function Money() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const userEmail = localStorage.getItem("email");

    const fetchData = async () => {
      const response = await fetch(`/api/${userEmail}`, {
        method: "GET",
      });

      const json = await response.json();
      //console.log(json[0]);

      setBalance(json[0].currentBalance.$numberDecimal);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.table}>
            <Records />
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <label className={styles.title}>Current Balance</label>
            <div className={styles.balanceText}>${balance}</div>
          </div>
          <div className={styles.fixed}>
            <label className={styles.title}>Expected Income</label>
            <ExpectedIncome />
            <button className={styles.addBtn}>+</button>
          </div>
          <div className={styles.fixed}>
            <label className={styles.title}>Fixed Expenses</label>
            <FixedExpenses />
            <button className={styles.addBtn}>+</button>
          </div>
          <div className={styles.infocard}>
            <label className={styles.title}>Largest Spending</label>
            <InfoCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Money;
