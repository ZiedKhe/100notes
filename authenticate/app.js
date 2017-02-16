const  express 			= require('express');
const mongoose 			= require('mongoose');
const ejs 				= require('ejs');
const bodyParser		= require('body-parser');
const User 				= require('./models/user')
const passport 			= require('passport');
const LocalStrategy 	= require('passport-local');
const passLocalMongoose	= require('passport-local-mongoose')
const port 				= 3000;

var app = express();

mongoose.connect('mongodb://localhost/auth_demo');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(require('express-session')({
	secret:'testing some random authentication',
	resave : false,
	saveUninitialized: false
}));

//mandatory passport activation
app.use(passport.initialize());
app.use(passport.session());

//used fir encoding and decoding purposes of session
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//========== ROUTES ===========

app.get('/', function(req,res){
	res.render("home")
})

app.get('/secret',isLoggedIn, function(req,res){
	res.render('secret')
})

// Register routes
app.get('/register', function(req,res){
	res.render('register')
})

app.post('/register', function (req,res){
	req.body.username
	req.body.password
	User.register(new User({username:req.body.username}), req.body.password, function(err,user){
		if (err){
			console.log(err);
			res.redirect('/register')
		} else {
			passport.authenticate("local")(req,res, function(){
				res.redirect('/secret')
			})
		}
	})
})

//Login routes
app.get('/login', function(req,res){
		res.render('login')
})


app.post('/login', passport.authenticate(
	'local',
	{
		successRedirect:'/secret',
		failureRedirect:'/login'
	}),
	function(req,res){

});

app.get('/logout', function(req,res){
	req.logout();
	res.redirect('/');
})

//Middleware to check if the user is logged in
function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.render('login');
}

// ============= SERVER =============
app.listen(port,(err)=> {
	if(err){
		return console.log("an error happened with the server",err)
	}
	console.log("server is listening on port")
})