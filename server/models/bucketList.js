var mongoose = require('mongoose');

//Schema
var bucketSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    user_name: {type: String},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: "Users"}
    // ,
    // bucket_items: [{type: String}]
}, {timestamps: true})

// register schema as a model
var Bucket = mongoose.model('Bucket', bucketSchema);
