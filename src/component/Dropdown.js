import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function Dropdown({ tuggle }) {
  const navRef = useRef();
  useEffect(() => {
    if (tuggle) {
      navRef.current.style.height = "70vh";
    } else {
      navRef.current.style.height = "0";
    }
  }, [tuggle]);
  return (
    <div className="dropdown" ref={navRef}>
      <NavLink
        to={"../../"}
        style={({ isActive }) => ({
          color: "white",
          textDecoration: "none",
          borderBottom: isActive,
        })}
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to={"../category"}
        style={({ isActive }) => ({
          color: "white",
          textDecoration: "none",
        })}
      >
        <li>Categories</li>
      </NavLink>
      <NavLink
        to={"../authors"}
        style={({ isActive }) => ({
          color: "white",
          textDecoration: "none",
        })}
      >
        <li>Authors</li>
      </NavLink>
      <NavLink
        to={"../about"}
        style={({ isActive }) => ({
          color: "white",
          textDecoration: "none",
        })}
      >
        <li>About us</li>
      </NavLink>
      <NavLink
        to={"../terms"}
        style={({ isActive }) => ({
          color: "white",
          textDecoration: "none",
        })}
      >
        <li>Terms of service</li>
      </NavLink>
    </div>
  );
}

export default Dropdown;
