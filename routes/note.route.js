const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Note = require("../models/NoteModel");

router.post("/addNote", async (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    body: req.body.body,
  });
  try {
    newNote.save();
  } catch (err) {
    return res.status(400).send({ message: "Something Went Wrong" });
  }

  sendAllNotes(res);
});

router.get("/getAllNotes", async (req, res) => {
  try {
    sendAllNotes(res);
  } catch (error) {
    return res.status(400).send({ message: "Something Went Wrong" });
  }
});

router.post("/deleteNote", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.body._id);
    sendAllNotes(res);
  } catch (err) {
    return res.status(400).send({ message: "Something Went Wrong" });
  }
});

router.post("/editNote", async (req, res) => {
  try {
    await Note.findByIdAndUpdate(req.body._id, {
      title: req.body.title,
      body: req.body.body,
    });
    sendAllNotes(res);
  } catch (err) {
    return res.status(400).send({ message: "Something Went Wrong" });
  }
});

const sendAllNotes = async (res) => {
  const allNotes = await Note.find();
  return res.send(allNotes);
};
module.exports = router;
