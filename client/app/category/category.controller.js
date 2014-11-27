'use strict';

angular.module('internalLibraryApp')
    .controller('CategoryCtrl', function ($scope, $http, $routeParams) {
        $scope.books = [];
        $scope.categoryName = $routeParams.name;
        $http.get('/api/categories/books/' + $routeParams.name).success(function (books) {

            $scope.books = books;

            books.forEach(function (book) {

                $http.get('/api/bookphotos/' + book.title).success(function (bookphoto) {
                    book.url = bookphoto[0].url;
                });
            });
        });
    });
