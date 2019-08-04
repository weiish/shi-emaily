const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model('users')

passport.serializeUser((user, done) => { //user is whatever we pulled out of the database
    done(null, user.id) //Done is a callback that we call to tell passport to move on.
    //The user.id we are using here is the ID that is AUTOMATICALLY GENERATED BY MONGOOSE

})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user)
        })
})

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleID: profile.id })
            .then((existingUser) => {
                if (existingUser) {
                    console.log('User already exists in the database, logging in')
                    done(null, existingUser)
                } else {
                    console.log('User does not yet exist, creating new user via google oauth')
                    new User({ googleID: profile.id })
                        .save()
                        .then(user => done(null, user))
                    //Note that the user within the .then call is a SEPARATE instance from the new User we created and saved.
                    //We use this new "user" in "done" because it is the latest version of the model, as something may have changed in the user record after saving.

                }
            })

    })
);