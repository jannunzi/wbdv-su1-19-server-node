const mongoose = require('mongoose')

const ColumnSchema = mongoose.Schema({
    title: String,
    span: {type: Number, default: 2},
    columns: [{
        title: String,
        type: {type: String, default: 'HEADING', enum: ['HEADING', 'YOUTUBE', 'HTML']},
        text: {type: String, default: 'New Heading Widget'},
        size: {type: Number, default: 2}
    }]
});

module.exports = ColumnSchema;