(function() {
    'use strict';
    
    angular
        .module('app.domains')
        .controller('DomainsController', DomainsController);
        
    DomainsController.$inject = ['$firebaseArray'];
        
    function DomainsController($firebaseArray) {
        //can reference this instance/context of our controller in different areas of our code
        var vm = this;
        
        //connection to firebase
        var fireDomains = new Firebase('https://content-editing-app.firebaseio.com/domains');
        
        //domain constructor
        function Domain() {
            this.url = ''
        }
        
        vm.newDomain = new Domain();
        
        vm.domains = $firebaseArray(fireDomains);
        
        //making the function accessible to the view
        vm.addDomain = addDomain;
        
        vm.removeDomain = removeDomain;
        
        function addDomain() {
            vm.domains.$add(vm.newDomain);
        }
        
        function removeDomain(domain) {
            vm.domains.$remove(domain);
        }
        
    }
    
})();