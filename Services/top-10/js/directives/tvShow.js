app.directive('tvShow', function() {
    return {
        restrict: 'E',
        scope: {
            show: '='
        },
        templateUrl: 'js/directives/tvShow.html'
    };
});