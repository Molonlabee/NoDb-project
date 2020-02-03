let id = 0

const savedNotes = [
    // {
    //     newNoteid: 0,
    //     name:"name1",
    //     date:"date1",
    //     title:"newNote1",
    //     Main:"main1",
    //     Sidebar:"sidebar1",
    //     Footer:"footer1"

    // },
    // {
    //     newNoteid: 1,
    //     name:"name2",
    //     date:"date2",
    //     title:"newNote2",
    //     Main:"main2",
    //     Sidebar:"sidebar2",
    //     Footer:"footer2"
    // },
]



// module.exports = {

//     //Get
//     getNote:(req, res) => {
//         res.status(200).json(newNotes);
//     },
//     //Post
//     postNote:(req, res) => {
//         const newNote = {
//             id,
//             ...req.body
//         }
//         newNote.push(newNotes);
//         id++
//         res.status(200).json(newNotes);
//     },
//     //Delete
//     deleteNote(req, res,) => {
//         const targetIndex = newNote.findIndex(note => newNote.id === +req.params.id);
//         newNote.splice(targetIndex, 1);
//         res.status(200).json(newNotes);
//     },

//     //Put
//     editNote(req, res) => {
//         const targetIndex = newNotes.findIndex(note => newNote.id === +req.params.id);
//         newNotes[targetIndex].notebook = !newNotes[targetIndex].notebook;
//         res.status(200).json(newNotes);
//     }

// }

module.exports = {
    create: (req, res) => {
        const {savedNotes} = req.body;
        savedNotes.push({id, text, time});
        id++;
        res.status(200).send(savedNotes);
    },

    read: (req, res) => {
        res.status(200).send(savedNotes);
    },

    update: (req, res) => {
        const {savedNotes} =req.body;
        const updateID = req.params.id;
        const savedNotesIndex = savedNotes.findIndex(savedNotes => savedNotes.id ==updateID);
       let savedNotes = savedNotes[savedNotesIndex];
    
       savedNotes[savedNotes] = {
        id: savedNotes.id,
        text: text || savedNotes.text,
        time: message.time
      };
  
      res.status(200).send(savedNotes);
    },
  
    delete: (req, res) => {
      const deleteID = req.params.id;
      savedNotesIndex = savedNotes.findIndex(savedNotes => savedNotes.id == deleteID);
      savedNotes.splice(savedNotesIndex, 1);
      res.status(200).send(savedNotes);
    } 
}

