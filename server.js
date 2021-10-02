const express = require('express');
const PORT = process.env.PORT || 3000;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});