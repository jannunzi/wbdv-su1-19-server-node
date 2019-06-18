const websiteModel = require('../../models/layout/WebsiteModel')

const findPagesForWebsite = wid =>
    websiteModel.find({_id: wid},
        {'pages.title': 1, 'pages._id': 1})

const findPageById = pid =>
    websiteModel.findOne({'pages._id': pid})
        .then(website =>
            website ? website.pages.find(page =>
                page._id === pid) : {})

module.exports = {
    findPagesForWebsite,
    findPageById
};