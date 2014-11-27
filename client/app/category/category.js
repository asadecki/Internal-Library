'use strict';

angular.module('internalLibraryApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/categories/books/:name', {
                templateUrl: 'app/category/category.html',
                controller: 'CategoryCtrl',
              authenticate: true
            });
    });