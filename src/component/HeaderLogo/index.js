import React from "react";
import "./index.css";

// import logo from "/Users/sedatif2/Documents/REACTEUR/-portfolio/deliveroo-remake/src/assets/logo.png";

export default function HeaderLogo() {
  return (
    <div
      className="headerBox"
      // style={{ borderColor: "blue", borderWidth: 10, border: "solid" }}
    >
      <img
        className="logoHeader"
        src="https://consumer-component-library.roocdn.com/22.1.1/static/images/logo-teal.svg"
        alt="logo"
      />
    </div>
  );
}
