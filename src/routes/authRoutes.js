const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
    res.send('Hello, you made a post request.');
})

module.exports = router;