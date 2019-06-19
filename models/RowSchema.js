const mongoose = require('mongoose')
const ColumnSchema = require('./ColumnSchema');

const RowSchema = mongoose.Schema({
    title: String,
    columns: [ColumnSchema]
});

module.exports = RowSchema;