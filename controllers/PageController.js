
module.exports = function (app) {
    const pageDao = require('../daos/PageDao')

    findPagesForWebsite = (req, res) =>
        pageDao.findPagesForWebsite(req.params['wid'])
            .then(pages => res.json(pages))

    createPage = (req, res) =>
        pageDao.createPage(req.params['wid'], req.body)
            .then(page => res.json(page))

    findPageById = (req, res) =>
        pageDao.findPageById(req.params['wid'], req.params.pid)
            .then(page => res.json(page))

    updatePage = (req, res) =>
        pageDao.updatePage(req.params['wid'], req.params['pid'], req.body)
            .then(page => res.json(page))

    app.get('/api/websites/:wid/pages', findPagesForWebsite)
    app.get('/api/websites/:wid/pages/:pid', findPageById)
    app.post('/api/websites/:wid/pages', createPage)
        app.put('/api/websites/:wid/pages/:pid', updatePage)
}