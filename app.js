var app = angular.module('myApp', []);

app.factory('MyLogginService', function(){
    return {
        log: function (argument) {
            console.log(argument);
        }
    };
});

app.factory('AlertLogginService', ['$window',function ($window) {
    return {
        log: function (argument) {
            $window.alert(argument);
        }
    };
}]);

app.controller('MainController', ['$scope', 'AlertLogginService',
    function($scope, logger){
    $scope.name = 'Guest';

    $scope.myFunc = function(){
        logger.log('Hello!');
    };
}]);

app.factory('SharedData', function(){
    return {
        someData: 'Test'
    };
});

app.controller('Test1', ['$scope', 'SharedData', function($scope, sharedData){
    $scope.data = sharedData;
}]);

app.controller('Test2', ['$scope', 'SharedData', function($scope, sharedData){
    $scope.changeData = function(){
        sharedData.someData = 'Data Changed!';
    };
}]);
















