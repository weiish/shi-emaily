const mongoose = require('mongoose')
//const Schema = mongoose.Schema;
const { Schema } = mongoose; //Does same as above (DESTRUCTURING)

const userSchema = new Schema({
    googleID: String,
    credits: { type: Number, default: 0 }
})

mongoose.model('users', userSchema)