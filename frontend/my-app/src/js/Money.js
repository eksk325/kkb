import styles from "../styles/Home.module.css";

import ExpectedIncome from "./ExpectedIncome";

function Money() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.table}>blah blah blah</div>
        </div>
        <div className={styles.right}>
          <div>
            Current Balance
            <div className={styles.balanceText}>$7,000.00</div>
          </div>
          <div>
            Expected Income
            <div>
              <ExpectedIncome />
            </div>
          </div>
          <div>Fixed Expenses</div>
          <div>Largest Spending</div>
        </div>
      </div>
    </div>
  );
}

export default Money;
