'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp.services', []);
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.services'
]).
config(['$routeProvider', function($routeProvider) {
  var session = {
        session: function(userService){
            console.log('resolve..');
            var resolve = userService.get();
            console.log('returning resolve');
            return resolve;
        }
    };

  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    resolve: session
  });
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    resolve: session
  });

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
