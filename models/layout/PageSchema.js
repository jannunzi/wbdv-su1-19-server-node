const mongoose = require('mongoose');
const RowSchema = require('./RowSchema');
const PageSchema = mongoose.Schema({
    _id: String,
    title: String,
    rows: [RowSchema]
});
module.exports = PageSchema;