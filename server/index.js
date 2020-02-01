const express = require('express');
const app = express();
const notesCrtl = require('./controllers/notesCrtl');

app.use(express.json());

app.get("/api/words", notesCrtl.getWords);
app.post("/api/words", notesCrtl.postWords);
app.delete("/api/words", notesCrtl.deleteWords);
app.put("/api/words", notesCrtl.putWords);

// app.delete("/api/words/:id", )

app.listen(5050, function() {
    console.log('Bat is back!');
});

