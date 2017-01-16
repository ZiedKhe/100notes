// var request = require("request")

// request('https://www.google.fr', function (error, request, body){
// 	if(!error && response.statusCode == 200){
// 		console.log(body);
// 	}
// 	else {
// 		console.log(error)
// 	}
// })

var request = require('request');

var options = {
  url: 'https://api.github.com/repos/request/request',
  headers: {
    'User-Agent': 'request'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
  	console.log(body);
    var info = JSON.parse(body);
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }
}

request(options, callback);