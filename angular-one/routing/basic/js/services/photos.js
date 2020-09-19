app.factory('photos', ['$http', function($http) {
    return $http.get('http://localhost/angular-1/routing/photos.json')
        .success(function(data) {
            return data;
        })
        .error(function(data) {
            return data;
        });
}]);
