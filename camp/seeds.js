var mongoose = require('mongoose');
var Campground = require('./models/campgrounds');
var Comment = require('./models/comment');


var data = [
	{   
		name :"Walnut's Creek",
		image: 'https://images.unsplash.com/photo-1482376292551-03dfcb8c0c74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=3b4da5252b7d4d51309b1a8d6cbd9709',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ipsam nulla ullam dicta illum officia delectus quisquam dolorum. Dolorem, ipsa harum adipisci suscipit voluptatem quod officia! Ipsum perferendis voluptatibus ut.',
	},
	{   
		name :"Ingerson valley view",
		image: 'https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=9f4ac45782b3a59d8f1be8226bc5a98c',
		description: 'nLorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ipsam nulla ullam dicta illum officia delectus quisquam dolorum. Dolorem, ipsa harum adipisci suscipit voluptatem quod officia! Ipsum perferendis voluptatibus ut.',
	},
	{   
		name : 'Grand Canyon rest',
		image: 'https://images.unsplash.com/photo-1465695954255-a262b0f57b40?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=37d2758ecb885811d315f4b5540c6531',
		description: 'my bike Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ipsam nulla ullam dicta illum officia delectus quisquam dolorum. Dolorem, ipsa harum adipisci suscipit voluptatem quod officia! Ipsum perferendis voluptatibus ut.',
	}

]

function seedDB(){
	Comment.remove({},function(err){
		if(err){
			console.log(err);
		} else {
			Campground.remove({}, function(err){
	if (err) {
		console.log(err)
	} else {
		console.log('Database Cleaned')
		data.forEach(function(campground){
			Campground.create(campground,function(err, createdCamp){
				if(err){
					console.log(err);
				} else {
					console.log("New entry created");
					Comment.create({
						text: 'incredible really amazing',
						author: 'Trump'
					}, function(err,createdComment){
						if(err){
							console.log(err);
						} else {
							createdCamp.comments.push(createdComment);
							createdCamp.save();
							console.log('comment created on camp');
						}
					});
				}
			})
		}	)
		

	}

})	
		}
	})

}

module.exports = seedDB;