var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PerformerSchema = new Schema({

  spotify_id: {
    type: String,
    required: true
  },

  _albuns: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Album'
    }
  ],

  name : {
    type: String
  },

  _type: {
    type: String,
    required: true,
    enum: ['person', 'group']
  },

  fallback_image: {
    type: String
  },

  bio: {
    type: String
  }

});

var Performer = mongoose.model('Performer', PerformerSchema);

module.exports = Performer;
