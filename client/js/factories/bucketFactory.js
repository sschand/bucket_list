// Customer Factory
myApp.factory('BucketFactory', function($http) {
    var factory = {};
    var bucket = {};

    var get_profile_user;

    // Get all the customers
    factory.index = function(callback) {
        $http.get('/getCustomers').success(function(data){
            customers = data.Customers;

            callback(customers);
        });
    }

    // Add Bucket
    factory.create = function(info, user_1, user_2, callback) {
        // info.user_id = user_id;
        info.user_name = user_1;

        // console.log('to be info', info);
        $http.post('/newBucket', info).success(function (data){
            bucket = info;

            info.user_name = user_2;

            // console.log('to be info', info);
            $http.post('/newBucket', info).success(function (data){
                bucket = info;
                // callback(bucket);
            });
            callback(bucket);
        });


    }
    //

    factory.get_profile_user = function(profile_user, callback){
        get_profile_user = profile_user;
    }

    factory.get_profile_for = function(callback){
        callback(get_profile_user);
    }
    // // log Bucket
    // factory.logIn = function(info, callback) {
    //     $http.post('/logIn', info).success(function (data){
    //         bucket = data.bucket;
    //         callback(data);
    //     });
    // }
    //
    // // delete customers
    // factory.delete = function(customer, callback) {
    //     $http.delete('/remove/'+customer._id).success(function(data) {
    //         callback(customers);
    //     });
    // }
    return factory;
});
