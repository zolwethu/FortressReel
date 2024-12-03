import React from "react";
import './search.css';

function Search({nav}) {

  return (
    <div className="search">
        <input type="text" placeholder="Search" />
        <ion-icon name = "search-outline"></ion-icon>
    </div>
  )
}

export default Search;
