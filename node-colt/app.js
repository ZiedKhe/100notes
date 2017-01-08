const path = require("path")
const express = require("express");
// var RedisStore =  require('connect-redis')(express)
const app = express();
const ejs = require ('ejs')
const port = 3000

// app.use(express.session({store: new RedisStore}));


// app.use(express.session({ store: new RedisStore({
//   host:'127.0.0.1',
//   port:6380,
//   prefix:'sess'
// }), secret: 'SEKR37' }));

// Serve the static content of "public" directory
app.use(express.static('public'));

app.get("/exchange", function(req,res){
	console.log("Exchange Shift");
	res.render("exchange.ejs");
});

app.get("/exchange/all", function(req,res){
	var exchanges = [
	{number : 312, member : 98, shift: "6h-8h15", date : "15 mai 1980" },
	{number : 315, member : 930, shift: "6h-8h15", date : "15 mai 1980" },
	{number : 334, member : 2341, shift: "6h-8h15", date : "15 mai 1980" },
	{number : 335, member : 21, shift: "6h-8h15", date : "16 mai 1980" },
	{number : 336, member : 2345, shift: "6h-8h15", date : "20 mai 1980" },
	{number : 340, member : 221, shift: "6h-8h15", date : "22 mai 1980" }
	];
	res.render('exchange_all.ejs', {exchanges:exchanges});
})

app.get("/exchange/:exchangeID", function(req,res){
	var exchangeID = req.params.exchangeID;
	res.render('exchange_details.ejs',{exchangeIDVal : exchangeID});
})

app.get("*", function(req,res){
	console.log("request to catch all");
	res.send("All other routes")
})

app.listen(port,(err)=> {
	if(err){
		return console.log("an error happened with the server",err)
	}
	console.log("server is listening on port")
})