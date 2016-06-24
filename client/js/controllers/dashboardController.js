// Dashboard controller
myApp.controller('DashboardController', function($scope, UserFactory, BucketFactory, $location) {

    $scope.current_user;
    $scope.item_error = "";
    $scope.other_users;
    $scope.list;

    $scope.get_profile_user;


    UserFactory.getUser(function(data){
        $scope.current_user = data;
    });

    // Logout
    $scope.logout = function(){
        $location.url('/');
    }

    // Add bucket list item
    $scope.addToList = function(){

        // console.log('bc', $scope.bucketList, 'curr', $scope.current_user);
        var user_1 = $scope.current_user.name;
        var user_2 = $scope.bucketList.user_name;


        BucketFactory.create($scope.bucketList, user_1, user_2, function(data){
            // reload data

            UserFactory.getList($scope.current_user, function(data){
                $scope.list = data.user.bucketList;
                $scope.current_user = data;
            });

        });


    }

    // Get other users
    UserFactory.getOtherUsers($scope.current_user, function(data){
        $scope.other_users = data.users;
    });

    //Get list
    UserFactory.getList($scope.current_user, function(data){
        $scope.list = data.user.bucketList;
        $scope.current_user = $scope.current_user;
    });

    $scope.user_profile = function(user_for_info){
        BucketFactory.get_profile_user(user_for_info, function(data){
            $scope.get_profile_user = user_for_info;
        })
    };
    // // Time ago
    // $scope.timeAgo = function(sentDate) {
    //     return moment(sentDate).fromNow();
    // };
})
