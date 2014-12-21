'use strict';

angular.module('internalLibraryApp')
    .controller('MainCtrl', function ($scope, $http, socket, Auth) {
        $scope.categories = [];

        $http.get('/api/categories').success(function (categories) {
            $scope.categories = categories;

            categories.forEach(function (category) {

                $http.get('/api/categoryphotos/' + category.name).success(function(categoryphoto) {
                    category.url = categoryphoto[0].url;
                });

            });
            //socket.syncUpdates('category', $scope.categories);
        });


        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('book');
        });
    });
