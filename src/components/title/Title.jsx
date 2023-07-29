import styles from "./Title.module.scss";

const Title = ({ content_num: num, content_text: txt }) => {
  return (
    <div className={num === "03" ? styles.technology_page : styles.title}>
      <span className={styles.title_number}>{num}</span> <span>{txt}</span>
    </div>
  );
};

export default Title;
