const websiteDao = require('./WebsiteDao')

findPagesForWebsite = websiteId =>
    websiteDao.findWebsiteById(websiteId)
        .then(website => website.pages)

createPage = (websiteId, page) =>
    websiteDao.appendPage(websiteId, page)

updatePage = (websiteId, pageId, page) =>
    websiteDao.updatePage(websiteId, pageId, page)

findPageById = (websiteId, pageId) =>
    websiteDao.findWebsiteById(websiteId)
        .then(website => website.pages.id(pageId))

module.exports = {
    findPagesForWebsite,
    createPage,
    findPageById,
    updatePage
}