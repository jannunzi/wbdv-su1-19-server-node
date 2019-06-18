module.exports = function (app) {
    const pageService = require('../../services/PageService');

    const findPagesForWebsite = (req, res) =>
        pageService
            .findPagesForWebsite(req.params['wid'])
            .then(pages => res.json(pages))

    const findPageById = (req, res) =>
        pageService
            .findPageById(req.params['pid'])
            .then(page => res.json(page))

    app.get("/api/websites/:wid/pages", findPagesForWebsite);
    app.get("/api/pages/:pid", findPageById);
}