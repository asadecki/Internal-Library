'use strict';

angular.module('internalLibraryApp').controller('ButtonsCtrl', function ($scope, $rootScope) {

  var actions = {
    buttonsOff: function() {
      for (var filter in $scope.filtersModel) {
        $scope.filtersModel[filter].value = false;
      }
    },
    buttonAllOff: function() {
      $scope.filtersModel.all.value = false;
      $rootScope.$broadcast('x12', 6);
    }
  };

  $rootScope.$on('x12', function(ev, arg) {
  console.log(arg);

  });

  $scope.doAction = function(actionsArray) {
    actionsArray && _.forEach(actionsArray, function(action) {
      action();
    });
  };

  $scope.filtersModel = {
    all: {
      title: "All",
      value: true,
      action: [ actions.buttonsOff ]
    },
    papers: {
      title: "Papers",
      value: false,
      action: [ actions.buttonAllOff ]
    },
    pdf: {
      title: "PDF",
      value: false,
      action: [ actions.buttonAllOff ]
    },
    ebook: {
      title: "E-book",
      value: false,
      action: [ actions.buttonAllOff ]
    },
    available:  {
      title: "Available",
      value: false,
      action: [ actions.buttonAllOff ]
    },
    unavailable:  {
      title: "Unavailable",
      value: false,
      action: [ actions.buttonAllOff ]
    },
    new:  {
      title: "New",
      value: false,
      action: [ actions.buttonAllOff ]
    }
  };

});