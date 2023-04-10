import { Outlet } from "react-router-dom";
import "../styles/global.css";
export const Layout = () => {
  return (
    <>
      <div className="layoutContainer">
        <Outlet />
        {/* <Footer /> */}
      </div>
    </>
  );
};
