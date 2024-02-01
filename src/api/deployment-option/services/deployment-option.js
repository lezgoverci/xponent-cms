'use strict';

/**
 * deployment-option service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::deployment-option.deployment-option');
