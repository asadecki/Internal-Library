'use strict';

angular.module('internalLibraryApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/book/list', {
                templateUrl: 'app/book/list/book-list.html',
                controller: 'BookListCtrl'
            }).when('/book', {
                templateUrl: 'app/book/single/book-single.html',
                controller: 'SingleBookCtrl'
            });
    });