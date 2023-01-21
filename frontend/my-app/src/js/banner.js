import sunset from "../images/sunset.png";
import profile from "../images/ariel.jpg";
import styles from "../styles/Home.module.css";

function banner() {
  return (
    <div>
      <div className={styles.banner}>
        <img src={sunset} alt="banner"></img>
        <div className={styles.profile}>
          <img src={profile} alt="profile"></img>
        </div>
        <div className={styles.welcome}>こんばんは</div>
      </div>
    </div>
  );
}

export default banner;
