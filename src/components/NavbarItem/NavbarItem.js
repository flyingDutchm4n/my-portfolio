import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ to, label }) => {
  return (
    <li>
      <Link to={to}>{label}</Link>
    </li>
  );
};

export default NavbarItem;
