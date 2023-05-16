import React, { useContext, useEffect } from "react";
import Note from "./Note";
import NewNote from "./NewNote";
import { NoteContext } from "../NoteContext";
import axios from "axios";

function NoteList() {
  const { notes, setNotes } = useContext(NoteContext);
  useEffect(() => {
    axios
      .get("http://localhost:5000/note/getallnotes")
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="note-list">
      {notes.map((note) => {
        return <Note note={note} />;
      })}

      <NewNote />
    </div>
  );
}

export default NoteList;
