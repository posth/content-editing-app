(function() {
    'use strict';
    /* global angular */
    angular
        .module('app.domains')
        .directive('listOfLinks', listOfLinks)
        .controller('DomainsController', DomainsController);
        
        
    
     function listOfLinks() {
        
        var directive = {
            restrict: 'A',
            templateUrl: 'public/app/domains/links.directive.html',
            scope: {
                max: '='
            },
            // controller: DomainsController,
            // controllerAs: 'vm'
        };
        return directive;
    }
    
    
    DomainsController.$inject = ['$firebaseArray', '$http', '$scope', '$location', 'dataservice'];
    
    
    function DomainsController($firebaseArray, $http, $scope, $location, dataservice) {
        //can reference this instance/context of our controller in different areas of our code
        var vm = this;
        
        //connection to firebase
        var fireDomains = new Firebase('https://content-editing-app.firebaseio.com/domains');
        
        //domain constructor
        function Domain() {
            this.url = ''
        }
        console.log(dataservice);
        vm.newDomain = new Domain();
        
        vm.domains = $firebaseArray(fireDomains);
        
        //making the function accessible to the view
        vm.addDomain = addDomain;
        
        vm.removeDomain = removeDomain;
        
        //clicking on div domain to start scraping it
        vm.visitDomain = visitDomain;
        
        
        // sends request via click to scrape just one page (what ever domain is listed)

        function visitDomain(domain) {
            
            var url = 'https://web-scraper-multimo.c9.io:8081/client';

            var data = domain;
            
            var response = $http.post(url, data)
                .success(function(response) {
                    vm.page =  response;
                    //change view here
                });

                
        }
        // sends request to scraper which returns links
        vm.linksDomain = linksDomain;
        
        function linksDomain(domain) {
            
            // promise reutrned from dataservice is then added to vm.links and displayed on the dom
            // only after request is complete
            return dataservice.getLinks(domain)
                .then(function(data) {
                // instseaf of assigning it to vm.links we could use a dirrective 'listofLinkst, listofLinkso display the data #todolol
                vm.links = dataservice.getLinks.data;
                })

        }
           
        
        
            
        // add links to send so we can pagenate through what they want home, about, services etc.
        vm.addLinks = addLinks;
        // array that will be used for pagnation
        vm.addLinks.links = [];
        
        //click function thats adds to array
        // needs something to remove domains from array
        // submit will send them to api which will return all of the domains and pages to be built
        function addLinks (link) {
            if (addLinks.links.indexOf(link) == -1) {
                addLinks.links.push(link);
            } else {
                console.log('no dupes pls')
            }
            
            console.log(addLinks.links);
        }
        
        vm.removeLinks = removeLinks;
        
        function removeLinks (link) {
            addLinks.links.splice(link, 1);
            console.log(addLinks.links);
        }
        
        vm.allPages = allPages;
        
        function allPages (data) {
            
            // maybe instead of just sending for data we make this a service and..
            // upload it to firebase or find a way to send this array to the editor page
            //for editing
            var url = 'https://web-scraper-multimo.c9.io:8081/client/pag';
    
            var data = data;
                
            var response = $http.post(url, data)
                .success(function(response) {
                       
                vm.allresponse =  response;
            })
                    
                
                
        }
        
        
        function addDomain() {
            vm.domains.$add(vm.newDomain);
        }
        
        function removeDomain(domain) {
            vm.domains.$remove(domain);
        }
        
    }
    
   


    
})();