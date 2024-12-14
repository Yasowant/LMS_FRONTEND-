import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/AuthSlice";
import logo from "../assets/images/logo.jpeg";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  console.log(JSON.stringify(localStorage.getItem("Token")));

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-11 flex justify-between items-center px-4 shadow-md">
      {/* Header Logo */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="LMS Logo"
          className="border border-white rounded-lg p-1 h-10"
        />
        <span className="text-white font-bold text-xl">LMS</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-4 justify-center items-center list-none">
        {!isLoggedIn ? (
          <>
            <Link to={"/login"}>
              <li className="bg-white hover:bg-gray-200 rounded px-4 py-2 text-indigo-700 font-semibold text-sm shadow-sm">
                Sign in
              </li>
            </Link>
            <Link to={"/register"}>
              <li className="bg-white hover:bg-gray-200 rounded px-4 py-2 text-indigo-700 font-semibold text-sm shadow-sm">
                Sign Up
              </li>
            </Link>
          </>
        ) : (
          <div className="flex gap-4 items-center">
            <Link
              to={"/courses"}
              className="text-white font-semibold hover:underline"
            >
              Courses
            </Link>
            <i
              className="bi bi-person-circle text-white text-2xl cursor-pointer hover:text-gray-200"
              onClick={handleLogout}
            ></i>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Header;
