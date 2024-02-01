'use strict';

/**
 * deployment-channel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::deployment-channel.deployment-channel');
