import React from "react";
import "./topBar.css";
function TopBar() {
  return (
    <div className="topNav">
      <div className="logoTitle">
        <img
          src="https://i.pinimg.com/736x/9f/23/b2/9f23b24a7698b1515d6c2584249c7f74.jpg"
          alt="Pet-logo"
          className="logo"
        />
        <h1>Borrow A Pet</h1>
      </div>
    </div>
  );
}

export default TopBar;
