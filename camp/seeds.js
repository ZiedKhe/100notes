var mongoose = require('mongoose');
var Campground = require('./models/campgrounds');
var Comment = require('./models/comment');


var data = [
	{   
		name :'post1',
		image: 'https://farm9.staticflickr.com/8240/8547598637_89d7860d18.jpg',
		description: 'super bike',
	},
	{   
		name :"post2",
		image: 'https://farm9.staticflickr.com/8241/8528223650_6b401ed453.jpg',
		description: 'nice bike',
	},
	{   
		name : 'post3',
		image: 'https://farm7.staticflickr.com/6189/6045521505_47d5cc4f8a.jpg',
		description: 'my bike',
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
					})
				}
			})
		}	)
		

	}

})	
		}
	})

}

module.exports = seedDB;