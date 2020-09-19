app.factory('emails', ['$http', function($http) {
    return $http.get('http://localhost/angular-1/routing/outbox-2/emails.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);