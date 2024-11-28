import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants/index";
import { menu, close } from "../assets";
import namelogo from "../assets/mahiLogo.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  // const [toggle, setToggle] = useState(false);


  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 navbar-container px-44
    }`}
    >
      <div className="w-full flex justify-evenly items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={namelogo} alt="logo" className="w-10 h-10  object-contain" />
          {/* <p className="text-[#915EFF] text-[18px] font-bold cursor-pointer flex ">
            Protfolio &nbsp;
            <span className="sm:block hidden"> || Mahipal Singh</span>
          </p> */}
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          
        </ul>

        {/* <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex  justify-evenly  items-start flex-1 flex-col gap-3 bg-white h-auto w-auto">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-purple-600 " : "text-black border border-purple-600 px-5 py-3 mt-2 rounded-sm m-2 bg-slate-200"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
