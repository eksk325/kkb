import styles from "../styles/Home.module.css";
import Banner from "../js/banner";

function Home() {
  return (
    <div>
      <Banner />
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.table}>blah blah blah</div>
        </div>
        <div className={styles.right}>
          <div>
            Current Balance
            <div className={styles.balanceText}>$7,000.00</div>
          </div>
          <div>Monthly Summary</div>
          <div>Fixed Expenses</div>
          <div>Largest Spending</div>
          <div>Best Income</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
