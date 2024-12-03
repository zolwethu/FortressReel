import React from "react";
import './header.css';

import NavListItem from "../components/NavListItem";
import navListData from "../data/navListData";
import Search from "../components/Search";


function Header() {
  return (
    <header>
        <a href="/" className="logo">FortressReel</a>
        <ul className="nav">
            {
                navListData.map(nav => (
                    <NavListItem key={nav.id} nav = {nav} />
                ))
            }
        </ul>
        <Search />
    </header>
  );
}

export default Header;