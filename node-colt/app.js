const path = require("path")
const express = require("express");
var RedisStore =  require('connect-redis')(express)
const app = express();
const ejs = require ('ejs')
const port = 3000

app.use(express.session({store: new RedisStore}));


app.use(express.session({ store: new RedisStore({
  host:'127.0.0.1',
  port:6380,
  prefix:'sess'
}), secret: 'SEKR37' }));

app.get("/exchange", function(req,res){
	console.log("Exchange Shift");
	res.render("exchange.ejs");
});

app.get("/exchange/all", function(req,res){
	res.render('exchange_all.ejs');
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