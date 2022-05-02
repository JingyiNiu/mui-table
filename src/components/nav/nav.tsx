import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jobs">jobs</Link>
        </li>
        <li>
          <Link to="/employers">employers</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
