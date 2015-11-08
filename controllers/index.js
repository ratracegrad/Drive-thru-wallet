var router = require('express').Router();
var path = require('path');
var apiHelper = require('../lib/apiHelper')

router.get('/', function(req, res) {
    res.sendFile(path.join(appRoot, 'views/','index.html'));
});

router.get('/createAccount', function(req, res) {
    res.sendFile(path.join(appRoot, 'views/', "createAccount.html"));
});

router.get('/userAccount', function(req, res) {
    res.sendFile(path.join(appRoot, 'views/', "userAccount.html"));
});

router.get('/nearbyVendors', function(req, res) {
    res.sendFile(path.join(appRoot, 'views/', "nearbyVendors.html"));
});

router.get('/addCard', function(req, res) {
    res.sendFile(path.join(appRoot, 'views/',"addCard.html"));
});

router.get('/purchase', function(req, res) {
    res.sendFile(path.join(appRoot, 'views/',"purchase.html"));
});

router.get('/accountCode', function(req, res) {
    res.sendFile(path.join(appRoot, 'views/',"accountCode.html"));
});

router.get('/testWorldPay', function(req, res) {
    console.log('hit index.js');
    apiHelper.getWorldPayAuthorization();
    res.status(200).json("hello world");
});

router.get(/^\/(.*)/, function (req, res) {
    res.sendFile(path.join(appRoot, 'views/',"404.html"));
})


module.exports = router;