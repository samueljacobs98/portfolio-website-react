import React from "react";
import toTop from "../../assets/svgs/to-top.svg";

import "./BackToTop.scss";

const BackToTop = () => {
  return (
    <>
      <a href="#home" className="mobile-back-to-top">
        <img src={toTop} alt="back-to-top" />
      </a>
      <a href="#home" className="back-to-top">
        Back to top
      </a>
    </>
  );
};

export default BackToTop;
