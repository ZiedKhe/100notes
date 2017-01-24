const path = require("path")
const express = require("express");
// var RedisStore =  require('connect-redis')(express)
const bodyParser = require("body-parser");
const app = express();
const ejs = require ('ejs');
const port = 3000;


// SESSION
// app.use(express.session({ store: new RedisStore({
//   host:'127.0.0.1',
//   port:6380,
//   prefix:'sess'
// }), secret: 'SEKR37' }));

// Add body parser
app.use(bodyParser.urlencoded({extended: true}));
// Serve the static content of "public" directory
app.use(express.static('public'));


// TEST DATA - to be removed
var myShift = [
	{number : 312, member : 98, shift: "6h-8h15", date : "15 mai 1980", status : '' },
	{number : 313, member : 98, shift: "6h-8h15", date : "15 mai 1980", status : 'reserved' },
	{number : 314, member : 98, shift: "6h-8h15", date : "15 mai 1980", status : '' }
	]

var exchanges = [
	{number : 312, member : 98, shift: "6h-8h15", date : "15 mai 1980", status : '' },
	{number : 315, member : 930, shift: "6h-8h15", date : "15 mai 1980", status : '' },
	{number : 334, member : 2341, shift: "6h-8h15", date : "15 mai 1980", status : '' },
	{number : 335, member : 21, shift: "6h-8h15", date : "16 mai 1980", status : '' },
	{number : 336, member : 2345, shift: "6h-8h15", date : "20 mai 1980", status : '' },
	{number : 340, member : 221, shift: "6h-8h15", date : "22 mai 1980", status : '' }
	];


// ROUTES

app.get("/exchange", function(req,res){
	console.log("Exchange Shift");
	res.render("exchange.ejs", {myShift : myShift});
});

app.post("/proposeSwitch", function(req,res){
	// TODO : proposeSwitch - add logic to modify shift objects - Need body-parser
	res.send("Proposition sent");
})

app.get("/exchange/all", function(req,res){

	res.render('exchange_all.ejs', {exchanges:exchanges});
})

app.get("/exchange/:exchangeID", function(req,res){
	var exchangeID = req.params.exchangeID;
	res.render('exchange_details.ejs',{exchangeIDVal : exchangeID});
})

app.get("/*", function(req,res){
	console.log("request to catch all");
	res.send("All other routes")
})

app.listen(port,(err)=> {
	if(err){
		return console.log("an error happened with the server",err)
	}
	console.log("server is listening on port")
})