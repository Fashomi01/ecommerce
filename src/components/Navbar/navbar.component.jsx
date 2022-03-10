import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";
import "./navbar.styles.css";
import { useState } from "react";
import Homepage from "../../components/homepage/homepage.component";

const Navbar = () => {

  const [open , setOpen] = useState(false)
  
  const handleToggle = () => {
    setOpen(!open);
    window.addEventListener('resize', function () {
      let x = window.innerWidth
      if(x > 680) {
        setOpen(false)
      }
    })
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={Logo} alt="" className="nav_img" />
        </Link>
        <div
          className={`nav_links ${open ? "active" : ""}`}
          id="nav_links"
        >
          <ul className="nav_link">
            <li>
              <Link to="/about" className="nav_link">
                About
              </Link>
            </li>
            <li>
              <Link to="/how" className="nav_link">
                How it works
              </Link>
            </li>
            <li>
              <Link to="/signin" className="nav_link">
                Sign in
              </Link>
            </li>
            <li>
              <Link to="/buy" className="nav_link">
                Buy pack
              </Link>
            </li>
          </ul>
          <div className="nav_btn">
            <Link to="/sign-up">Sign up</Link>
          </div>
        </div>
        <div
          className={`hamburger ${open ? "active" : ""}`}
          id="hamburger"
          onClick={handleToggle}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      {
        open ? null : <Homepage />
      }
    </>
  );
};

export default Navbar;
