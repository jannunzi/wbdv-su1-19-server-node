const mongoose = require('mongoose')

const PageSchema = mongoose.Schema({
    title: String
});

module.exports = PageSchema;