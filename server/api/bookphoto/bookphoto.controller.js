'use strict';

var _ = require('lodash');
var Bookphoto = require('./bookphoto.model');

// Get list of things
exports.index = function (req, res) {
    Bookphoto.find(function (err, categoryphotos) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, categoryphotos);
    });
};

// Get a single thing
exports.show = function (req, res) {
    console.log(req.params.name);
    Bookphoto.find({name: req.params.name}, function (err, bookphoto) {
        if (err) {
            return handleError(res, err);
        }
        if (!bookphoto) {
            return res.send(404);
        }

        console.log(bookphoto);

        return res.json(bookphoto);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}