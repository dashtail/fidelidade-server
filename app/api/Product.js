var mongoose = require('mongoose');

module.exports = function (app) {
    var api = {};

    var model = mongoose.model('Product');

    api.List = function (req, res) {
        model
        .find({})
        .then(function (product) {
            res.json(product);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
    };

    api.Create = function (req, res) {
        console.log(req.body);
        model
        .create(req.body)
        .then(function (product) {
            res.json(product);
        }, function (error) {
            console.log(error);
            res.status(500).json(error);
        });
    };
    return api;
};
