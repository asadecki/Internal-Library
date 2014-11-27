'use strict';

angular.module('internalLibraryApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/book/list', {
                templateUrl: 'app/book/list/book-list.html',
                controller: 'BookListCtrl'
            });
    });