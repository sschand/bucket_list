// var customers = require('../controllers/customers.js');
// var orders = require('../controllers/orders.js');
// var products = require('../controllers/products.js');
var users = require('../controllers/users.js');
var buckets = require('../controllers/buckets.js');

module.exports = function(app) {

    // Register User


    // log user in
    app.post('/logIn', function(req, res){
        console.log('in route',req.body);
        // users.showAll(req, res);
        users.getUser(req, res);
    });
    //
    // Create Customer
    app.post('/newUser', function(req, res) {
        users.createUser(req, res);
    });

    // Create Bucket
    app.post('/newBucket', function(req, res) {

        console.log('routeinfor', req.body);
        buckets.createBucket(req, res);
    });

    // getOtherUsers
    app.post('/getOtherUsers', function(req, res) {
        users.getOtherUsers(req, res);
    });

    // getuser list
    app.post('/getUserList', function(req, res) {
        console.log('geting route', req.body);
        // users.showOne(req, res);
        users.getUser(req, res);
    });
    //
    // // Delete Customer
    // app.delete('/remove/:id/', function(req, res){
    //     customers.deleteCustomer(req, res);
    // });
    //
    // // Get all Orders
    // app.get('/getOrders', function(req, res) {
    //     orders.showAll(req, res);
    // });
    //
    // // Create Order
    // app.post('/newOrder', function(req, res) {
    //     orders.createOrder(req, res);
    // });
    //
    // // Get all Products
    // app.get('/getProducts', function(req, res) {
    //     products.showAll(req, res);
    // });
    //
    // // Add new product
    // app.post('/newProduct', function(req, res){
    //     products.addProduct(req, res);
    // });
    //
    // app.get('/newProduct/:name', function(req, res){
    //     products.addProduct(req, res);
    // });
    //
    // // Update product quantity
    // app.post('/product/:name/:quantity', function(req, res){
    //     products.updateProduct(req, res);
    // });

}
