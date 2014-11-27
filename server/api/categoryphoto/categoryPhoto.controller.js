'use strict';

var _ = require('lodash');
var Categoryphoto = require('./categoryphoto.model');

// Get list of things
exports.index = function(req, res) {
    Categoryphoto.find(function (err, categoryphotos) {
        if(err) { return handleError(res, err); }
        return res.json(200, categoryphotos);
    });
};

// Get a single thing
exports.show = function(req, res) {
    console.log('xxxxx');
    Categoryphoto.find({name: req.params.name}, function (err, categoryphoto) {
        if(err) { return handleError(res, err); }
        if(!categoryphoto) { return res.send(404); }
        return res.json(categoryphoto);
    });
};


function handleError(res, err) {
    return res.send(500, err);
}