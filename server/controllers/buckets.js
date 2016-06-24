var mongoose = require('mongoose');
var Bucket = mongoose.model('Bucket');
var User = mongoose.model('User');

// 
// var user;
// var first_user = 2;

module.exports = {
    // Display all of the buckets
    showAll: function(req, res) {
        Bucket.find({}, function(err, Buckets){
            if(err){
                console.log('something went wrong retrieving Buckets');
            }else {
                res.json({Buckets: Buckets});
            }
        })
    },
    // Create a new document on an Bucket
    createBucket: function(req, res){
        // first_user--;
        // if(first_user == 2){
        //     user = req.body.user_name
        // }
                    var bucket = new Bucket({name: req.body.name, user_id: req.body.user_id, user_name: req.body.user_name, description: req.body.description});
                    bucket.save(function(err){
                        if(err){
                            console.log('something went wrong');
                        }else {

                            // Update user list
                            User.findOne({name: req.body.user_name}, function(err, user){
                                // var comment = new Comment({name: req.body.name, text: req.body.comment});
                                // comment._user = user._id;
                                user.bucketList.push({name: req.body.name, done: "0", user_name: req.body.user_name, description: req.body.description});


                                        user.save(function(err){
                                             if(err) {
                                                  console.log('Error');
                                             } else {

                                                                              res.json({new: req.body});

                                             }
                                         });

                            })


                            // User.findOne({name: req.body.user_name}, function(err, user){
                            //     // console.log(user);
                            //     if(err){
                            //         console.log('something went wrong retrieving orcas');
                            //     }else {
                            //
                            //
                            //         // res.render('edit', {orca: orca});
                            //         // res.redirect('/');
                            //         res.json({new: req.body});
                            //
                            //     }
                            // });




                        }
                    })
        //         }else{ // throw error, bucket already exists
        //             res.json({error: 'Bucket with name \''+req.body.name+'\' already exists!'});
        //         }
        //     }
        // })
    },
    // Log bucket in
    getBucket: function(req, res){
        Bucket.findOne({name: req.body.name}, function(err, bucket){
            if(err){
                console.log('something went wrong retrieving buckets');
            }else {
                if(!bucket ){
                    // console.log("No bucket with that name exists, please try again or register above");
                    res.json({login_error: "No bucket with that name exists, please try again or register above"});
                }else{
                    res.json({bucket: bucket});
                }
            }
        })
    },

    // Display information about one Bucket
    showOne: function(req, res){
        // Bucket.findOne({_id: req.params.name}, function(err, bucket){
        //     if(err){
        //         console.log('something went wrong retrieving buckets');
        //     }else {
        //         // res.render('one', {bucket: bucket});
        //         res.json({bucket: bucket});
        //     }
        // })
    },
    updateBucket: function(req, res) {
        // Bucket.findOne({_id: req.body._id}, function(err, bucket){
        //     console.log(bucket);
        //     if(err){
        //         console.log('something went wrong retrieving orcas');
        //     }else {
        //         // res.render('edit', {orca: orca});
        //         res.redirect('/');
        //
        //     }
        // });
    },
    // Delete an Bucket by name
    deleteBucket: function(req, res) {
        Bucket.remove({_id: req.params.id}, function(err){
            if(err){
                console.log('error occured');
            }else {
                res.json({});
            }
        })
    }

}
