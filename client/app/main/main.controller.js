'use strict';

angular.module('internalLibraryApp')
    .controller('MainCtrl', function ($scope, $http, socket) {
        $scope.categories = [];

        $http.get('/api/categories').success(function (categories) {
            $scope.categories = categories;

            categories.forEach(function (category) {

                $http.get('/api/categoryphotos/' + category.name).success(function(categoryphoto) {
                    console.log(categoryphoto);
                    console.log(categoryphoto[0].url);
                    category.url = categoryphoto[0].url;
                });

            });
            //socket.syncUpdates('category', $scope.categories);
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
