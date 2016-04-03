(function() {
    'use strict';
    
    angular
        .module('app.layout')
        .directive('customNavbar', customNavbar);
        
        function customNavbar() {
            
            return {
                templateUrl: 'public/app/layout/navbar.html',
                restrict: 'E'
            };
        }
        
        
})();