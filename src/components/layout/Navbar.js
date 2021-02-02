import React from "react";
import Logo from "../../imgs/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 20) {
  //       document.querySelector(".navUl").className = "ul scroll";
  //     } else {
  //       document.querySelector(".navUl").className = "ul";
  //     }
  //   };
  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     //eslint-disable-next-line
  //   }, []);
  return (
    <nav className="navbar">
      <ul className="navbarUl">
        <li className="navbarLi">
          <img className="imgNav" alt="" src={Logo} />
        </li>
        <li className="navbarLi">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
