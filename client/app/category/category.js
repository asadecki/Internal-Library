'use strict';

angular.module('internalLibraryApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/category/books', {
                templateUrl: 'app/category/category.html',
                controller: 'CategoryCtrl'
            });
    });