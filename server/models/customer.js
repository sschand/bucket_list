var mongoose = require('mongoose');

//Schema
var customerSchema = new mongoose.Schema({
    name: {type: String}
}, {timestamps: true})

// register schema as a model
var Customer = mongoose.model('Customer', customerSchema);
