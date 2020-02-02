let id = 2
const newNotes = [
    {
        notesid: 0,
        word:"page-one"
    },
    {
        notesid:1,
        word:"page-two"
    },
]



module.exports = {

    //Get
    getNotes:(req, res) => {
        res.status(200).json(words);
    },
    //Post
    postNotes:(req, res) => {
        const newNote = {
            id,
            ...req.body
        }
        newNotes.push(newNote);
        id++
        res.status(200).json(words);
    },
    //Delete
    deleteNotes(req, res) => {
        const targetIndex = newNotes.findIndex(note => note.id === +req.params.id);
        newNotes.splice(targetIndex, 1);
        res.status(200).json(notes);
    },

    //Put
    editNotes(req, res) => {
        const targetIndex = newNotes.findIndex(note => note.id === +req.params.id);
        newNotes[targetIndex].notebook = !newNotes[targetIndex].notebook;
        res.status(200).json(newNotes);
    }

}

