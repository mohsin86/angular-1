app.factory('shows', ['$http', function($http) {
    return $http.get('http://localhost/angular-1/Services/top-10/shows.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);