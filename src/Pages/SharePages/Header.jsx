/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthPage/AuthProvider";

const Header = () => {

    const {user, Logout} = useContext(AuthContext);
    const handleLogOut = () =>{
        Logout()
        .then(() =>{
            console.log("Log out successful")
        })
        .catch(error => {
            console.log(error)
        })
    }

  return (
    <div>
      <div className=" px-4 md:px-32 bg-black text-white text-lg">
        <div className="navbar bg-transparent">
          <div className="navbar-start">
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="mx-6">
                  <Link to="/">Home</Link>
                </li>
                <li className="mx-6">
                  <Link to="">Blog</Link>
                </li>
              </ul>
            </div>
            <Link
              to="/"
              className=" ms-4 md:ms-0 w-28 h-14 btn btn-ghost normal-case text-3xl text-my-primary"
            >
              AK
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="mx-6">
                <Link to="/">Home</Link>
              </li>
              <li className="mx-6">
                <Link to="">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="w-10 rounded-full mx-4">
              <img className="rounded-full" src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg" alt="nav img" />
            </div>
            {user && <h3 className="mx-2">{user?.email}</h3>}
          {user ? <Link onClick={handleLogOut} className="btn bg-my-primary border-none">Log out</Link>
          :
          <Link to="/login" className="btn bg-my-primary border-none">Login</Link>}
            {/* <Link to="/login" className="btn bg-my-primary border-none">
              Login
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
