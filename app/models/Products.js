var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var schema = mongoose.Schema({
    cost: {
        type : Number,
        required : true
    },
    name: {
        type : String,
        required : true
    },

    avaible:{
      type : Boolean,
      required : false,
      default : true
    },

    created_at : {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Product', schema);
