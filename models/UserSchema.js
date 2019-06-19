const mongoose = require('mongoose')
const WebsiteSchema = require('./WebsiteSchema')

const UserSchema = mongoose.Schema({
    username: String,
    websites: [{websiteId: mongoose.Schema.Types.ObjectId}]
});

module.exports = UserSchema;