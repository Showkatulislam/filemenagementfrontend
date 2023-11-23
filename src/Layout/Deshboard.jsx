import React from "react";
import { Link, Outlet } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import { GrLogout } from "react-icons/gr";

const Deshboard = () => {
  const {user,logOut}=UseAuth()
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-28">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to="/">{user?.email}</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button onClick={logOut}><GrLogout/> Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Deshboard;
