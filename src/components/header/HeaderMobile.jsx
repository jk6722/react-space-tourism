import styles from "./HeaderMobile.module.scss";
import Logo from "/assets/shared/logo.svg";
import Xbtn from "/assets/shared/icon-close.svg";
import Hamburger from "/assets/shared/icon-hamburger.svg";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnclickOutside from "../../hooks/useOnclickOutside";

const HeaderModal = ({ setIsModalOpen }) => {
  const refModal = useRef();

  useEffect(() => {}, [refModal]);

  useOnclickOutside(refModal, () => setIsModalOpen(false));

  return (
    <div className={styles.modal_container} ref={refModal}>
      <div
        className={styles.link_container}
        onClick={() => {
          setIsModalOpen(false);
        }}
      >
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
  const navigate = useNavigate();

  const handleClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleNavToHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      {isModalOpen && <HeaderModal setIsModalOpen={setIsModalOpen} />}
      <div className={styles.header_container}>
        <div className={styles.logo_container} onClick={handleNavToHome}>
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
