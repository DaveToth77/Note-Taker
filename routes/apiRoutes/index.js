const router = require('express').Router();
const notes = require('../apiRoutes/noteRoutes');

router.use(notes);

module.exports = router;