// Dashboard controller
myApp.controller('IndexController', function($scope, UserFactory, BucketFactory,$location) {
// 
// $scope.item_error = "";
//     // Add bucket list item
//     $scope.addBucketItem = function(){
//         if(!$scope.bucketList){
//             $scope.item_error = "Bucket List item is required";
//         }else {
//             $scope.item_error = "";
//
//             $scope.currrent_user = "";
//
//             UserFactory.getUser(function(data){
//                 $scope.currrent_user = data;
//             });
//
//             BucketFactory.create($scope.bucketList, $scope.currrent_user._id, $scope.currrent_user.name, function(data){
//                 //redirect to Dashboard
//                 $location.url('/dashboard');
//             });
//         }
//     }
    // $scope.products = [];
    // $scope.customers = [];
    // $scope.orders = [];
    //
    // // Set products to products from db
    // ProductFactory.index(function(data) {
    //     $scope.products = data;
    // });
    //
    // // Set orders to orders from db
    // OrderFactory.index(function(data) {
    //     $scope.orders = data;
    // });
    //
    // // Set customers to customers from db
    // CustomerFactory.index(function(data) {
    //     $scope.customers = data;
    // });
    //
    // // Time ago
    // $scope.timeAgo = function(sentDate) {
    //     return moment(sentDate).fromNow();
    // };
})
