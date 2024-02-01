'use strict';

/**
 * inbox service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inbox.inbox');
