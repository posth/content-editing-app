(function() {
    'use strict';

    angular
        .module('app.core', [])
        .factory('dataservice', dataservice);
        
        dataservice.$inject = ['$http', '$location', '$firebaseArray'];

        /* @ngInject */
        function dataservice($http, $location, $firebaseArray) {
       
        var service = {
            // getPage: getPage,
            getLinks: getLinks
        };
        return service;
        
        var links;
        
        function getLinks(payload) {
            // need to return the promise ie return the https request that was made
            // allows us to handle the promise in the controler as well and have asnyc there
            return $http.post('https://web-scraper-multimo.c9.io:8081/client/links', payload)
                .success(function(response) {
                  service.getLinks.data =  response;
                  return service.getLinks.data
                });
        }

    }

       
})();