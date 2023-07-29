import styles from "./HeaderMobile.module.scss";
import Logo from "/assets/shared/logo.svg";
import Xbtn from "/assets/shared/icon-close.svg";
import Hamburger from "/assets/shared/icon-hamburger.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderModal = () => {
  return (
    <div className={styles.modal_container}>
      <div className={styles.link_container}>
        <Link to="/" className={styles.link}>
          <div className>
            <span className={styles.link_number}>00</span> <span> HOME</span>
          </div>
        </Link>
        <Link to="destination" className={styles.link}>
          <div>
            <span className={styles.link_number}>01</span>{" "}
            <span> DESTINATION</span>
          </div>
        </Link>
        <Link to="crew" className={styles.link}>
          <div>
            <span className={styles.link_number}>02</span> <span> CREW</span>
          </div>
        </Link>
        <Link to="technology" className={styles.link}>
          <div>
            <span className={styles.link_number}>03</span>{" "}
            <span> TECHNOLOGY</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

const HeaderMobile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      {isModalOpen && <HeaderModal />}
      <div className={styles.header_container}>
        <div className={styles.logo_container}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.hambug_container} onClick={handleClick}>
          {isModalOpen ? (
            <img className={styles.btn_x} src={Xbtn}></img>
          ) : (
            <img src={Hamburger} alt="hamburger" />
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
