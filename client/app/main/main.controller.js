'use strict';

angular.module('internalLibraryApp')
    .controller('MainCtrl', function ($scope, $http, socket) {
        $scope.categories = [];

        $http.get('/api/categories').success(function (categories) {
            $scope.categories = categories;
            socket.syncUpdates('thing', $scope.categories);
        });

        //$scope.addThing = function () {
        //    if ($scope.newThing === '') {
        //        return;
        //    }
        //    $http.post('/api/books', { name: $scope.newThing });
        //    $scope.newThing = '';
        //};

        //$scope.deleteThing = function (thing) {
        //    $http.delete('/api/books/' + thing._id);
        //};

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('book');
        });
    });
