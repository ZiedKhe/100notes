const express = require ("express");
const app = express ();
const ejs = require ('ejs');
const bodyParser = require('body-parser');
const port = 3000;
const mongoose = require('mongoose');
const methodoverride = require('method-override');
const expressSanitizer = require('express-sanitizer');
var Campground = require('./models/campgrounds');

var seedDB = require('./seeds');

// MongoDB connection
mongoose.connect("mongodb://localhost/facecamp");
// Basics
app.use(express.static('public')) // serve static files in public directory
app.use(bodyParser.urlencoded({extended: true})); // Add body parser
app.use(expressSanitizer()); // MUST be placed AFTER bodyParser
app.set ("view engine", "ejs"); // RENDERING IN EJS
app.use(methodoverride('_method'))

// TEMPORARY TEST DATA
	// var campgrounds = [
	// 	{name : "La Fraie", image : "http://s3.amazonaws.com/virginiablog/wp-content/uploads/2016/03/05154213/North-Bend-Park-Campground.jpg"},
	// 	{name : "Rochette", image : "http://s3.amazonaws.com/virginiablog/wp-content/uploads/2016/03/05154212/CN10111903V_018.jpg"},
	// 	{name : "Haut Lac", image : "http://s3.amazonaws.com/virginiablog/wp-content/uploads/2016/03/05154212/Mount-Rogers-and-Whitetop-Mountain.jpg"}
	// ]

//DB test data seed

seedDB();

//MongoDB Additional Schema definitions


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
			res.render('blogIndex', {allPosts:allPosts});
		}
	})
	
})

app.get('/blog/new', function(req,res){
	res.render('blogNew')
})

app.post('/blog', function(req,res){
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.create(req.body.blog, function(err,newlyPosted){
		if(err){
			console.log('Error while creating a new Blog Post in the database')
		} else {
			console.log(newlyPosted);
			res.redirect("/blog");
		}
	})
})

app.get('/blog/:id', function(req,res){
	Blog.findById(req.params.id, function (err,foundPost){
		if(err){
			console.log("Error while retrieving Blog Post")
			console.log('req.params.id')
		} else {
			res.render('blogShow', {post:foundPost})
		}
	})
})

app.get('/blog/:id/edit', function(req, res){
	Blog.findById(req.params.id, function(err,foundPost){
		if (err){
			res.redirect('/blog');
		} else {
			res.render('blogEdit',{post:foundPost})
		}
	})
})

app.put('/blog/:id', function(req,res){
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, foundPost){
		if(err){
			res.redirect('/blog')
		} else {
			res.redirect('/blog/'+req.params.id)
		}
	})
})

app.delete('/blog/:id', function(req,res){
	Blog.findByIdAndRemove(req.params.id, function(err, foundPost){
		if (err){
			res.redirect('/blog/'+req.params.id)
		} else {
			res.redirect('/blog')
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








