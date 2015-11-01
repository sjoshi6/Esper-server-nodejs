var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', { title: 'Esper Server' });
});



// Hello world route
router.get('/hello-world', function (req, res, next) {

    res.setHeader('Content-Type', 'application/json');
    res.json({"id": 4,"content": "Hello, Stranger!"});

});

module.exports = router;
