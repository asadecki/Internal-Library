'use strict';

angular.module('internalLibraryApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/categories/books/:name', {
                templateUrl: 'app/category/category.html',
                controller: 'CategoryCtrl',
              authenticate: false
            });
    });

function showAddBookForm() {
    document.getElementById("addBookForm").classList.remove('hidden');
    document.getElementById("addBookButton").classList.add('hidden');
}
