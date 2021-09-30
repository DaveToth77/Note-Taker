const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

const { notes } = require('./db/db.json');

app.get('/api/notes', (req, res) => {
    console.log(notes)
   res.json(notes);
})





app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});