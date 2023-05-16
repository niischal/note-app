import React, { useContext, useState } from "react";
import axios from "axios";

import { NoteContext } from "../NoteContext";

function NewNote() {
  const initialNote = {
    title: "",
    body: "",
  };
  const { notes, setNotes } = useContext(NoteContext);
  const [note, setNote] = useState(initialNote);
  const handleSave = async () => {
    await axios
      .post("http://localhost:5000/note/addnote", note)
      .then(async (res) => {
        console.log("res", res);
        setNotes(res.data);
        setNote(initialNote);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div className="new note">
      <input
        type="text"
        className="note-header"
        style={{ backgroundColor: "#67d7cc" }}
        placeholder="Title"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <textarea
        className="note-body"
        placeholder="Your Note ...."
        style={{ backgroundColor: "#67d7cc" }}
        value={note.body}
        onChange={(e) => setNote({ ...note, body: e.target.value })}
      />
      <div className="note-footer">
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default NewNote;
