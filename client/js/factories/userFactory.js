// Customer Factory
myApp.factory('UserFactory', function($http) {
    var factory = {};
    var user;
    var current_user = {};
    var list;


    // Add User
    factory.create = function(info, callback) {
        $http.post('/newUser', info).success(function (data){
            if (typeof data == 'object') {
                userExists = data;
            }else{
                userExists = '';
            }
            callback(user, userExists);
        });
    }

    // log User
    factory.logIn = function(info, callback) {
        $http.post('/logIn', info).success(function (data){
            user = data.user;
            callback(data);
        });
    }

    // get current user
    factory.getUser = function(callback){
        console.log('getting user', user, 'getting curr user', current_user);
        callback(user);
    }



    // get other users
    factory.getOtherUsers = function(notUser, callback){
        $http.post('/getOtherUsers', notUser).success(function (data){
            user = data.user;
            callback(data);
        });
    }


    // get user list
    factory.getList = function(forUser, callback){
        // console.log('getting user', user, 'getting curr user', current_user);
        $http.post('/getUserList', forUser).success(function (data){
            list = data;
            callback(data);
        });
    }

    // // delete customers
    // factory.delete = function(customer, callback) {
    //     $http.delete('/remove/'+customer._id).success(function(data) {
    //         callback(customers);
    //     });
    // }
    return factory;
});
