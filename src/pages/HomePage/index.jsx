import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body_container}>
        <div className={styles.text_container}>
          <div className={styles.heading_five}>
            <span>SO, YOU WANT TO TRAVEL TO</span>
          </div>
          <div className={styles.heading_one}>
            <span>SPACE</span>
          </div>
          <div>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience! Explore
            </p>
          </div>
        </div>
        <div className={styles.btn_container}>
          <div className={styles.btn}>
            <span>EXPLORE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
