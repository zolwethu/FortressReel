import React from "react";
import "./button.css";

function Button({ icon, name, bgColor = "var(--primary)", color = "#ffffff" }) {
  return (   
      <a href="#" className="mainBtn" style={{color: color, background: bgColor}}>
        {icon} {name}
      </a>
  );
}

export default Button;
