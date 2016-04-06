var Mongoose = require('mongoose');


var MessageSchema = new Mongoose.Schema({
  "email" : { type: String },
  "content" : { type: String },
  "created" : { type: Date }
});

exports.Message = Mongoose.model('message', MessageSchema);