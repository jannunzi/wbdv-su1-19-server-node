module.exports = function (app) {

    const websiteDao = require('../daos/WebsiteDao');

    const createWebsite = (req, res) =>
        websiteDao.createWebsite(req.body)
            .then(website => res.json(website))

    const findAllWebsites = (req, res) =>
        websiteDao.findAllWebsites()
            .then(websites => res.json(websites))

    const findWebsiteById = (req, res) =>
        websiteDao.findWebsiteById(req.params['websiteId'])
            .then(website => res.json(website))

    const deleteWebsite = (req, res) =>
        websiteDao.deleteWebsite(req.params['websiteId'])
            .then(status => res.json(status))

    const updateWebsite = (req, res) =>
        websiteDao.updateWebsite(req.params['websiteId'], req.body)
            .then(status => res.json(status))

    app.post('/api/websites', createWebsite);
    app.get('/api/websites', findAllWebsites);
    app.get('/api/websites/:websiteId', findWebsiteById);
    app.delete('/api/websites/:websiteId', deleteWebsite);
    app.put('/api/websites/:websiteId', updateWebsite);

}
