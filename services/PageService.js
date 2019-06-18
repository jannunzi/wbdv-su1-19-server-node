const websiteDao = require('../daos/later/PageDao');

const findPagesForWebsite = wid =>
    websiteDao
        .findPagesForWebsite(wid)

const findPageById = pid =>
    websiteDao
        .findPageById(pid)

module.exports = {
    findPagesForWebsite,
    findPageById
};
