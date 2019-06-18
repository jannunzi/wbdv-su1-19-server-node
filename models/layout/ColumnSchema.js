const mongoose = require('mongoose');
const WidgetSchema = require('./WidgetSchema');
const ColumnSchema = mongoose.Schema({
    _id: String,
    title: String,
    widgets: [WidgetSchema]
});
module.exports = ColumnSchema;