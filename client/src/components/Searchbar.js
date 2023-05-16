import React from "react";

function Searchbar({ keyword, handleKeywordChange }) {
  return (
    <div className="searchBarDiv">
      <input
        type="text"
        placeholder="Search..."
        value={keyword}
        onChange={(e) => handleKeywordChange(e.target.value)}
        className="searchBar"
      />
    </div>
  );
}

export default Searchbar;
