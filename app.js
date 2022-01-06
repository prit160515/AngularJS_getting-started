(function () {
  "use strict";

  angular
    .module("myFirstApp", [])

    .controller("MyFirstController", function ($scope) {
      $scope.name = "Prit Patel" + "test2";
      $scope.func = (test) => {
        return `Your passion is ${test}`;
      };
    });
})();
