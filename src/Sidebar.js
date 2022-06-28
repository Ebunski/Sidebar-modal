import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

const Sidebar = () => {
  const tabs = links.map((x) => (
    <li key={x.id}>
      <a href={x.url}>
        {x.icon}
        {x.text}
      </a>
    </li>
  ));

  const socialIcons = social.map((x) => (
    <li key={x.id}>
      <a href={x.url}>{x.icon}</a>
    </li>
  ));

  /*
=============== 
JSX
===============
*/

  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <img className="logo" src={logo} alt="coding-addict" />
        <button className="close-btn">
          <FaTimes />
        </button>
      </header>
      <ul className="links">{tabs}</ul>
      <ul className="social-icons">{socialIcons}</ul>
    </aside>
  );
};

export default Sidebar;
