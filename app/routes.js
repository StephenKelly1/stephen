'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const bookmarks = require('./controllers/bookmarks.js');
const about = require('./controllers/about.js');

router.get('/', start.index);
router.get('/bookmarks', bookmarks.index);
router.get('/about', about.index);

module.exports = router;
