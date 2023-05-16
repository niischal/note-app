import React, { useContext, useState } from "react";
import axios from "axios";

import { NoteContext } from "../NoteContext";

function EditNote({ uneditedNote, setEditState }) {
  const { notes, setNotes } = useContext(NoteContext);
  const [note, setNote] = useState(uneditedNote);

  const handleEdit = async () => {
    await axios
      .post("http://localhost:5000/note/editNote", note)
      .then(async (res) => {
        setEditState(false);
        setNotes(res.data);
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
        <button className="btn" onClick={handleEdit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditNote;
