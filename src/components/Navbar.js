import React from "react";

export default function Navbar({ fixed }) {
  return (
    <>
      <nav className="flex justify-between bg-gray-800 mb-2 text-gray-400">
        <a href="/">
          <img src={require('../pictures/logo.png')} alt="logo" className="h-10" />
        </a>
        <span>
          <a href="/#courses" className="px-4 hover:font-bold">Courses</a>
          <a href="/success-story" className="px-4 hover:font-bold">Success story</a>
          <a href="/about-us" className="px-4 hover:font-bold">About us</a>
          <a href="/contact" className="px-4 hover:font-bold">Contact us</a>
        </span>
      </nav>
    </>
  );
}