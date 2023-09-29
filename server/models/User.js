const { Schema, model} = require('mongoose');
const {String, Boolean} = require("mongoose/lib/schema");

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    isOnline: { type: Boolean, required: true },
    maxScore: { type: Number }
});

const User = model('User', userSchema);

module.exports = User;
