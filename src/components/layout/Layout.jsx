import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Layout = () => {
  return (
    <div>
      <Outlet />
      <Header />
    </div>
  );
};

export default Layout;
