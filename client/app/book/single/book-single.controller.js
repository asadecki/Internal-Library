'use strict';

angular.module('internalLibraryApp')
    .controller('SingleBookCtrl', function ($scope, $http) {
        $scope.bookTitle = 'JAVA 8';
        $http.get('/api/books/54770aa0f44ed6e508e513b9').success(function (book) {
            $scope.author = book.author;
            $scope.category = book.category;
            $scope.description = book.description;
            $scope.isPdfVersion = book.isPdfVersion;
            $scope.isPaperVersion = book.isPaperVersion;
            $scope.whoHasGotItNow = book.whoHasGotItNow;

            // socket.syncUpdates('thing', $scope.categories);
        });
    }
);