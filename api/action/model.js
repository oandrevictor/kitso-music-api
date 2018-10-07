var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ActionSchema = new Schema({

  date: {
    type: Date
  },

  _users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],

  _medias: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ]

});

var Action = mongoose.model('Action', ctionSchema);

module.exports = Action;
