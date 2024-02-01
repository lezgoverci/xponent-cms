'use strict';

/**
 * deployment-channel router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::deployment-channel.deployment-channel');
