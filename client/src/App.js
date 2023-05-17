import NoteList from "./components/NoteList";
import Searchbar from "./components/Searchbar";
import React, { useState } from "react";

import { NoteContext } from "./NoteContext";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      <div className="App">
        <h1>Notes</h1>
        <Searchbar />
        <NoteList />
      </div>
    </NoteContext.Provider>
  );
}

export default App;
