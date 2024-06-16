// Layout.js
import SideMenu from "@/components/sidebar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideMenu />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
