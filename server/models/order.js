var mongoose = require('mongoose');

//Schema
var orderSchema = new mongoose.Schema({
    name: {type: String},
    product: {type: String},
    quantity: {type: Number}
}, {timestamps: true})

// register schema as a model
var Order = mongoose.model('Order', orderSchema);
