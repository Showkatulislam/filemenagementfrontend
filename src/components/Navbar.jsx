import { Link } from "react-router-dom";
import Items from "./Items";
import UseAuth from "../Hook/UseAuth";

const Navbar = () => {
  const { user,logOut } = UseAuth();
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start lg:px-7">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Items />
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">File Management System</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Items />
        </ul>
      </div>
      <div className="navbar-end gap-5">
        {user ? (
          <button onClick={logOut}>logout</button>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
        {
          user?.admin==true && <Link to="/deshboard">Deshboard</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
