import styles from "./HeaderMobile.module.scss";
import Logo from "/assets/shared/logo.svg";
import Xbtn from "/assets/shared/icon-close.svg";
import Hamburger from "/assets/shared/icon-hamburger.svg";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnclickOutside from "../../hooks/useOnclickOutside";
import { useRecoilState, useSetRecoilState } from "recoil";
import { SelectedRouterAtom } from "../../recoil/SelectedRouter";

const HeaderModal = ({ setIsModalOpen }) => {
  const refModal = useRef();
  const [selectedRouter, setSelectedRouter] =
    useRecoilState(SelectedRouterAtom);

  useEffect(() => {}, [refModal]);

  // useOnclickOutside(refModal, () => setIsModalOpen(false));

  const handleClickLink = (linkName) => {
    setSelectedRouter(linkName);
  };

  return (
    <div className={styles.modal_container} ref={refModal}>
      <div
        className={styles.link_container}
        onClick={() => {
          setIsModalOpen(false);
        }}
      >
        <Link
          to="/"
          className={selectedRouter === "home" ? styles.selected : styles.link}
          onClick={() => {
            handleClickLink("home");
          }}
        >
          <div className>
            <span className={styles.link_number}>00</span> <span> HOME</span>
          </div>
        </Link>
        <Link
          to="destination"
          className={
            selectedRouter === "destination" ? styles.selected : styles.link
          }
          onClick={() => {
            handleClickLink("destination");
          }}
        >
          <div>
            <span className={styles.link_number}>01</span>{" "}
            <span> DESTINATION</span>
          </div>
        </Link>
        <Link
          to="crew"
          className={selectedRouter === "crew" ? styles.selected : styles.link}
          onClick={() => {
            handleClickLink("crew");
          }}
        >
          <div>
            <span className={styles.link_number}>02</span> <span> CREW</span>
          </div>
        </Link>
        <Link
          to="technology"
          className={
            selectedRouter === "technology" ? styles.selected : styles.link
          }
          onClick={() => {
            handleClickLink("technology");
          }}
        >
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
  const setSelectedRouter = useSetRecoilState(SelectedRouterAtom);

  const handleNavToHome = () => {
    navigate("/");
    setSelectedRouter("home");
  };

  return (
    <div className={styles.container}>
      {isModalOpen && <HeaderModal setIsModalOpen={setIsModalOpen} />}
      <div className={styles.header_container}>
        <div className={styles.logo_container} onClick={handleNavToHome}>
          <img src={Logo} alt="logo" />
        </div>
        <div
          className={styles.hambug_container}
          onClick={() => {
            setIsModalOpen((prev) => {
              return !prev;
            });
          }}
        >
          {isModalOpen ? (
            <img className={styles.btn_x} src={Xbtn}></img>
          ) : (
            <img src={Hamburger} alt="hamburger" />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
