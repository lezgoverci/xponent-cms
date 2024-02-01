'use strict';

/**
 * inbox controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::inbox.inbox');
