'use strict';

/**
 * session-message service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::session-message.session-message');
