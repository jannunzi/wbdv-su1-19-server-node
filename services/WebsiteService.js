const websiteDao = require('../daos/later/WebsiteDao');

const findAllWebsites = () =>
    websiteDao.findAllWebsites()

module.exports = {
    findAllWebsites
};
