const router = require('express').Router();

const {createNewNote, validateNote, deleteNote } = require('../../lib/notes')
const { notes} = require('../../db/db')

router.get('/notes', (req, res) => {
    // console.log(notes)
    res.json(notes);
})

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})

module.exports = router;