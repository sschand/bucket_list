var mongoose = require('mongoose');

//Schema
var productSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    link: {type: String},
    amountLeft: {type: Number}
}, {timestamps: true})

// register schema as a model
var Product = mongoose.model('Product', productSchema);
