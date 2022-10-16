const mongoose = require('mongoose');

//validate inputs
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: 'password is required',
        select: false
    },

});

const model = mongoose.model('User', userSchema);

module.exports = model;