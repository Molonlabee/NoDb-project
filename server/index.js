const express = require('express');
const {getShows, deleteShow} = require('./controllers/controller');  ///exporting the funtions from notesCrtl to use short hand commands. 
const app = express();
app.use(express.json());


//endpoints to shows functions. Routes to take for back end request.
app.get("/api/shows", getShows);
// app.post("/api/show", postShow);
app.delete("/api/shows/:id", deleteShow); //This endpoint will remove data from data object. The id prevents others from deleting without uniqe key.  
// app.put("/api/show", editShow);


const PORT = 5050;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

