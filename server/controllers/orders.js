var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = {
    // Display all of the persons
    showAll: function(req, res) {
        Order.find({}, function(err, Orders){
            if(err){
                console.log('something went wrong retrieving Orders');
            }else {
                res.json({Orders: Orders});
            }
        })
    },
    // Create a new document on an Orders
    createOrder: function(req, res){
        var order = new Order({name: req.body.name, product: req.body.product, quantity: req.body.quantity});
        order.save(function(err){
            if(err){
                console.log('something went wrong');
            }else {
                res.redirect('/');
            }
        });
    },
    // Display information about one Person
    showOne: function(req, res){
        // Person.findOne({_id: req.params.name}, function(err, person){
        //     if(err){
        //         console.log('something went wrong retrieving persons');
        //     }else {
        //         // res.render('one', {person: person});
        //         res.json({person: person});
        //     }
        // })
    },
    updatePerson: function(req, res) {
        // Person.findOne({_id: req.body._id}, function(err, person){
        //     console.log(person);
        //     if(err){
        //         console.log('something went wrong retrieving orcas');
        //     }else {
        //         // res.render('edit', {orca: orca});
        //         res.redirect('/');
        //
        //     }
        // });
    },
    // Delete an Person by name
    deletePerson: function(req, res) {
        // Order.remove({_id: req.params.id}, function(err){
        //     if(err){
        //         console.log('error occured');
        //     }else {
        //         res.json({});
        //     }
        // })
    }

}
