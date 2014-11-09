var app = angular.module('myApp', []);

app.factory('MyLogginService', function(){
    return {
        log: function (argument) {
            console.log(argument);
        }
    };
});

app.factory('AlertLogginService', function () {
    return {
        log: function (argument) {
            window.alert(argument);
        }
    };
});

app.controller('MainController', ['$scope', 'AlertLogginService',
    function($scope, logger){
    $scope.name = 'Guest';

    $scope.myFunc = function(){
        logger.log('Hello!');
    };
}]);