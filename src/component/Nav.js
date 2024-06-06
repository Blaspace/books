import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import Dropdown from "./Dropdown";

function Nav() {
  const [tuggle, setTuggle] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-con">
        <h1>TheScribe</h1>
        <ul>
          <NavLink
            to={"../../"}
            style={({ isActive }) => ({
              color: "white",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid orangered"
                : "3px solid transparent",
            })}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"../category"}
            style={({ isActive }) => ({
              color: "white",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid orangered"
                : "3px solid transparent",
            })}
          >
            <li>Categories</li>
          </NavLink>
          <NavLink
            to={"../authors"}
            style={({ isActive }) => ({
              color: "white",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid orangered"
                : "3px solid transparent",
            })}
          >
            <li>Authors</li>
          </NavLink>
        </ul>
        <ul>
          <NavLink
            to={"../about"}
            style={({ isActive }) => ({
              color: "white",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid orangered"
                : "3px solid transparent",
            })}
          >
            <li>About us</li>
          </NavLink>
          <NavLink
            to={"../terms"}
            style={({ isActive }) => ({
              color: "white",
              textDecoration: "none",
              borderBottom: isActive
                ? "3px solid orangered"
                : "3px solid transparent",
            })}
          >
            <li>Terms of service</li>
          </NavLink>
        </ul>
        <h2 onClick={() => (tuggle ? setTuggle(false) : setTuggle(true))}>
          {tuggle ? <span>&times;</span> : <MdOutlineMenu size={25} />}
        </h2>
        <Dropdown tuggle={tuggle} />
      </div>
    </nav>
  );
}

export default Nav;
