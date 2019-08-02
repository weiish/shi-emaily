const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')

const keys = require('./config/keys')
require('./models/User')
require('./services/passport')


//Connect to mongo DB
mongoose.connect(keys.mongoURI)

const app = express()

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //How long til expire (in ms)
    keys: [keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app); 
//Calls the function we exported in authRoutes using the express instance we've created in this file
//This causes the authRoutes routes to be added to the instance of express we've defined here.

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})
