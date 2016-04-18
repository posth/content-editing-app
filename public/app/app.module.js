(function() {
    'use strict';
    
    angular
        .module('app', [
            
            //Angular modules
            'ngRoute',
            // where we will call our data from scraper and db?
            'app.core',
            
            //Third party modules - comes from angular fire script in index
            'firebase',
            
            //Custom modules
            'app.domains',
            'app.layout',
            'app.editor'
            
            ]);
            
})();
