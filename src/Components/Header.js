import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./styles.css";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <Link to="/home">
        {" "}
        <img
          src={require("../images/manelogo.png")}
          alt="mane-logo"
          className="headerLogo"
        />
      </Link>

      <div className="menu" onClick={toggleMenu}>
        <span className="menuLine"></span>
        <span className="menuLine"></span>
        <span className="menuLine"></span>
      </div>

      <div className={`headerLinks ${menuOpen ? "showMenu" : ""}`}>
        <Link to="/home" className="hearderTxt">
          Home
        </Link>
        <Link to="/about" className="hearderTxt">
          About
        </Link>
        {/* <NavLink to="#projects" className="hearderTxt">
          Projects
        </NavLink> */}
        <Link to="/joinus" className="hearderTxt">
          Join Our Team
        </Link>

        <Link to="/message">
          <Button className="buildCTA">Build Your Projects</Button>
        </Link>
      </div>
    </div>
  );
}
