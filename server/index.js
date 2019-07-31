const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys')

const app = express()
const PORT = process.env.PORT || 5000

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log('Access token', accessToken)
        console.log('Refresh token', refreshToken)
        console.log('Profile', profile)
    })
);

//Note: the 'google' here is not defined by us. It is defined within the "passport-google-oauth20" strategy.
//      Meaning we would need to look up what string to use if other strategies are desired.
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

app.get('/auth/google/callback', passport.authenticate('google'))

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})
