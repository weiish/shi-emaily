const passport = require('passport')

module.exports = app => {
    //Note: the 'google' here is not defined by us. It is defined within the "passport-google-oauth20" strategy.
    //      Meaning we would need to look up what string to use if other strategies are desired.
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

    app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/api/current_user', failureRedirect: '/api/current_user&fail=true' }))

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send('You are now logged out');
    })

    app.get('/api/current_user', (req, res) => {
        if (req.user) {
            res.send('You are logged in as ' + req.user.id)
        } else {
            if (req.query.fail) {
                res.send('Login failed')
            } else {
                res.send('You are not logged in')
            }
        }

    })
}
