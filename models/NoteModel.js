const mongoose = require("mongoose");
const noteSchema = mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: false },
});
const NoteModel = mongoose.model("notes", noteSchema);
module.exports = NoteModel;
