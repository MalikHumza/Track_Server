const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:{
        type: String,
        unique: true,
        require: true
    },
    password:{
        type: String,
        require: true,
    }
});

mongoose.model('User', userSchema);