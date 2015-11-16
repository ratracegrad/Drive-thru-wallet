var router = require('express').Router();
var path = require('path');
var apiHelper = require('../lib/apiHelper');
var request = require('request');
var querystring = require('querystring');


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

//router.get('/testWorldPay', function(req, res) {
//    console.log('hit index.js');
//    apiHelper.getWorldPayAuthorization(function(err, data){
//        console.log('returned from call to getWorldPayAuthorization');
//    });
//
//});

router.get('/testWorldPayRequest', function(req, res) {
    console.log('starting testWorldPayRequest');

    var data = {
        "amount": 8.00,
        "card": {
            "number": "4111111111111111",
            "cvv": "123",
            "expirationDate": "07/2018",
            "address": {
                "company": "Nov8 Inc",
                "line1": "123 Main St.",
                "city": "Austin",
                "state": "TX",
                "zip": "78759"
            }
        },
        "extendedInformation": {
            "typeOfGoods": "PHYSICAL"
        },
        "developerApplication": {
            "developerId": 12345678,
            "version": "1.2"
        }
    }
    //var post_data = querystring.stringify(data);
    var post_data = JSON.stringify(data);

    request({
        url: 'https://gwapi.demo.securenet.com/api/Payments/Charge',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en-us',
            'Authorization': 'Basic ODAwNTM0NTpoUFNZL3AxN3dMazI='
        },
        body: post_data
    }, function(error, response, body){
        if (error) {
            console.log('error: ', error);
        } else {
            res.send(body);
        }
    });
})

router.get(/^\/(.*)/, function (req, res) {
    res.sendFile(path.join(appRoot, 'views/',"404.html"));
})


module.exports = router;