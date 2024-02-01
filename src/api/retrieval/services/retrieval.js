'use strict';

/**
 * retrieval service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::retrieval.retrieval');
