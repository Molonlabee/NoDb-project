let id = 2
let words = [
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
        res.status(200).json(words)
    },
    //Post
    postWords:(req, res) => {
        

        res.status(200).json(words)
    },
    //Delete
    DeleteWords(req, res) => {

    res.status(200).json(words)
    },

    //Put
    editWords(req, res) => {

        res.status(200).json(words)
    }

}