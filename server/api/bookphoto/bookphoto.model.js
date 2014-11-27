'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookphotoSchema = new Schema({
    name: String,
    url: String
});

module.exports = mongoose.model('Bookphoto', BookphotoSchema);