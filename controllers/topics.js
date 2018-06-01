var Topic = require('../models/topic');


function getAllTopics(req, res) {
    Topic.find({}).sort({title: 1})
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