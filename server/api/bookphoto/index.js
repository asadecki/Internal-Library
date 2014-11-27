'use strict';

var express = require('express');
var controller = require('./Bookphoto.controller');

var router = express.Router();

router.get('/:name', controller.show);

module.exports = router;