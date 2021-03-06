(function() {
    'use strict';
    
    angular
        .module('app.domains')
        .config(configFunction);
        
        configFunction.$inject = ['$routeProvider'];
        
        function configFunction($routeProvider) {
            $routeProvider.when('/', {
               templateUrl: 'public/app/domains/domains.html',
               controller: 'DomainsController',
               controllerAs: 'vm'
            });
        }
})();