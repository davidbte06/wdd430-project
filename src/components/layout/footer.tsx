import React from "react";
import GamepadIcon from "@mui/icons-material/Gamepad";

const footer = () => {
  return (
    <footer className="w-full bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/dashboard"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <GamepadIcon className="fill-white" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              AlexandriArcade
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white sm:text-center">
          © 2024{" "}
          <a href="/" className="hover:underline">
            AlexandriArcade™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default footer;
