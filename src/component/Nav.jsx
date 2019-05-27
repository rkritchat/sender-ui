import React from "react";

const Nav = () => {
  return (
    <div className="nav-space">
      <div className="navbar navbar-expand-sm bg-dark">
        <div className="navbar-nav">
          <div className="nav-item">
            <a href="/" className="nav-link">
              HOME
            </a>
          </div>
          <div className="nav-item">
            <a href="/task" className="nav-link">
              TASK
            </a>
          </div>
        </div>
        <div className="nav-item">
          <a href="/login" className="nav-link">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
