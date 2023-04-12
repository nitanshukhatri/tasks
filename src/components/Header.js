import * as React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link> <Link to="/search">Search</Link> <Link to="/todo">TODO</Link>{" "}
      <Link to="/tree">Tree</Link>
      <Link to="/searchbar">SearchBar</Link>
    </header>
  );
};
