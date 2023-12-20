const serveStatic = require('serve-static');

module.exports = function (app) {
    app.use('/api', serveStatic('./api', { index: false, extensions: ['json'] }))
    app.use('/resources', serveStatic('./resources', { index: false, extensions: ['png'] }))
}