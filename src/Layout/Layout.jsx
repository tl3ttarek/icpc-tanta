import { Outlet } from "react-router-dom";
import "../styles/global.css";

export const Layout = () => {
  return (
    <>
      <div className="layoutContainer">
        <div className="popup-background"></div>
        {/* <useSmoothScroll /> */}
        <Outlet />
        {/* <Footer /> */}
      </div>
    </>
  );
};
