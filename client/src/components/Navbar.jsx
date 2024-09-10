import { useState } from "react";

import { close, logo, menu } from "../assets";//change
import { navLinks } from "../constants";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();


  return (
    <nav style={{height:'70px',paddingRight:'30px'}} className="w-full fixed top-0 left-0 z-50 flex py-6 justify-between items-center navbar backdrop-blur-lg bg-white/10">
  <img onClick={()=>navigate("/")} style={{cursor:'pointer'}} src={logo} alt="Nexara" className="w-[134px] h-[62px]" />

  <ul className="list-none sm:flex hidden justify-end items-center flex-1">
    {navLinks.map((nav, index) => (
      <li
        key={nav.id}
        className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-teal-500 ${
          active === nav.title ? "text-black" : "text-dimblack"
        } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
        onClick={() => setActive(nav.title)}
      >
        <a href={`/${nav.id}`}>{nav.title}</a>
      </li>
    ))}
  </ul>

  <div className="sm:hidden flex flex-1 justify-end items-center">
    <img
      src={toggle ? close : menu}
      alt="menu"
      className="w-[28px] h-[28px] object-contain"
      onClick={() => setToggle(!toggle)}
    />

    <div
      className={`${
        !toggle ? "hidden" : "flex"
      } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
    >
      <ul className="list-none flex justify-end items-start flex-1 flex-col">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
  <button
    style={{
      color:'white',
      marginLeft: "200px",
      backgroundColor: "#009688",
      paddingInline: "2.5%",
      paddingBlock: "10px",
      borderRadius: "10px",
      // fontWeight: "bold",
    }}
  >
    Login
  </button>
</nav>

  );
};

export default Navbar;