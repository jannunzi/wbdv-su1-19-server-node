const websiteModel = require('../../models/layout/WebsiteModel')

const appendWidget = (widget, websiteId, pageId, rowId, columnId) =>
    websiteModel.update(
        {
            '_id': websiteId,
            'pages._id': pageId,
            'pages.rows._id': rowId,
            'pages.rows.columns._id': columnId
        },
        {
            $push: {
                'pages.rows.columns.$.widgets': widget
            }
        })

module.exports = {
    appendWidget
};