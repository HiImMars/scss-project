import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
