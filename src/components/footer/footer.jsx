import React from "react";

import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

function footer() {
  return (
    <>
      <footer className="boxItems">
        <div className="container flex">
          <p>
            Demo Medicine - All right reserved - Design & develop by me, Inc.
          </p>
          <div className="social">
            <BsFacebook className="icon" />
            <RiInstagramFill className="icon" />
            <AiFillTwitterCircle className="icon" />
            <AiFillLinkedin className="icon" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
