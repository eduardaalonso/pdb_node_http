var mongoose = require('mongoose');

module.exports = function(app) {
    var api = app.api.request;
    var model = mongoose.model('Request');

    app.route('/helpdesk/requests')
        .get(api.list);

        
    app.route('/helpdesk/new-request')
        .post(api.create);

    app.route('/helpdesk/update-requests')
        .get(api.update);
}