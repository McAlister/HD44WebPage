'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.homeView',
  'myApp.aboutView',
  'myApp.priorityView',
  'myApp.schoolView',
  'myApp.healthView',
  'myApp.environmentView',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/homeView'});

}]).controller('myAppCtrl', ['$scope', function($scope) {

    $scope.showNav = false;
    $scope.navClass = "hide";
    $scope.changeClass = function() {

        $scope.showNav = !$scope.showNav;
        if($scope.showNav) {
            $scope.navClass = "show";
        }
        else {
            $scope.navClass = "hide";
        }
    };

}]);
