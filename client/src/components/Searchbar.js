import React, { useContext, useState } from "react";
import { NoteContext } from "../NoteContext";
import axios from "axios";

function Searchbar() {
  const [keyword, setKeyword] = useState("");
  const { setNotes } = useContext(NoteContext);
  const handleKeywordChange = async (keyword) => {
    setKeyword(keyword);
    await axios
      .get("http://localhost:5000/note/getFilteredNote", { keyword })
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
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
