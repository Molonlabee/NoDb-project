const express = require('express');
const app = express();
const NC = require('./controllers/notesCrtl');

app.use(express.json());


app.get("/api/words", NC.getWords);
app.post("/api/words", ND.postWords);
app.delete("/api/words", ND.deleteWords);
app.put("/api/words", ND.putWords);
app.delete("/api/words/:id", )

// app.listen(5050, function() {
//     console.log('Bat is back!');
// });

const PORT = 5050;
app.listen(PORT, () => console.log('BAT is Back ${PORT}'));

