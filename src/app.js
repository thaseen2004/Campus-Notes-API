const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let notes = [
  { id: 1, title: "Math Notes", content: "Integration and derivatives" },
  { id: 2, title: "Physics Notes", content: "Newton's laws" }
];

app.get('/health', (req, res) => {
  res.json({ status: "UP" });
});

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.get('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find(n => n.id === id);
  if (!note) return res.status(404).json({ error: "Note not found" });
  res.json(note);
});

app.post('/notes', (req, res) => {
  const { title, content } = req.body;
  const newNote = {
    id: notes.length + 1,
    title,
    content
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

app.put('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find(n => n.id === id);
  if (!note) return res.status(404).json({ error: "Note not found" });

  const { title, content } = req.body;
  if (title) note.title = title;
  if (content) note.content = content;

  res.json(note);
});

app.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  notes = notes.filter(n => n.id !== id);
  res.json({ message: "Note deleted" });
});

app.listen(PORT, () => {
  console.log(`Campus Notes API running on port ${PORT}`);
});

