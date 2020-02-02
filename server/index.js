const express = require('express');
const app = express();
const NC = require('./controllers/notesCrtl');

// const products = require('../notes.json');

app.use(express.json());


app.get("/api/notes", NC.getNote);
app.post("/api/notes", NC.postNote);
app.delete("/api/notes", NC.deleteNote);
app.put("/api/notes", NC.editNote);
// app.delete("/api/notes/:id", )

// app.listen(5050, function() {
//     console.log('Bat is back!');
// });

const PORT = 5050;
app.listen(PORT, () => console.log('BAT is Back ${PORT}'));

