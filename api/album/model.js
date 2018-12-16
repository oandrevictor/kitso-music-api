var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AlbumSchema = new Schema({

  spotify_id: {
    type: String,
    required: true
  },

  release_date: {
    type: Date
  },

  title: {
    type: String,
    required: true,
    default: 'TBA'
  },

  _songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Song'
    }
  ],

  _artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Performer'
  },

  image: {
    type: String
  },

  description: {
    type: String
  }

});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
