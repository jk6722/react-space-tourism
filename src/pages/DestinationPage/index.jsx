import { useState } from "react";
import DestinationFilter from "../../components/filter/DestinationFilter";
import styles from "./DestinationPage.module.scss";
import Title from "../../components/title/Title";

const descriptions = new Map([
  [
    "MOON",
    "See our planet as you’ve never seen it before.A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. Avg. distance 384,400 km Est. travel time 3 days",
  ],
  [
    "MARS",
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! Avg. distance 225 mil. km Est. travel time 9 months",
  ],
  [
    "EUROPA",
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin. Avg. distance 628 mil. km Est. travel time 3 years",
  ],
  [
    "TITAN",
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn. Avg. distance 1.6 bil. km Est. travel time 7 years",
  ],
]);

const distances = new Map([
  ["MOON", "384,400 km"],
  ["MARS", "225 mil. km"],
  ["EUROPA", "628 mil. km"],
  ["TITAN", "1.6 bil. km"],
]);

const travelTimes = new Map([
  ["MOON", "3 days"],
  ["MARS", "9 months"],
  ["EUROPA", "3 years"],
  ["TITAN", "7 years"],
]);

const DestinationPage = () => {
  const [active, setActive] = useState("MOON");
  const url = `/src/assets/destination/image-${active}.webp`;

  return (
    <div className={styles.container}>
      <div className={styles.body_container}>
        <Title content_num="01" content_text={"PICK YOUR DESTINATION"} />
        <div className={styles.div_container}>
          <div className={styles.img_container}>
            <img src={url} alt={active} width="100%" height="100%" />
          </div>
          <div className={styles.text_container}>
            <div className={styles.filter}>
              <DestinationFilter
                title="MOON"
                active={active}
                setActive={setActive}
              />
              <DestinationFilter
                title="MARS"
                active={active}
                setActive={setActive}
              />
              <DestinationFilter
                title="EUROPA"
                active={active}
                setActive={setActive}
              />
              <DestinationFilter
                title="TITAN"
                active={active}
                setActive={setActive}
              />
            </div>
            <div className={styles.Name}>{active}</div>
            <div className={styles.description}>
              <span>{descriptions.get(active)}</span>
            </div>
            <div className={styles.info_container}>
              <div className={styles.info}>
                <div className={styles.info_title}>Avg. distance</div>
                <div className={styles.info_content}>
                  {distances.get(active)}
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Est. travel</div>
                <div className={styles.info_content}>
                  {travelTimes.get(active)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
