import styles from "./Header.module.scss";
import Logo from "/assets/shared/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { SelectedRouterAtom } from "../../recoil/SelectedRouter";

const Header = () => {
  const [selected, setSelected] = useRecoilState(SelectedRouterAtom);
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
    setSelected("home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <div className={styles.img_container} onClick={handleClickLogo}>
          <img src={Logo} alt="logo" height="48px" />
        </div>
        <div className={styles.line_box_container}>
          <div className={styles.line_box}></div>
          <div></div>
        </div>
        <div className={styles.link_container}>
          <Link
            onClick={() => {
              setSelected("home");
            }}
            className={selected === "home" ? styles.selected : styles.link}
            to="/"
          >
            <div className={styles.span_container}>
              <span className={styles.link_number}>00 </span> <span>HOME</span>
            </div>
          </Link>
          <Link
            onClick={() => {
              setSelected("destination");
            }}
            className={
              selected === "destination" ? styles.selected : styles.link
            }
            to="/destination"
          >
            <div className={styles.span_container}>
              <span className={styles.link_number}>01 </span>
              <span>DESTINATION</span>
            </div>
          </Link>
          <Link
            onClick={() => {
              setSelected("crew");
            }}
            className={selected === "crew" ? styles.selected : styles.link}
            to="/crew"
          >
            <div className={styles.span_container}>
              <span className={styles.link_number}>02 </span> <span>CREW</span>
            </div>
          </Link>
          <Link
            onClick={() => {
              setSelected("technology");
            }}
            className={
              selected === "technology" ? styles.selected : styles.link
            }
            to="/technology"
          >
            <div className={styles.span_container}>
              <span className={styles.link_number}>03 </span>
              <span>TECHNOLOGY</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
