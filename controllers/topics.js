var Topic = require('../models/topic');


function getAllTopics(req, res) {
    Topic.find({})
    .then(topics => res.json(topics));
}

function getTopicByNamespace(req, res) {
    Topic.findOne({chatNamespace: req.params.namespace})
    .then(topic => res.json(topic));
}

module.exports ={
    getAllTopics,
    getTopicByNamespace
}