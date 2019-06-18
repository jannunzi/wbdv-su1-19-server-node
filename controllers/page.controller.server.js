let pages = require("../models/mock/pages.json")

module.exports = function (app) {

    const findAllPages = (req, res) =>
        res.json(pages);

    const findPageById = (req, res) =>
        res.json(pages.filter(page => page._id == req.params['pid'])[0]);

    const findWidgetById = (req, res) =>
        res.json(pages.filter(page => page._id == req.params['pid'])[0]);

    app.get("/api/pages", findAllPages);
    app.get("/api/pages/:pid", findPageById);
    app.get("/api/widgets/:wid", findWidgetById);
}