/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /categories              ->  index
 */

'use strict';

var _ = require('lodash');
var Book = require('./../book/book.model');
var Category = require('./category.model');

// Get list of categories with quantity of books
exports.index = function (req, res) {
    Book.find(function (err, books) {
        if (err) {
            return handleError(res, err);
        }

        // TODO refactor it !!
        var categories = [];
        books.forEach(function (book) {
            var singleCategory = book.category;

            var found = false;
            categories.forEach(function (category) {

                if (category.name === book.category) {
                    found = true;
                    category.quantity = category.quantity + 1;
                }
            });

            if (!found) {
                var newCategory = {name: book.category, quantity: 1};
                categories.push(newCategory);
            }
        });

        return res.json(200, categories);
    });
};

exports.booksInCategory = function (req, res) {
    Book.find({category: req.params.name}, function (err, books) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, books);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}