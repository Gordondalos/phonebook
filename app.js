var app = angular.module('myApp', []);

app.controller('MainController', ['$scope',
    function($scope){
        
}]);

app.filter('decorator', function () {
    return function(input, symbol){
        return symbol + " " + input + " " + symbol;
    };
});















