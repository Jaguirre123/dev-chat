var express = require('express');
var router = express.Router();
var topicsCtrl = require('../../controllers/topics');

router.get('/', topicsCtrl.getAllTopics);
router.get('/:namespace', topicsCtrl.getTopicByNamespace);



module.exports = router;