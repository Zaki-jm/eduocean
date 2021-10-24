var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Genre = new Schema(
  {
    name: {type: String, required: true, min: 3, max: 100},
  }
);

//Export model
module.exports = mongoose.model('Genre', Genre);
