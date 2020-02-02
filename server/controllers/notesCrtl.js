let id = 2

const savedNotes = [
    {
        newNoteid: 0,
        name:"name1",
        date:"date1",
        title:"newNote1",
        Main:"main1",
        Sidebar:"sidebar1",
        Footer:"footer1"

    },
    {
        newNoteid: 1,
        name:"name2",
        date:"date2",
        title:"newNote2",
        Main:"main2",
        Sidebar:"sidebar2",
        Footer:"footer2"
    },
]



module.exports = {

    //Get
    getNote:(req, res) => {
        res.status(200).json(newNotes);
    },
    //Post
    postNote:(req, res) => {
        const newNote = {
            id,
            ...req.body
        }
        newNote.push(newNotes);
        id++
        res.status(200).json(newNotes);
    },
    //Delete
    deleteNote(req, res,) => {
        const targetIndex = newNote.findIndex(note => newNote.id === +req.params.id);
        newNote.splice(targetIndex, 1);
        res.status(200).json(newNotes);
    },

    //Put
    editNote(req, res) => {
        const targetIndex = newNotes.findIndex(note => newNote.id === +req.params.id);
        newNotes[targetIndex].notebook = !newNotes[targetIndex].notebook;
        res.status(200).json(newNotes);
    }

}

