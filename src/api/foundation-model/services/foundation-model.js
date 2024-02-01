'use strict';

/**
 * foundation-model service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::foundation-model.foundation-model');
