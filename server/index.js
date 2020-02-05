const express = require('express');
const {getShows} = require('./controllers/controller');  ///exporting the funtions from notesCrtl to use short hand commands. 
const app = express();
app.use(express.json());


//endpoints to notesCrtl functions. Routes to take for back end request.
app.get("/api/shows", getShows);
// app.post("/api/notes", NcCreate);
// app.delete("/api/notes", NcDelete);
// app.put("/api/notes", NcEdit);

const PORT = 5050;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

