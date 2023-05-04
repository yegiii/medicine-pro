import React from "react";

import "./header.css";
import Medicine from "../../assets/images/Medicine.svg";
import { AiOutlineSearch } from "react-icons/ai";
import User from "./User";
import Card from "./Card";
import { Link } from "react-router-dom";

function Header() {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <>
      <header className="header">
        <div className="scontsiner flex">
          <div className="logo">
            <Link to="/">
              <img src={Medicine} alt="Medicine" />
            </Link>
          </div>
          <div className="search flex">
            <AiOutlineSearch className="searchIcon" />
            <input type="text" placeholder="Search ..." />
          </div>
          <div className="account flexCenter">
            <Card />
            <User />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
