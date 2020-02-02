let id = 2
const newNotes = [
    {
        wordid: 0,
        word:"purple"
    },
    {
        wordid:1,
        word:"blue"
    },
]



module.exports = {

    //Get
    getWords:(req, res) => {
        res.status(200).json(words);
    },
    //Post
    postWords:(req, res) => {
        const newNote = {
            id,
            ...req.body
        }
        newNotes.push(newNote);
        id++
        res.status(200).json(words);
    },
    //Delete
    deleteWords(req, res) => {
        const targetIndex = newNotes.findIndex(note => note.id === +req.params.id);
        newNotes.splice(targetIndex, 1);
        res.status(200).json(notes);
    },

    //Put
    editWords(req, res) => {
        const targetIndex = newNotes.findIndex(note => note.id === +req.params.id);
        newNotes[targetIndex].notebook = !newNotes[targetIndex].notebook;
        res.status(200).json(newNotes);
    }

}

