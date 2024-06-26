const stripeService = require('../services/stripe.service');

exports.createCheckoutSession = async (req, res) => {
    stripeService.createCheckoutSession({ priceId: req.body.priceId }, response => {
        return res.status(200).send(response);
    });
};

exports.getLineItems = async (req, res) => {
    stripeService.getLineItems({ sessionId: req.params.sessionId }, response => {
        return res.status(200).send(response);
    });
}