import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SubHeader({ text }) {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-header">
      <br />
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter Search..."
          required
          onChange={(e) => handleSearch(e)}
        />
        <button
          onClick={() => {
            if (query.length) {
              navigate(`../search/${query}`);
            }
          }}
        >
          Search
        </button>
      </form>
      <br />
      <h1>{text}</h1>
    </div>
  );
}

export default SubHeader;
