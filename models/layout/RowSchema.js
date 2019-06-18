const mongoose = require('mongoose');
const ColumnSchema = require('./ColumnSchema');
const RowSchema = mongoose.Schema({
    _id: String,
    title: String,
    columns: [ColumnSchema]
});
module.exports = RowSchema;