import React, { useState } from "react";
import Data from "../mock/mock-data.json";
import "../css/searchbar.css";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="search-container">
      <input placeholder="Enter Name" onChange={(event) => setQuery(event.target.value)} />
      {Data.filter((post) => {
        if (query === "") {
          return "";
        } else if (post.first_name.toLowerCase().includes(query.toLowerCase())) {
          return post;
        }
      }).map((post, index) => {
        return (
          <div className="box" key={index}>
            <p>{post.first_name}</p>
            <p>{post.last_name}</p>
          </div>
        );
      })}
    </div>
  );
};
