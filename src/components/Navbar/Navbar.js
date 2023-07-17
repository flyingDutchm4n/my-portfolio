import React from "react";
import NavbarItem from "../NavbarItem/NavbarItem";

function Navbar() {
  return (
    <ul>
      <NavbarItem to="/" label="Home" />
      <NavbarItem to="/aboutMe" label="About Me" />
      <NavbarItem to="/references" label="References" />
      <NavbarItem to="/services" label="Services" />
      <NavbarItem to="/contact" label="Contact" />
    </ul>
  );
}

export default Navbar;
