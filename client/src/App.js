import NoteList from "./components/NoteList";
import Searchbar from "./components/Searchbar";
import React, { useState } from "react";

import { NoteContext } from "./NoteContext";

function App() {
  const [keyword, setKeyword] = useState("");
  const [notes, setNotes] = useState([]);
  const handleKeywordChange = (keyword) => {
    setKeyword(keyword);
  };
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      <div className="App">
        <h1>Notes</h1>
        <Searchbar
          keyword={keyword}
          handleKeywordChange={handleKeywordChange}
        />
        <NoteList />
      </div>
    </NoteContext.Provider>
  );
}

export default App;
