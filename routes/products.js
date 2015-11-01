var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {

    res.setHeader('Content-Type', 'application/json');
    res.json({"id": 4,"content": "Hello, Stranger!"});

});

module.exports = router;
