var models = require('../models');

exports.view = function(req, res) {
    var data = {data: []};

    models.Message.find().exec(createMessage);

    function createMessage(err, messages) {
      if(err)
    	return console.error(err);
      res.render('index', {'data': messages});
    }
}