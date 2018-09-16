var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PerformerSchema = new Schema({

  _spotify_id: {
    type: String,
    required: true
  },

  _people: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Person'
    }
  ],

  _albuns: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Album'
    }
  ],

  title : {
    type: String
  }

  _type: {
    type: String,
    required: true,
    enum: ['person', 'group']
  }

});

var Performer = mongoose.model('Performer', PerformerSchema);

module.exports = Performer;
