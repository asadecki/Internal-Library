'use strict';

angular.module('internalLibraryApp')
    .config(function ($routeProvider) {
        $routeProvider.when('/book/single/:id', {
            templateUrl: 'app/book/single/book-single.html',
            controller: 'SingleBookCtrl'
        });
    });