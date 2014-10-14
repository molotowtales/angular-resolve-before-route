'use strict';

angular.module('myApp.view2', ['ngRoute'])

.controller('View2Ctrl', ['session', function(session) {
    console.log(session);
    console.log('hey! View2Ctrl initialized!');
}]);
