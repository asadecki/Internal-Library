'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategoryphotoSchema = new Schema({
    name: String,
    url: String
});

module.exports = mongoose.model('Categoryphoto', CategoryphotoSchema);