import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";

import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1 className="name__heading">
          Aditya Patil
        </h1>
        <h5 className="text-light">Fullstack Web && Fullstack Android</h5>
        <h5 className="text-light">Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me"  className="me_img"/>
        </div>

        <a href="#contact" className="scroll_down">
          Scroll down
        </a>
      </div>
    </header>
  );
}

export default Header;
