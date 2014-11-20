var app = angular.module('myApp', []);

app.controller('MainController', ['$scope',
    function($scope){
        $scope.user = {
            name: 'Radik',
            surname: 'Fattakhov'
        };

        $scope.john = {
            name: 'John',
            surname: 'Doe'
        };
}]);

app.directive('ditUserInfo', function(){
    return {
        restrict: 'AE',
        scope: {
           user: '=' 
        },
        template: 'Mr. <b>{{user.name}}</b> <i>{{user.surname}}</i>'
    };
});