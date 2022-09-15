const router = require('express').Router();
const notesBase = require('../db/db.json')
const fs = require('fs')
"/notes"



// GET route for retrieving notes
router.get("/notes", (req, res) => {
    console.log(notesBase)
    // notesBase.push("fried pickles")
    console.log(notesBase)
    res.json(notesBase)

})

router.post("/notes", (req, res) => {
    console.log(req.body)
    notesBase.push(req.body)

fs.writeFile('./db/db.json', JSON.stringify(notesBase), (err) => {
    if (err) console.error(err) 

    res.sendStatus(200)
})
})



module.exports = router