'use strict';

angular.module('myApp.aboutView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aboutView', {
    templateUrl: 'aboutView/aboutView.html',
    controller: 'AboutViewCtrl'
  });
}])

.controller('AboutViewCtrl', [function() {

}]);