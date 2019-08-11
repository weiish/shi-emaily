
const keys = require('../config/keys')
const stripe = require("stripe")(keys.stripeSecretKey);
const auth = require('../middleware/requireLogin')

module.exports = app => {
    app.post('/api/stripe', auth, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: "usd",
            source: req.body.id, // obtained with Stripe.js
            description: "$5 for 5 email tokens on Emaily"
          });
        
          req.user.credits += 5;
          const user = await req.user.save()
          res.send(user)
    })
};