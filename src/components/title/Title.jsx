import styles from "./Title.module.scss";

const Title = ({ content_num: num, content_text: txt }) => {
  return (
    <div className={styles.title}>
      <span className={styles.title_number}>{num}</span> <span>{txt}</span>
    </div>
  );
};

export default Title;
