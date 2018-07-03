'use strict';

angular.module('myApp.schoolView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/schoolView', {
            templateUrl: 'schoolView/schoolView.html',
            controller: 'SchoolViewCtrl'
        });
    }])

    .controller('SchoolViewCtrl', ['$scope', function($scope) {

        // /////////////// //
        // Active Tab Code //
        // /////////////// //

        $scope.activeTab = null;

        $scope.isActiveTab = function(tabName) {

            return (tabName === $scope.activeTab);
        };

        $scope.tabClass = function(tabName) {

            if (tabName === $scope.activeTab) {
                return 'active';
            }

            return '';
        };

        $scope.activate = function(tabName) {

            if ($scope.activeTab === tabName) {
                $scope.activeTab = null;
            }
            else {
                $scope.activeTab = tabName;
            }
        };

        $scope.getChar = function(tabName) {

            if ($scope.activeTab === tabName) {
                return '-';
            }
            else {
                return '+';
            }
        }

    }]);
