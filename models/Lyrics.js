var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LyricSchema = new Schema({

  body: {
    type: String,
    required: true
  },

  _song: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song'
  },

  is_explicit: {
    type: Boolean
  }

});

var Lyric = mongoose.model('Lyric', LyricSchema);

module.exports = Lyric;
