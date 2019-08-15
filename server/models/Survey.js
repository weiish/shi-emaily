const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient')


const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' }, //Every survey is going to belong to a 'user'. Ref belongs to the "Users" collection
    dateSent: Date, //When the survey was sent out
    lastResponded: Date //Latest time ANY user has responded to the survey
})

mongoose.model('survey', surveySchema)