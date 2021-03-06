'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    author: String,
    category: String,
    description: String,
    isPdfVersion: Boolean,
    pdfUrl: String,
    isEbookVersion: Boolean,
    isPaperVersion: Boolean,
    whoHasGotItNow: String
});

module.exports = mongoose.model('Book', BookSchema);