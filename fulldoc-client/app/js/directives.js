(function() {
    'use strict';

    var directives = angular.module("fullDocApp.directives", []);

    directives.directive('mainDiv', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/static/templates/main-div.html',
            controller: 'app/js/global-controller.js',
            controllerAs : 'global',
        };
    });
});
