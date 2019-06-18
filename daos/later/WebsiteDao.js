const websiteModel = require('../../models/layout/WebsiteModel')

const createWebsite = website =>
    websiteModel.create(website)

const findAllWebsites = () =>
    websiteModel.find({}, {title: 1})

module.exports = {
    createWebsite,
    findAllWebsites
};