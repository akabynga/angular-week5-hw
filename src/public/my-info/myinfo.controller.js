/**
 * Created by Dmitriy on 08.04.2017.
 */
(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['AccountService', 'MenuService', 'ApiPath'];
    function MyInfoController(AccountService, MenuService, ApiPath) {
        var $ctrl = this;
        $ctrl.basePath = ApiPath;

        $ctrl.isEmptyObject = function (object) {
            return Object.keys(object).length == 0;
        };

        $ctrl.account = AccountService.getAccount();

        if ($ctrl.account.favoritedish) {
            MenuService.getMenuItem($ctrl.account.favoritedish).then(function (response) {
                $ctrl.dish = response;
            });
        }


    }


})();
