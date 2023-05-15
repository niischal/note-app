const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Note = require("../models/NoteModel");

router.post("/addNote", async (req, res) => {
  console.log(req.body);
  const newNote = new Note({
    title: req.body.title,
    body: req.body.body,
  });
  try {
    newNote.save();
  } catch (err) {
    return res.status(400).send({ message: "Something Went Wrong" });
  }

  return res.status(200).send({ message: "Note Saved" });
});

router.get("/getAllNotes", async (req, res) => {
  try {
    const allNotes = await Note.find();
    return allNotes;
  } catch (error) {
    return res.status(400).send({ message: "Something Went Wrong" });
  }
});

module.exports = router;
