const widgetDao = require('../daos/later/WidgetDao');

const appendWidget = (widget, {websiteId, pageId, rowId, columnId}) =>
    widgetDao.appendWidget(widget, websiteId, pageId, rowId, columnId)

module.exports = {
    appendWidget
};
