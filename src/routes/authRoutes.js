const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

router.post('/signup', async (req, res) => {
    console.log(req.body);
    const {email, password} = req.body;
    try{
        const user = new User({email, password});
        await user.save();
        const token = jwt.sign({userId: user._id}, 'track_key');
        res.send({token});
    } catch(err) {
        return res.status(422).send(err.message);
    }
})

module.exports = router;