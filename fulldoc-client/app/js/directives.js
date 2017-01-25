(function() {
    'use strict';

    var directives = angular.module("fullDoc.directives", []);

    directives.directive('mainDiv', function() {
        return {
            restrict: 'E',
            templateUrl: '../static/templates/main-div.html',
            controller: 'GlobalController',
            controllerAs : 'globalCtrl',
        };
    });
})();
