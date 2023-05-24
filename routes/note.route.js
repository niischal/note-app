const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Note = require("../models/NoteModel");

router.post("/addNote", async (req, res) => {
  try {
    const newNote = new Note({
      title: req.body.title,
      body: req.body.body,
    });
    await newNote.save();

    sendAllNotes(res);
  } catch (err) {
    return res.status(400).send({ message: "Something Went Wrong" });
  }
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

router.post("/getFilteredNote", async (req, res) => {
  try {
    const keyword = req.body.keyword;
    if (keyword === "") {
      sendAllNotes(res);
    } else {
      const notes = await Note.find();
      const filteredNotes = notes.filter((note) => {
        return (
          note.title.toLowerCase().includes(keyword.toLowerCase()) ||
          note.body.toLowerCase().includes(keyword.toLowerCase())
        );
      });
      console.log("filteredNotes", filteredNotes);
      return res.status(200).send(filteredNotes);
    }
  } catch (err) {
    console.log("err", err);
    return res.status(500).send({ message: err });
  }
});

const sendAllNotes = async (res) => {
  const allNotes = await Note.find();
  return res.status(200).send(allNotes);
};
module.exports = router;
