import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.scss";
import { useSetRecoilState } from "recoil";
import { SelectedRouterAtom } from "../../recoil/SelectedRouter";

const HomePage = () => {
  const navigate = useNavigate();
  const setSelectedRouter = useSetRecoilState(SelectedRouterAtom);

  const handleClickBtn = () => {
    navigate("/destination");
    setSelectedRouter("destination");
  };
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
          <div className={styles.description}>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className={styles.btn_container} onClick={handleClickBtn}>
          <div className={styles.btn}>
            <span>EXPLORE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
