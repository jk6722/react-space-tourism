import styles from "./Header.module.scss";
import Logo from "../../../public/assets/shared/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [selected, setSelected] = useState("home");

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <div className={styles.img_container}>
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
            <span>00 HOME</span>
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
            <span>01 DESTINATION</span>
          </Link>
          <Link
            onClick={() => {
              setSelected("crew");
            }}
            className={selected === "crew" ? styles.selected : styles.link}
            to="/crew"
          >
            <span>02 CREW</span>
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
            <span>03 TECHNOLOGY</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
