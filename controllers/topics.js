var Topic = require('../models/topic');
var ioServer = require('../io');

function getAllTopics(req, res) {
    Topic.find({}).sort({title: 1})
    .then(topics => res.json(topics));
}

function getTopicByNamespace(req, res) {
    Topic.findOne({chatNamespace: req.params.namespace})
    .then(topic => res.json(topic));
}

function getCount (req, res) {
    var io = ioServer.get();
    try {
        io.in(req.params.topic).clients(function(err, clients) {
            res.json({count: clients.length});
        });
    } catch (e) {
        res.json({count: 0});
    }
}

module.exports ={
    getAllTopics,
    getTopicByNamespace,
    getCount
}