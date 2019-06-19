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

const appendPage = (websiteId, page) =>
    websiteModel.update(
        {_id: websiteId},
        {
            $push: {
                pages: page
            }
        })

const updatePage = (websiteId, pageId, page) =>
    websiteModel.update(
        {
            _id: websiteId,
            'pages._id': pageId},
        {
            $set: {
                'pages.$.title': page.title,
                'pages.$.rows': page.rows
            }
        }
    )

module.exports = {
    createWebsite,
    findAllWebsites,
    findWebsiteById,
    deleteWebsite,
    updateWebsite,
    appendPage,
    updatePage
};