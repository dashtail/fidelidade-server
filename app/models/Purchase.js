var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var schema = mongoose.Schema({
    value: {
        type : Number,
        required : true
    },
    photo_id: {
        type : String,
        required : true
    },

    score_validate:{
      type : Date,
      required : false
    },

    created_at : {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Purchase', schema);
