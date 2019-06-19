const mongoose = require('mongoose')
const PageSchema = require('./PageSchema')
const UserSchema = require('./UserSchema')

const WebsiteSchema = mongoose.Schema({
    title: String,
    pages: [PageSchema],
    createdOn: {type: Date, default: Date.now}
    // ,
    // developer: mongoose.Schema.Types.ObjectId
});

module.exports = WebsiteSchema;