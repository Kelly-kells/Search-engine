import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div
      className="p-5 pd-0 flex flexwrap sm:justify-between justify-center items-center 
    border-b dark:border-gray-700 border-gray-300"
    >
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-gray-400 font-bold text-white py-1 px-2 rounded-full">
            SACH
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900
        bg-white border rounded-full px-2 px-1 hover:shadow-lg ">
          {darkTheme ? "Light 💡" : "Dark 🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
};
