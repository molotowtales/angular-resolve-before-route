myApp.factory('userService', ['$http', '$q', function ($http, $q) {
    console.log('return userService');
    var userService = {
        get: function () {
            console.log('start get');

            var promise = $q.defer();

            var requestURL = '/app/index.html?' + Math.random().toString(36).replace(/[^a-z]+/g, '');

            console.log(requestURL);
            $http({method: 'GET', url: requestURL}).
              success(function (data, status, headers, config) {
                  console.log('resolve promise');
                  promise.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  console.log('reject promise');
                  promise.reject(data);
              });

            console.log('return promise');
            return promise.promise;
        }
    };
    return userService;
}]);
