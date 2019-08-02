const mongoose = require('mongoose')
//const Schema = mongoose.Schema;
const { Schema } = mongoose; //Does same as above (DESTRUCTURING)

const userSchema = new Schema({
    googleID: String,
})

mongoose.model('users', userSchema)