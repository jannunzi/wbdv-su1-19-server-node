const mongoose = require('mongoose')
const WidgetSchema = mongoose.Schema({
    title: String,
    type: {
        type: String,
        enum: [
            'HEADING', 'PARAGRAPH', 'HTML', 'YOUTUBE', 'IMAGE'
        ]},
    size: {
        type: Number,
        default: 1
    },
    text: {
        type: String,
        default: 'New WidgetSchema'
    },
    order: Number,
    createdOn: {
        type: Date,
        default: Date.now
    }
});
module.exports = WidgetSchema;