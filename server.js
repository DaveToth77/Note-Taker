
const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

const { notes } = require('./db/db.json');

app.get('/api/notes', (req, res) => {
    console.log(notes)
   res.json(notes);
})

app.post('/api/notes', (req, res) => {
    //set ID of note
    req.body.id = notes.length.toString();
    //validate data
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted');
    } else {
    //add note to json file and notesArray
    const note = createNewNote(req.body, notes);
    res.json(note);
    }
})

function createNewNote(body, notesArray) {
const note = body;
notesArray.push(note); 
fs.writeFileSync(
    path.join(__dirname, './db/db.json'),
    JSON.stringify({ notes: notesArray}, null, 2)
    );   
    
    return note;
}

function validateNote(note) {
    if (!note.name || typeof note.name !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});