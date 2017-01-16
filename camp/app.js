const express = require ("express");
const app = express ();
const ejs = require ('ejs');

// RENDERING IN EJS

app.set ("view engine", "ejs");

// ROUTES

app.get('/', function(req,res){
	res.render('views/landing');
});

app.get('/campgrounds', function(req,res){

	var campgrounds = [
		{name : "La Fraie", image : ""},
		{name : "Rochette", image : ""},
		{name : "Haut Lac", image : ""}
	]
	res.render('views/campgrounds', {campgrounds : campgrounds})
});

// SERVER

app.listen(port,(err)=> {
	if(err){
		return console.log("an error happened with the server",err)
	}
	console.log("server is listening on port")
})



