var mongoose = require('mongoose');

var schema = mongoose.Schema({
    login: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    created_at : {
        type: Date,
        default: Date.now
    }
});

mongoose.model('User', schema);
