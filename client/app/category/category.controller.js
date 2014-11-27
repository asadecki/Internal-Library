'use strict';

angular.module('internalLibraryApp')
    .controller('CategoryCtrl', function ($scope, $http, socket) {
        $scope.books = [];

        $http.get('/api/categories/books/PHP').success(function (books) {
            $scope.books = books;
        });

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('book');
        });
    });
