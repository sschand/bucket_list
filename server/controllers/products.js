var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    // Display all of the products
    showAll: function(req, res) {
        Product.find({}, function(err, Products){
            if(err){
                console.log('something went wrong retrieving Products');
            }else {
                res.json({Products: Products});
            }
        })
    },

    // Create a new document on an Person
    addProduct: function(req, res){
        var product = new Product(req.body);
        product.save(function(err){
            if(err){
                console.log('something went wrong');
            }else {
                res.redirect('/');
            }
        })
    },
    // Display information about one Person
    showOne: function(req, res){
        // Person.findOne({_id: req.params.name}, function(err, product){
        //     if(err){
        //         console.log('something went wrong retrieving products');
        //     }else {
        //         // res.render('one', {product: product});
        //         res.json({product: product});
        //     }
        // })
    },
    updateProduct: function(req, res) {
        Product.findOne({name: req.params.name}, function(err, doc){
            if(err){
                console.log('error occured');
            }else {
                doc.amountLeft =  doc.amountLeft - parseInt(req.params.quantity);
                doc.save();
                res.redirect('/');
            }
        })
    },
    // Delete an Person by name
    deletePerson: function(req, res) {
        // Product.remove({_id: req.params.id}, function(err){
        //     if(err){
        //         console.log('error occured');
        //     }else {
        //         res.json({});
        //     }
        // })
    }

}
