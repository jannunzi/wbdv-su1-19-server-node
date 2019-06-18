const websiteModel = require('../models/WebsiteModel')

const createWebsite = website =>
    websiteModel.create(website);

const findAllWebsites = () =>
    websiteModel.find();

const findWebsiteById = websiteId =>
    websiteModel.findById(websiteId)

const deleteWebsite = websiteId =>
    websiteModel.remove({_id: websiteId})

const updateWebsite = (websiteId, newWebsite) =>
    websiteModel.update(
        {_id: websiteId},
        {$set: {title: newWebsite.title}
    })

module.exports = {
    createWebsite,
    findAllWebsites,
    findWebsiteById,
    deleteWebsite,
    updateWebsite
};