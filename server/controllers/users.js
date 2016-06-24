var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    // Display all of the users
    showAll: function(req, res) {
        User.find({}, function(err, Users){
            if(err){
                console.log('something went wrong retrieving Users');
            }else {
                res.json({Users: Users});
            }
        })
    },
    // Create a new document on an User
    createUser: function(req, res){

        User.findOne({name: req.body.name}, function(err, user){
            if(err){
                console.log('something went wrong retrieving user');
            }else {
                if(!user){ // user doesn't already exist, add to db
                    var user = new User({name: req.body.name});
                    user.save(function(err){
                        if(err){
                            console.log('something went wrong');
                        }else {
                            // res.redirect('/');
                            res.json({user: user});
                        }
                    })
                }else{ // throw error, user already exists
                    // res.json({error: 'User with name \''+req.body.name+'\' already exists!'});
                    res.json({user: user});
                }
            }
        })
    },
    // Log user in
    getUser: function(req, res){
        User.findOne({name: req.body.name}, function(err, user){
            if(err){
                console.log('something went wrong retrieving users');
            }else {
                if(!user ){
                    // console.log("No user with that name exists, please try again or register above");
                    res.json({login_error: "No user with that name exists, please try again or register above"});
                }else{
                    res.json({user: user});
                }
            }
        })
    },

    // get other users
    getOtherUsers: function(req, res){
        User.find({name: {$ne: req.body.name}}, function(err, users){
            if(err){
                console.log('something went wrong retrieving users');
            }else {
                if(!users ){
                    // console.log("No user with that name exists, please try again or register above");
                    res.json({login_error: "No user with that name exists, please try again or register above"});
                }else{
                    console.log('other users', users);
                    res.json({users: users});
                }
            }
        })
    },


    // Display information about one User
    showOne: function(req, res){
        console.log('find what', req.body);
        User.findOne({name: req.body.name}, function(err, user){
            if(err){
                console.log('something went wrong retrieving users');
            }else {
                // res.render('one', {user: user});
                res.json({user: user});
            }
        })
    },
    updateUser: function(req, res) {
        // User.findOne({_id: req.body._id}, function(err, user){
        //     console.log(user);
        //     if(err){
        //         console.log('something went wrong retrieving orcas');
        //     }else {
        //         // res.render('edit', {orca: orca});
        //         res.redirect('/');
        //
        //     }
        // });
    },
    // Delete an User by name
    deleteUser: function(req, res) {
        User.remove({_id: req.params.id}, function(err){
            if(err){
                console.log('error occured');
            }else {
                res.json({});
            }
        })
    }

}
