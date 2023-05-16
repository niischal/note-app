import axios from "axios";
import React, { useContext, useState } from "react";
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";
import { NoteContext } from "../NoteContext";
import EditNote from "./EditNote";
function Note({ note }) {
  const { notes, setNotes } = useContext(NoteContext);
  const [editState, setEditState] = useState(false);
  const handleDelete = async () => {
    await axios
      .post("http://localhost:5000/note/deletenote", { _id: note._id })
      .then(async (res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const handleEdit = async () => {
    setEditState(true);
  };
  return (
    <>
      {" "}
      {editState ? (
        <>
          <EditNote uneditedNote={note} setEditState={setEditState} />
        </>
      ) : (
        <div className="note" key={note._id}>
          <div className="note-header">{note.title}</div>
          <div className="note-body">{note.body}</div>
          <div className="note-footer">
            <BsPencilFill onClick={handleEdit} />
            <BsFillTrashFill onClick={handleDelete} />
          </div>
        </div>
      )}
    </>
  );
}

export default Note;
