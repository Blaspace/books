import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [query, setQuery] = useState(null);
  return (
    <div className="header">
      <h1>
        Browse and download inspiring christian books from your favourite
        authors
      </h1>
      <br />
      <div className="search">
        <input
          type="text"
          placeholder="Search For Books"
          onChange={(e) => setQuery(e.target.value)}
        />
        <span
          onClick={() => {
            if (query) {
              navigate(`./search/${query}`);
            }
          }}
        >
          <IoMdSearch />
        </span>
      </div>
    </div>
  );
}

export default Header;
