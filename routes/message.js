var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body

    var MessageSchema = new models.Message({
    	"email": req.body.email,
		"content": req.body.content,
		"created": new Date()
    });

     MessageSchema.save(function(err){
		if(err)	console.log(err);
    	res.redirect('/');
	});
};