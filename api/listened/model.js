var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ListenedSchema = new Schema({

  _user:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  _song:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song'
  },

  date: {
    type: Date
  },

  hidden: {
    type: Boolean
  }

});

var Listened = mongoose.model('Listened', ListenedSchema);

module.exports = Listened;
