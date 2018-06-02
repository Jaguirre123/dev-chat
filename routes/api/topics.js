var express = require('express');
var router = express.Router();
var topicsCtrl = require('../../controllers/topics');

router.get('/', topicsCtrl.getAllTopics);
router.get('/:namespace', topicsCtrl.getTopicByNamespace);
router.get('/count/:topic', topicsCtrl.getCount);


module.exports = router;