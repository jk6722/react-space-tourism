import { useEffect, useState } from "react";
import DestinationFilter from "../../components/filter/DestinationFilter";
import styles from "./DestinationPage.module.scss";
import Title from "../../components/title/Title";
import data from "../../data.json";

const DestinationPage = () => {
  const [dests, setDests] = useState();
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState("MOON");

  useEffect(() => {
    setDests(data["destinations"]);
    // console.log(dests);
  }, []);

  useEffect(() => {
    if (dests) setActive(dests[index].name.toUpperCase());
  }, [index]);

  return (
    <div className={styles.container}>
      <div className={styles.body_container}>
        <Title content_num="01" content_text={"PICK YOUR DESTINATION"} />
        <div className={styles.div_container}>
          {dests && (
            <>
              <div className={styles.img_container}>
                <img
                  src={dests[index].images.webp.slice(1)}
                  alt={dests[index].name}
                  width="100%"
                  height="100%"
                />
              </div>
              <div className={styles.text_container}>
                <div className={styles.filter}>
                  {dests.map((dest, index) => {
                    return (
                      <DestinationFilter
                        key={dest.name}
                        title={dest.name.toUpperCase()}
                        active={active}
                        index={index}
                        setIndex={setIndex}
                      />
                    );
                  })}
                </div>
                <div className={styles.Name}>
                  {dests[index].name.toUpperCase()}
                </div>
                <div className={styles.description}>
                  <span>{dests[index].description}</span>
                </div>
                <div className={styles.info_container}>
                  <div className={styles.info}>
                    <div className={styles.info_title}>Avg. distance</div>
                    <div className={styles.info_content}>
                      {dests[index].distance.toUpperCase()}
                    </div>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.info_title}>Est. travel</div>
                    <div className={styles.info_content}>
                      {dests[index].travel.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
