const  express 			= require('express');
const mongoose 			= require('mongoose');
const ejs 				= require('ejs');
const bodyParser		= require('body-parser');
const User 				= require('./models/user')
const passport 			= require('passport');
const LocalStrategy 	= require('passport-local');
const passLocalMongoose	= require('passport-local-mongoose')




mongoose.connect('mongodb://localhost/auth_demo');
var app = express();
const port = 3000;
app.set('view engine', 'ejs');

app.use(require('express-session')({
	secret:'testing some random authentication',
	resave : false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get('/', function(req,res){
	res.render("home")
})

app.get('/secret', function(req,res){
	res.render('secret')
})

app.listen(port,(err)=> {
	if(err){
		return console.log("an error happened with the server",err)
	}
	console.log("server is listening on port")
})