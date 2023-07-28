import styles from "./TechnologyPage.module.scss";
import Title from "../../components/title/Title";
import data from "../../data.json";
import { useEffect, useState } from "react";

const TechnologyPage = () => {
  const [techs, setTechs] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(data["technology"]);
    setTechs(data["technology"]);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.body_container}>
        <Title content_num="03" content_text={"SPACE LAUNCH 101"} />
        {techs && (
          <div className={styles.div_container}>
            <div className={styles.btn_container}>
              <div
                className={index === 0 ? styles.active_btn : styles.btn}
                onClick={() => {
                  setIndex(0);
                }}
              >
                1
              </div>
              <div
                className={index === 1 ? styles.active_btn : styles.btn}
                onClick={() => {
                  setIndex(1);
                }}
              >
                2
              </div>
              <div
                className={index === 2 ? styles.active_btn : styles.btn}
                onClick={() => {
                  setIndex(2);
                }}
              >
                3
              </div>
            </div>
            <div className={styles.text_container}>
              <div className={styles.mini_title}>THE TERMINOLOGY...</div>
              <div className={styles.name}>
                {techs[index].name.toUpperCase()}
              </div>
              <div className={styles.description}>
                {techs[index].description}
              </div>
            </div>
            <div className={styles.img_container}>
              <img
                src={`public/${techs[index].images.portrait.slice(1)}`}
                alt={techs[index].name}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnologyPage;
