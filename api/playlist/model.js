var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PlaylistSchema = new Schema({

  spotify_id: {
    type: String
  },

  title: {
    type: String,
    required: true,
    default: 'Playlist'
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

var Playlist = mongoose.model('Performer', PlaylistSchema);

module.exports = Playlist;
