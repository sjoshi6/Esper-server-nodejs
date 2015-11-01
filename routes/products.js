var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {

    res.setHeader('Content-Type', 'application/json');
    res.json({"id": 4,"content": "Hello, Stranger!"});

});

router.get('/types', function(req, res, next) {

	var producttypes = ["Beauty & Grooming","Beverages","Grocery","Healthcare","Household","Nutrition & Wellness","Snack","Office"];
    res.setHeader('Content-Type', 'application/json');
    res.json({"productTypes": producttypes });

});


module.exports = router;
