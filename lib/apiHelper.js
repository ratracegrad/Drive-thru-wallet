var http = require('http');
var config = require('config');
var querystring = require('querystring');
var request = require('request');


function getWorldPayAuthorization(callback) {
    console.log('in getWorldPayAuthorization');

    var options = {
        host: 'gwapi.demo.securenet.com',
        port: 80,
        path: '/api/Payments/Charge',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en-us',
            'Authorization': 'Basic ODAwNTM0NTpoUFNZL3AxN3dMazI='
        }
    }

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

    request({
        url: 'gwapi.demo.securenet.com/api/Payments/Charge',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en-us',
            'Authorization': 'Basic ODAwNTM0NTpoUFNZL3AxN3dMazI='
        },
        body: data
    }, function(error, response, body){
        if (error) {
            console.log('error: ', error);
        } else {
            console.log(response.statusCode, body);
        }
    });

    //var post_data = querystring.stringify(data);
    //var body = '';
    //
    //var req = http.request(options, function(res) {
    //    console.log('statusCode is:', res.statusCode);
    //    console.log('headers: ', JSON.stringify(res.headers));
    //    res.setEncoding('utf8');
    //
    //    res.on('data', function(chunk){
    //        body += chunk;
    //    });
    //    res.on('end', function() {
    //        console.log('on end: ', body);
    //    })
    //});
    //
    //req.on('error', function(err){
    //    console.log('problem with request: ' + err.message);
    //});
    //
    //req.write(post_data);
    //req.end(callback);



};

///////////////////////////////////////////////////////////////////

var self = {
    getWorldPayAuthorization: getWorldPayAuthorization
};

module.exports = self;