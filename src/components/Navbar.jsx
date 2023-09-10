import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <img src={logo} alt="" className="w-[124px] h-[32px]  " />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1  ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white text-[16px] `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => settoggle((prev) => !prev)}
          alt=""
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[300px] min-h-[300px]  rounded-xl sidebar z-50`}
        >
          <ul className="list-none flex  flex-col justify-center items-center flex-1 leading-[40px]">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-white text-[16px]  ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
