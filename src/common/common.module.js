(function () {
    "use strict";

    angular.module('common', [])
        .constant('ApiPath', 'https://akabynga-course5.herokuapp.com')
        .config(config);

    config.$inject = ['$httpProvider'];
    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }

})();
