import styles from "./CrewPage.module.scss";
import Title from "../../components/title/Title";
import { useEffect, useState } from "react";
import data from "../../data.json";

const CrewPage = () => {
  const [people, setPeople] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setPeople(data["crew"]);
    // console.log(people);
  }, [people]);

  return (
    <div className={styles.container}>
      <div className={styles.body_container}>
        <Title content_num="02" content_text={"MEET YOUR CREW"} />
        {people && (
          <div className={styles.div_container}>
            <div className={styles.text_container}>
              <div className={styles.crew_role}>
                {people[index].role.toUpperCase()}
              </div>
              <div className={styles.crew_name}>
                {people[index].name.toUpperCase()}
              </div>
              <div className={styles.crew_bio}>{people[index].bio}</div>
              <div className={styles.btn_container}>
                <div
                  className={index === 0 ? styles.active_btn : styles.btn}
                  onClick={() => {
                    setIndex(0);
                  }}
                ></div>
                <div
                  className={index === 1 ? styles.active_btn : styles.btn}
                  onClick={() => {
                    setIndex(1);
                  }}
                ></div>
                <div
                  className={index === 2 ? styles.active_btn : styles.btn}
                  onClick={() => {
                    setIndex(2);
                  }}
                ></div>
                <div
                  className={index === 3 ? styles.active_btn : styles.btn}
                  onClick={() => {
                    setIndex(3);
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.img_container}>
              <img
                src={`${people[index].images.webp.slice(1)}`}
                alt={people[index].name}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CrewPage;
