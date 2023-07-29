import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import HeaderMobile from "../header/HeaderMobile";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div>
      <Outlet />
      <div className={styles.header_mobile}>
        <HeaderMobile />
      </div>
      <div className={styles.header}>
        <Header />
      </div>
    </div>
  );
};

export default Layout;
