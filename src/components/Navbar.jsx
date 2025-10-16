import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants/index";
import { menu, close } from "../assets";
import namelogo from "../assets/mahiLogo.png";
import { Sparkles } from "lucide-react";
const Navbar = () => {
  const [active, setActive] = useState("");
  // const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 navbar-container px-44
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
          <p className="text-[18px] font-bold flex items-center gap-2 text-[#915EFF] hover:text-pink-500 transition-all">
            <Sparkles className="animate-spin-slow" />
            Portfolio
            <span className="sm:block  text-white/70">
              || Mahipal Singh
            </span>
          </p>
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
      </div>
    </nav>
  );
};

export default Navbar;
