(function() {
    'use strict';
    
    angular
        .module('app.editor')
        .config(configFunction);
        
        configFunction.$inject = ['$routeProvider'];
        
        function configFunction($routeProvider) {
            $routeProvider.when('/edit', {
               templateUrl: 'public/app/editor/editor.html',
               controller: 'EditorController',
               controllerAs: 'vm'
            });
        }
})();