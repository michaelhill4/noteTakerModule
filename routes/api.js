const router = require('express').Router();
const notesBase = require('../db/db.json')
"/notes"


// GET route for retrieving notes
router.get("/notes", (req, res) => {
    console.log(notesBase)
    // res.json(notesBase)

})





module.exports = router