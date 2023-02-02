import React from "react";
import styles from "../styles/Fixed.module.css";

function FixedExpenses() {
  return (
    <div>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.left}>Rent</div>
          <div className={styles.right}>$325.00</div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Elec / Wifi</div>
          <div className={styles.right}>$20.00</div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Water</div>
          <div className={styles.right}>$15.00</div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Food</div>
          <div className={styles.right}>$100.00</div>
        </div>
      </div>
    </div>
  );
}

export default FixedExpenses;
