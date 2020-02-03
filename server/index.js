const express = require('express');
const app = express();
const NC = require('./controllers/notesCrtl');


app.use(express.json());

app.get("/api/notes", NC.read);
app.post("/api/notes", NC.create);
app.delete("/api/notes", NC.delete);
app.put("/api/notes", NC.edit);

const PORT = 5050;
app.listen(PORT, () => console.log('BAT is Back ${PORT}'));

