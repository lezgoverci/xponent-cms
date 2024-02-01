'use strict';

/**
 * training-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::training-data.training-data');
