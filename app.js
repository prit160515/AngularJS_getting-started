(function () {
  "use strict";

  angular
    .module("myFirstApp", [])

    .controller("MyFirstController", function ($scope) {
      $scope.name = "Prit Patel" + "test1";
      $scope.func = (test) => {
        return `Your work is ${test}`;
      };
    });
})();
