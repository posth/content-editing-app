(function() {
    'use strict';

    angular
        .module('app.core', [])
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($http, $location, $q, exception, $firebaseArray) {
       
        var service = {
            // getPage: getPage,
            getLinks: getLinks,
            links: links
        };

        return service;

        function getLinks(payload) {
            
            // var url = 'https://web-scraper-multimo.c9.io:8081/client/links';

            // var data = domain;
            
            // var response = $http.post(url, data)
            //     .success(function(response) {
                   
            //       return  vm.links =  response;
            //     })
            
            $http.post('https://web-scraper-multimo.c9.io:8081/client/links', payload)
                .then( scrapeLinksComplete ).catch(function(message) {
                    exception.catcher('XHR Failed for Links')(message);
                    $location.url('/');
                });

            function scrapeLinksComplete(data, status, headers, config) {
                return links = data;
            }
        }

        // function getPage() {
        //     var count = 0;
        //     return getAvengersCast()
        //         .then(getAvengersCastComplete)
        //         .catch(exception.catcher('XHR Failed for getAvengerCount'));

        //     function getAvengersCastComplete (data) {
        //         count = data.length;
        //         return $q.when(count);
        //     }
        // }

    }

       
})();