var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {
    // Display all of the customers
    showAll: function(req, res) {
        Customer.find({}, function(err, Customers){
            if(err){
                console.log('something went wrong retrieving Customers');
            }else {
                res.json({Customers: Customers});
            }
        })
    },
    // Create a new document on an Customer
    createCustomer: function(req, res){

        Customer.findOne({name: req.params.name}, function(err, customer){
            if(err){
                console.log('something went wrong retrieving customer');
            }else {
                if(!customer){ // customer doesn't already exist, add to db
                    var customer = new Customer({name: req.params.name});
                    customer.save(function(err){
                        if(err){
                            console.log('something went wrong');
                        }else {
                            res.redirect('/');
                        }
                    })
                }else{ // throw error, customer already exists
                    res.json({error: 'Customer with name \''+req.params.name+'\' already exists!'});
                }
            }
        })



    },
    // Display information about one Customer
    showOne: function(req, res){
        // Customer.findOne({_id: req.params.name}, function(err, customer){
        //     if(err){
        //         console.log('something went wrong retrieving customers');
        //     }else {
        //         // res.render('one', {customer: customer});
        //         res.json({customer: customer});
        //     }
        // })
    },
    updateCustomer: function(req, res) {
        // Customer.findOne({_id: req.body._id}, function(err, customer){
        //     console.log(customer);
        //     if(err){
        //         console.log('something went wrong retrieving orcas');
        //     }else {
        //         // res.render('edit', {orca: orca});
        //         res.redirect('/');
        //
        //     }
        // });
    },
    // Delete an Customer by name
    deleteCustomer: function(req, res) {
        Customer.remove({_id: req.params.id}, function(err){
            if(err){
                console.log('error occured');
            }else {
                res.json({});
            }
        })
    }

}
