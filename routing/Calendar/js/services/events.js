app.factory('events', ['$http', function($http) {
    return $http.get('http://localhost/angular-1/routing/Calendar/events.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);