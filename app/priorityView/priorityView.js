'use strict';

angular.module('myApp.priorityView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/priorityView', {
            templateUrl: 'priorityView/priorityView.html',
            controller: 'PriorityViewCtrl'
        });
    }])

    .controller('PriorityViewCtrl', [function() {

    }]);
