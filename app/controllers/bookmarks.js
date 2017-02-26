'use strict';

const logger = require('../utils/logger');
const bookmarkFolder = require('../models/bookmark-store.js');

const bookmarks = {
  index(request, response) {
    logger.info('bookmarks rendering');
    const viewData = {
      title: 'Bookmarks',
      folders: bookmarkFolder,
    };
    logger.info('about to render', bookmarkFolder);
    response.render('bookmarks', viewData);
  },
};

module.exports = bookmarks;
