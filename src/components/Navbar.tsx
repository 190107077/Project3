import * as React from "react";
import { HiMenu, HiHome, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between bg-white border border-gray-200 p-2">
      <div className="flex gap-x-3">
        <button className="w-8 h-8 bg-slate-50 rounded-full flex">
          <HiMenu className="w-4 h-4 m-auto" />
        </button>
        <Link to="/" className="w-8 h-8 bg-slate-50 rounded-full flex">
          <HiHome className="w-4 h-4 m-auto" />
        </Link>
      </div>
      <div className="flex items-center justify-center w-8 h-8 bg-pink-300 rounded-full object-cover">
        M
      </div>
    </nav>
  );
};

export default Navbar;
