import styles from "./TechnologyPage.module.scss";
import Title from "../../components/title/Title";

const TechnologyPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body_container}>
        <Title content_num="03" content_text={"SPACE LAUNCH 101"} />
        <div className={styles.div_container}></div>
      </div>
    </div>
  );
};

export default TechnologyPage;
