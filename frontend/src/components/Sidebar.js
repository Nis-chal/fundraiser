import React from "react";
import { ImCross } from "react-icons/im";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const Sidebar = ({ show, togglesidebar }) => {
  return (
    <div className={show ? "sidebar active" : "sidebar"}>
      <ImCross className="cross-icon" onClick={togglesidebar} />

      <div className="social-icons">
        <div className="circle">
          <AiFillFacebook className="icon" />
        </div>
        <div className="circle">
          <BsTwitter className="icon" />
        </div>
        <div className="circle">
          <BsInstagram className="icon" />
        </div>
      </div>
      <div className="nav-links">
        {links.map((link) => {
          const { text, path, id } = link;

          return (
            <NavLink
              to={path}
              key={id}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
