/**
 * Created by Dmitriy on 09.04.2017.
 */
(function () {
    "use strict";

    angular.module('common')
        .service('AccountService', AccountService);


    AccountService.$inject = [];
    function AccountService() {
        var service = this;
        service.account = {};

        service.setAccount = function (account) {
            service.account = account;
        }
        service.getAccount = function () {
            return service.account;
        }

        return service;
    }


})();
