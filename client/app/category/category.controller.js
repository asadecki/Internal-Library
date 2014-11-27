'use strict';

angular.module('internalLibraryApp')
    .controller('CategoryCtrl', function ($scope, $http, $routeParams) {
        $scope.books = [];
        $scope.categoryName = $routeParams.name;
        $http.get('/api/categories/books/' + $routeParams.name).success(function (books) {
            console.log("xxxxx");
            $scope.books = books;
        });
    });
