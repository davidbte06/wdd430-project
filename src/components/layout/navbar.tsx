import React from "react";
import Link from "next/link";
import GamepadIcon from "@mui/icons-material/Gamepad";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  return (
    <nav className="bg-white shadow dark:bg-gray-900">
      <div className="container flex justify-between items-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <a
          href="/dashboard"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <GamepadIcon className="fill-white" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            AlexandriArcade
          </span>
        </a>
        <div className="flex items-center space-x-6">
          <Link
            href="#"
            className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500"
          >
            Home
          </Link>

          <Link
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
          >
            Games
          </Link>

          <Link
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
          >
            About Us
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            href="/dashboard/profile"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
          >
            <PersonIcon />
          </Link>
          <Link
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
          >
            <LogoutIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
