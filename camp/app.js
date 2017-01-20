const express = require ("express");
const app = express ();
const ejs = require ('ejs');
const port = 3000;

// RENDERING IN EJS

app.set ("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));	

// ROUTES

app.get('/', function(req,res){
	res.render('landing');
});

app.get('/campgrounds', function(req,res){

	var campgrounds = [
		{name : "La Fraie", image : "http://s3.amazonaws.com/virginiablog/wp-content/uploads/2016/03/05154213/North-Bend-Park-Campground.jpg"},
		{name : "Rochette", image : "http://s3.amazonaws.com/virginiablog/wp-content/uploads/2016/03/05154212/CN10111903V_018.jpg"},
		{name : "Haut Lac", image : "http://s3.amazonaws.com/virginiablog/wp-content/uploads/2016/03/05154212/Mount-Rogers-and-Whitetop-Mountain.jpg"}
	]
	res.render('campgrounds', {campgrounds : campgrounds})
});


app.post('/campgrounds', function(req,res){
	res.send
})
// SERVER

app.listen(port,(err)=> {
	if(err){
		return console.log("an error happened with the server",err)
	}
	console.log("server is listening on port")
})



