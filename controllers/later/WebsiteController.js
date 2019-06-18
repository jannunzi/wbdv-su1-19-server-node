module.exports = function (app) {
    const widgetService = require("../../services/WidgetService");

    const appendWidget = (req, res) =>
        widgetService
            .appendWidget(req.body, req.params)
            .then(websites => res.json(websites))

    app.get(`/api/websites/:websiteId/pages/:pageId/rows/:rowId/columns/:columnId/widgets`, appendWidget);
}