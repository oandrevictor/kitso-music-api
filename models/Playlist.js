var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PerformerSchema = new Schema({

  _spotify_id: {
    type: String
  },

  _user:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  _songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Song'
    }
  ],

  hidden:
  {
    type: Boolean,
    default: false
  },


});

var Performer = mongoose.model('Performer', PerformerSchema);

module.exports = Performer;
