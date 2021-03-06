const passport = require('passport')

module.exports = app => {
    //Note: the 'google' here is not defined by us. It is defined within the "passport-google-oauth20" strategy.
    //      Meaning we would need to look up what string to use if other strategies are desired.
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

    app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/surveys', failureRedirect: '/api/current_user&fail=true' }))

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/')
    })

    app.get('/api/current_user', (req, res) => {
        return res.send(req.user)

    })
}
