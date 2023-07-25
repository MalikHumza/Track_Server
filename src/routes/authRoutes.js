const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');

router.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('Hello, you made a post request.');
})

module.exports = router;