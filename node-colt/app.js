const express = require('express')
const app = express()


app.get('/', function(req,res){
	console.log('catch all');
	res.send('Welcome to the root')
})

app.get('/speak/:name', function(req,res){
	var name = req.params.name;
	var sounds = {
		pig : 'oink',
		dog : 'woof',
		you : 'blurp'
	}
		res.send(name + ' : ' + sounds[name])
	}
)

app.get('/repeat/:word/:times', function(req,res){
	let word = req.params.word;
	let times = req.params.times;
	let sentence = '';
	for(var i = 0; i<times; i++){
		(sentence += word + ' ');
	}
	res.send(sentence)
})

app.get('*', function (req,res){
	res.send('nope');
})

app.listen(3000,(err)=> {
	if(err){
		return console.log("an error happened with the server",err)
	}
	console.log("server is listening on port")
})