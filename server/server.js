const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

//express initialize to app so we can create APis and server
const app = express();

//ready to use config file
dotenv.config();

app.get("/", (req, res) => {
  res.send("api is running");
});

//getting all notes from backend
app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  // console.log(req.params);
  res.send(note);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` server started on ${PORT}`);
});
