/**
 * Created by Dmitriy on 08.04.2017.
 */
(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$scope', 'MenuService', 'AccountService', '$timeout'];
    function SignUpController($scope, MenuService, AccountService, $timeout) {
        var $ctrl = this;
        $ctrl.reg = {};
        $ctrl.isSignedUp = false;
        $ctrl.dishChanged = function () {
            if (!$ctrl.reg.user.favoritedish) {
                $scope.signupForm['favoritedish'].$setValidity('favoritedish', false);
                return;
            }
            $timeout.cancel($ctrl.checkDishValidity);
            $ctrl.checkDishValidity = $timeout(checkIsDishExist, 600);

        }
        function checkIsDishExist() {
            MenuService.getMenuItem($ctrl.reg.user.favoritedish).then(function (response) {
                $scope.signupForm['favoritedish'].$setValidity('favoritedish', true);
            }).catch(function (error) {
                $scope.signupForm['favoritedish'].$setValidity('favoritedish', false);
            });
        };
        $ctrl.reg.submit = function () {
            MenuService.getMenuItem($ctrl.reg.user.favoritedish).then(function (response) {
                if ($scope.signupForm.$valid) {
                    AccountService.setAccount($ctrl.reg.user);
                    $ctrl.reg = {};
                    $ctrl.isSignedUp = true;
                    $scope.signupForm.$setPristine();
                    $scope.signupForm.$setUntouched();
                }
            }).catch(function (error) {
                return;
            });

        };
    };
})();
