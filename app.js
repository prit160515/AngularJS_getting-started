(function () {
  "use strict";

  angular
    .module("myFirstApp", [])

    .controller("MyFirstController", function ($scope) {
      $scope.name = "Prit Patel";
      $scope.func = (test) => {
        return `Your work is ${test}`;
      };
    });
})();
