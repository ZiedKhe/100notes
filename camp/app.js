const express = require ("express");
const app = express ();
const ejs = require ('ejs');
const bodyParser = require('body-parser');
const port = 3000;
const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect("mongodb://localhost/facecamp");
// Basics
app.use(bodyParser.urlencoded({extended: true})); // Add body parser
app.set ("view engine", "ejs"); // RENDERING IN EJS

// TEMPORARY TEST DATA
	// var campgrounds = [
	// 	{name : "La Fraie", image : "http://s3.amazonaws.com/virginiablog/wp-content/uploads/2016/03/05154213/North-Bend-Park-Campground.jpg"},
	// 	{name : "Rochette", image : "http://s3.amazonaws.com/virginiablog/wp-content/uploads/2016/03/05154212/CN10111903V_018.jpg"},
	// 	{name : "Haut Lac", image : "http://s3.amazonaws.com/virginiablog/wp-content/uploads/2016/03/05154212/Mount-Rogers-and-Whitetop-Mountain.jpg"}
	// ]

//MongoDB Schema definitions
var campSchema = mongoose.Schema({
	name : String,
	image : String,
	description : String
});
var Campground = mongoose.model('Campground',campSchema);

var blogSchema = mongoose.Schema({
	title : String,
	image : String,
	body : String,
	created : {type:Date, default:Date.now}
})
var Blog = mongoose.model('Blog', blogSchema);

// ROUTES

app.get('/', function(req,res){
	res.render('landing');
});

app.get('/campgrounds', function(req,res){
	Campground.find({}, function (err, allCampgrounds){
		if(err){
			console.log("Error while retrieving Campgrounds in the database")
		} else {
			res.render('campgrounds', {campgrounds : allCampgrounds})
		}
	})


});


app.post('/campgrounds', function(req,res){
	var name = req.body.name;
	var image = req.body.image;
	var description = req.body.desc;
	var newcampground = {name:name, image:image, description:description};
	//campgrounds.push(newcampground);
	Campground.create(newcampground, function (err, newlyCreated){
		if(err){
			console.log('Error while writing new Campground to the database')
		} else {
			console.log(newlyCreated);
			res.redirect('/campgrounds');
		}
	})

})

app.get('/campgrounds/new' , function(req,res){
	res.render('new');
})

app.get('/campgrounds/:id' , function (req,res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log("Error while retrieving campground details")
		} else {
			res.render('show', {campground : foundCampground})
		}
	})

})


app.get('/blog', function (req,res){
	Blog.find({}, function (err,allPosts){
		if (err){
			console.log("Error while retrieving all Posts from database")
		} else {
			res.render('blogIndex', allPosts);
		}
	})
	
})

app.get('/blog/new', function(req,res){
	res.render('blogNew')
})

app.post('/blog', function(req,res){
	var title = req.params.title;
	var image = req.params.image;
	var body = req.params.body;
	var newPost = {title:title,image:image,body:body};
	Blog.create(newPost, function(err,newlyPosted){
		if(err){
			console.log('Error while creating a new Blog Post in the database')
		} else {
			res.redirect("/blog");
		}
	})
})

app.get('blog/:id', function(req,res){
	Blog.findById(req.params.id, function (err,foundPost){
		if(err){
			console.log("Error while retrieving Blog Post")
		} else {
			res.render('blogShow', {post:foundPost})
		}
	})
})


// SERVER

app.listen(port,(err)=> {
	if(err){
		return console.log("an error happened with the server",err)
	}
	console.log("server is listening on port")
})



