const express = require("express");
const { json } = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 3000;

app.use(json());

let notes = [];

app.get("/", (req, res) => {
  res.send({ message: "Hello from Express js App" });
});

app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  const newNotes = {
    id: uuidv4(),
    title,
    content,
  };
  notes.push(newNotes);
  res.status(201).json(newNotes);
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/notes/:id", (req, res) => {
  const note = notes.find((n) => n.id === req.params.id);
  if (!note) return res.status(404).json({ message: "Note not found" });

  const { title, content } = req.body;
  note.title = title || note.title;
  note.content = content || note.content;

  res.json(note);
});

app.delete("/notes/:id", (req, res) => {
  const index = notes.findIndex((n) => n.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Note not found" });

  const deleted = notes.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
