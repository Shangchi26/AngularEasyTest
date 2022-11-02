var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
    console.log("My controller.....");

    $scope.products = [
        {product: "Product One", prime: "22.50"},
        {product: "Product Two", prime: "15.00"},
        {product: "Product Three", prime: "123.82"},    
    ];

    $scope.addProduct = function(){
        $scope.products.push($scope.newProduct);
        $scope.newProduct = {};
        $scope.message = "New Product Added successfully";
    };

    $scope.selectProduct = function(product) {
        console.log(product);
        $scope.clickedProduct = product;
    };

    $scope.editProduct = function(){
        $scope.message = "Product Edited successfully";
    };

    $scope.deleteProduct = function(){ 
        $scope.products.splice($scope.products.indexOf($scope.clickedProduct), 1);
        $scope.message = "User Deleted successfully";
    };

    $scope.clearMessage = function(){
        $scope.message ="";
    };

    // for (let i = 0; i <= products.length; i++) {
    //     $scope.amount[i] = 0;
    //     $scope.myFunction = function (index) {
    //     $scope.amount[index] = $scope.amount[index] + 1;
    // };
    // }
    
});

