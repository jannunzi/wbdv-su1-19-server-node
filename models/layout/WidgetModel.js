const mongoose = require('mongoose')
const WidgetSchema = require('./WidgetSchema')
const WidgetModel = mongoose.model(
    'WidgetModel', WidgetSchema
);

module.exports = WidgetModel;