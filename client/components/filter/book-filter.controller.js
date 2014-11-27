'use strict';

angular.module('internalLibraryApp').controller('ButtonsCtrl', function ($scope) {

    var reset = function () {
        for (var filter in $scope.filtersModel) {
            $scope.filtersModel[filter].value = false;
        }
    };

    $scope.doAction = function (key) {
        $scope.filtersModel[key].action && $scope.filtersModel[key].action();
    };

    $scope.filtersModel = {
        all: {
            title: "All",
            value: true,
            action: [ reset ]
        },
        papers: {
            title: "Papers",
            value: false,
            action: [ offAll]

        },
        pdf: {
            title: "PDF",
            value: false
        },
        ebook: {
            title: "E-book",
            value: false
        },
        available: {
            title: "Available",
            value: false
        },
        unavailable: {
            title: "Unavailable",
            value: false
        },
        new: {
            title: "New",
            value: false
        }
    };

});