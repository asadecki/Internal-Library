'use strict';

angular.module('internalLibraryApp')
    .controller('SingleBookCtrl', function ($scope, $http, $routeParams) {

      console.log($routeParams._id);
      $http.get('/api/books/' + $routeParams.id).success(function (book) {
        $scope.bookTitle = book.title;
        $scope.author = book.author;
        $scope.category = book.category;
        $scope.description = book.description;
        $scope.isPdfVersion = book.isPdfVersion;
        $scope.isEbookVersion = book.isEbookVersion;
        $scope.isPaperVersion = book.isPaperVersion;
        $scope.whoHasGotItNow = book.whoHasGotItNow;

        $http.get('/api/bookphotos/' + book.title).success(function (bookphoto) {
          $scope.url = bookphoto[0].url;
        });
        // socket.syncUpdates('thing', $scope.categories);
      });
    }
);