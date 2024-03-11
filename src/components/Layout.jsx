import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        Header
        <Link to={"/"}>home</Link>
        <Link to={"/about"}>About</Link>Header
      </div>
      <Outlet />
      <div>Footer </div>
    </>
  );
};

export default Layout;
