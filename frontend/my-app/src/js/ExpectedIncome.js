import styles from "../styles/Fixed.module.css";

function ExpectedIncome() {
  return (
    <div>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.left}>Loan</div>
          <div className={styles.right}>$300.00</div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Part time</div>
          <div className={styles.right}>$250.00</div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Hakwon</div>
          <div className={styles.right}>$120.00</div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Tutor</div>
          <div className={styles.right}>$120.00</div>
        </div>
      </div>
    </div>
  );
}

export default ExpectedIncome;
