const mongoose = require('mongoose');
const WebsiteSchema = require('./WebsiteSchema');

const WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema)

module.exports = WebsiteModel