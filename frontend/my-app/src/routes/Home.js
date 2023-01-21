import sunset from "../images/sunset.png";
import profile from "../images/ariel.jpg";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div>
      <div className={styles.banner}>
        <img src={sunset}></img>
        <div className={styles.profile}>
          <img src={profile}></img>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.table}>blah blah blah</div>
        </div>
        <div className={styles.right}>
          <div>CURRENT BALANCE</div>
          <div>GRAPH</div>
          <div>LARGEST SPENDING</div>
          <div>HIGHEST INCOME</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
