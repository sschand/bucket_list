var mongoose = require('mongoose');

//Schema
var userSchema = new mongoose.Schema({
    name: {type: String},
    bucketList: []
}, {timestamps: true})

// register schema as a model
var User = mongoose.model('User', userSchema);
