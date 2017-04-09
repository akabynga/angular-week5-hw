/**
 * Created by Dmitriy on 08.04.2017.
 */
(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$scope', 'MenuService', 'AccountService'];
    function SignUpController($scope, MenuService, AccountService) {
        var $ctrl = this;
        $ctrl.reg = {};
        $ctrl.isSignedUp = false;

        $ctrl.reg.submit = function () {

            if (!$ctrl.reg.user.favoritedish) {
                $ctrl.reg.extraClass = 'ng-invalid';
                return;
            }
            MenuService.getMenuItem($ctrl.reg.user.favoritedish).then(function (response) {
                $ctrl.reg.extraClass = 'ng-valid';
                if ($scope.signupForm.$valid) {
                    AccountService.setAccount($ctrl.reg.user);
                    $ctrl.reg = {};
                    $ctrl.isSignedUp = true;
                    $scope.signupForm.$setPristine();
                    $scope.signupForm.$setUntouched();
                }
            }).catch(function (error) {
                $ctrl.reg.extraClass = 'ng-invalid';
            });
        };
    }

})();
