var mongoose = require('mongoose');

var model = mongoose.model('Request');
var api = {
    list: function(req, res) {
        model.find({})
            .sort({'priority': 'descending'})
            .where('status').equals('OPENED')
            .then(function(helpdesk_requests) {
                res.json(helpdesk_requests);
            }, function(error) {
                console.log(error);
                res.status(500).json(error);
            });
    },
    update:function(req,res){
        Model.update({}, {$set: {status: 'CLOSED'}}, {multi : true}, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
    },

    create:function(req,res){
        var sent = req.body;
        console.log(sent.opened_by)
        model.create(sent);

    }
}

module.exports = api;