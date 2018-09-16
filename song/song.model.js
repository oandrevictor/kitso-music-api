var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SongSchema = new Schema({

  _spotify_id: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true,
    default: 'TBA'
  },

  _composers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Person'
    }
  ],

  _performers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Performer'
    }
  ],

  _albuns: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Album'
    }
  ],

  _lyrics: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lyric'
  },

  _videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Video'
    }
  ],

  duration_ms: {
    type: Number,
    required: true,
    default: 99999
  },

  release_date: {
    type: Date
  },

  is_explicit: {
    type: Boolean
  }

});

var Song = mongoose.model('Song', SongSchema);

module.exports = Song;
