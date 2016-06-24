// Users Controller
myApp.controller('UsersController', function($scope, UserFactory, $location) {
    $scope.user;
    // $scope.errors = [];
    //
    // // On page load, get all users and put into scope
    // UserFactory.index(function(data, userExists) {
    //     $scope.users = data;
    //     $scope.errors = [];
    //     // $scope.userExists = userExists;
    // });
    //
    // $scope.toDay = function(date) {
    //     return moment(date).format("MMMM Do YYYY")
    // };
    // Add user
    $scope.addUser = function(){
        // console.log('add:', $scope.newUser);
        UserFactory.create($scope.newUser, function (data, userExists){
            $scope.newUser = "";
$scope.login_message = "You have been registered, please log in below.";
            // UserFactory.index(function(data) {
            //     if(!userExists){
            //         $scope.users = data;
            //
            //     }
            //     $scope.errors.push(userExists);
            //
            // });
        });
    }


    // log user in
    $scope.logUserIn = function(){
        UserFactory.logIn($scope.logUser, function (data, userExists){

            if(data.login_error){
                $scope.login_error = data.login_error;
            }else{
                $scope.login_error = "";
                $location.url('/dashboard');
            }
            // UserFactory.index(function(data) {
            //     if(!userExists){
            //         $scope.users = data;
            //
            //     }
            //     $scope.login_error = "That is not a user name in our system, please try again or register above.";
            //     // $scope.errors.push(userExists);
            //
            // });

            $scope.logUser = "";
        });
    }

    // Get other users
    

    // // Delete user
    // $scope.delete = function(user){
    //     UserFactory.delete(user, function(){
    //         // After delete is done, just update the view by refreshing the scope data
    //         UserFactory.index(function(data) {
    //             $scope.users = data;
    //             $scope.newOrder = {};
    //         });
    //     })
    // }
});
