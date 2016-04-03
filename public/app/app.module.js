(function() {
    'use strict';
    
    angular
        .module('app', [
            
            //Angular modules
            'ngRoute',
            //Third party modules - comes from angular fire script in index
            'firebase',
            //Custom modules
            'app.domains',
            'app.layout'
            
            ]);
            
})();
