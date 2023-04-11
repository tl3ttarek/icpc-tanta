import { Outlet } from "react-router-dom";
import "../styles/global.css";
import Footer from "../components/Footer/Footer";

export const Layout = () => {
  return (
    <>
      <div className="layoutContainer">
        <div className="popup-background"></div>
        {/* <useSmoothScroll /> */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
