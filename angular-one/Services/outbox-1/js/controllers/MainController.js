app.controller('MainController', ['$scope','emails', function($scope,emails) {
    emails.success(function(data) {
        $scope.emails = data;
    });
}]);