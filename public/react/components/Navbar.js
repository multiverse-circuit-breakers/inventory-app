import React from "react";

export const NavBar = ({ categories }) => {
  return (
    <nav className="nav">
      <ul>
        {Object.keys(categories).map((category) => (
          <li key={category}>
            <a href={`#${category}`}>{category}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
