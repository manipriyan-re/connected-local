import React, { useState } from "react";
import Image from "next/image";
import "./search-component.scss";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="relative max-w-lg search_bar_container flex items-center">
      <div className="search-icon-container">
        <Image
          src="/images/search.svg"
          alt="Search Icon"
          width={16}
          height={16}
          className="search-icon"
        />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search"
        className="input"
      />
    </div>
  );
};

export default Search;
